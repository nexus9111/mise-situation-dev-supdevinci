# 🎯 Api

## ℹ️ Informations

This api include:

- 📝 Loggers (winston)
- 📚 MongoDB database
- 🪞 PROD and DEV environment
- 🛡 High level of protection (HTTP headers, anti-dos, ip filter, protected routes)
- 🔀 Express routing
- ✨ Structured api
Basic register/login route are implemented to show how to use the api.


## 🛠 Installation

#### 📦 With Docker (easy way)

```console
$ docker-compose build; docker-compose up -d
```

#### 🤯 Without Docker (hard way)

---

###### 🔎 Requirements

- NodeJS installed
- MongoDB database running on your machine
    - You can install it <a href="https://www.mongodb.com/docs/manual/administration/install-community/">here</a>

---

####### ✅ Installation

```console
$ chmod u+x easy-install.sh
$ ./easy-install.sh
```

if you are on window os or `easy-install.sh` does not work:

```console
$ cp .env.example .env.development
$ cp .env.example .env.production
$ npm i
```

####### 🚀 Run

Basic run:

```console
# Run with dev env:
$ npm start

# Run with autoreload dev env:
$ npm run dev

# Run with prod env:
$ npm run prod
```

*⚠️ if you are window os user and have issue to run the api, run this commande before: `npm install -g win-node-env`*

## ✒️ License:

- Author: Joss C.
- Creation date: 27/03/2023 (dd/mm/yyyy)