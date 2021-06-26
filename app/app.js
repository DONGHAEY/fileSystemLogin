const express = require("express"); //express모듈을 불러옴
const app = express(); //app이라고 

const home = require("./src/routes/home");

app.set("views", "./src/views"); //app 프론트엔드, 곧 사용자에게 보여질 파일을 지정
app.set("view engine", "ejs"); //보여질 파일의 확장자를 선택

app.use("/", home); // use => 미들웨어를 등록해주는 메서드

app.use(express.static(`${__dirname}/src/public`))

module.exports = app;