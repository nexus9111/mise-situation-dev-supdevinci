const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config/variables");
const errors = require("../config/errors");

const User = require("../models/userModels");
const Comment = require("../models/commentModels");

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
        return responseUtils.successResponse(res, req, 201, {
            message: "User created",
            user: responseUtils.safeDatabaseData(user),
            token: token,
        });
    } catch (error) {
        next(error);
    }  
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            responseUtils.errorResponse(req, errors.errors.FORBIDDEN, "Missing data");
        }

        // check if user exists
        let user = await User.findOne({email: email});
        if (!user) {
            // wait 300ms to prevent brute force
            await new Promise((resolve) => setTimeout(resolve, 300));
            responseUtils.errorResponse(req, errors.errors.FORBIDDEN, "Credentials are incorrect");
        }

        // check if password is correct
        let passwordCorrect = await bcrypt.compare(password, user.password);
        if (!passwordCorrect) {
            responseUtils.errorResponse(req, errors.errors.FORBIDDEN, "Credentials are incorrect");
        }

        //generate token
        let token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });

        // return success
        return responseUtils.successResponse(res, req, 200, {
            message: "User logged in",
            user: responseUtils.safeDatabaseData(user),
            token: token,
        });
    } catch (error) {
        next(error);
    }
};

exports.profile = async (req, res, next) => {
    try {
        // get user from database
        let user = await User.findOne({id: req.connectedUser.id}).select("-__v -_id");

        // comment by user
        let comments = await Comment.find({authorId: req.connectedUser.id}).select("-__v -_id");

        // return success
        return responseUtils.successResponse(res, req, 200, {
            message: "User profile",
            user: responseUtils.safeDatabaseData(user),
            comments: responseUtils.safeDatabaseArray(comments),
        });
    } catch (error) {
        next(error);
    }
};