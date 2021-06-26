"use strict";

const express = require("express"); //express모듈을 불러옴
const router = express.Router(); //router이라고 express내 모듈을 불러올수 있게 지정

const ctrl = require("./home.ctrl")

router.get("/", ctrl.home);
router.get ("/login", ctrl.login);

module.exports = router;