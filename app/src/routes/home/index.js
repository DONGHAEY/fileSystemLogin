"use strict";

const express = require("express"); //express모듈을 불러옴
const router = express.Router(); //router이라고 express내 모듈을 불러올수 있게 지정

const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.home);
router.get ("/login", ctrl.output.login);
router.get ("/register", ctrl.output.register);

router.post ("/login", ctrl.process.login);
router.post ("/register", ctrl.process.register);

module.exports = router;