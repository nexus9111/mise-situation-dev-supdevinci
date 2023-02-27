const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config/variables");
const errors = require("../config/errors");

const User = require("../models/userModels");

const responseUtils = require("../utils/apiResponseUtils");

const SALT_ROUNDS = 10;

exports.register = async (req, res, next) => {
    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            responseUtils.errorResponse(req, errors.errors.FORBIDDEN, "Missing data");
        }

        // check if user already exists
        let userExist = await User.find({$or: [{email: email}, {username: username}]});
        if (userExist.length > 0) {
            // wait 300ms to prevent brute force
            await new Promise((resolve) => setTimeout(resolve, 300));
            responseUtils.errorResponse(req, errors.errors.CONFLICT, "User already exists");
        }

        //hash password
        let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // create new user
        let newUser = new User({
            email: email,
            password: hashedPassword,
            username: username,
        });

        // save user to database
        let user = await newUser.save();

        //generate token
        let token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });

        // return success
        return responseUtils.successResponse(res, req, 200, {
            message: "User created",
            user: responseUtils.safeDatabaseData(user),
            token: token,
        });
    } catch (error) {
        next(error);
    }  
};

// exports.mainController = (req, res, next) => {
//     try {
//         return responseUtils.successResponse(res, req, 200, {
//             message: "Main controller",
//             foo: "bar",
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// exports.mainErrorController = (req, res, next) => {
//     try {
//         // custom status code before throw error
//         responseUtils.errorResponse(req, errors.errors.FORBIDDEN, "Main error controller");
//     } catch (error) {
//         next(error);
//     }
// };

// exports.dataBaseController = async (req, res, next) => {
//     try {
//         if (!USE_DATABASE) {
//             responseUtils.errorResponse(req, errors.errors.FORBIDDEN, "Database is not used");
//         }

//         // insert data to database
//         let newData = new exampleModel({
//             name: uuidv4(),
//             age: 20,
//         });
//         await newData.save();

//         let data = await exampleModel.find({});
//         return responseUtils.successResponse(res, req, 200, {
//             message: "Main error controller",
//             data: responseUtils.safeDatabaseArray(data),
//         });
//     } catch (error) {
//         next(error);
//     }
// };
