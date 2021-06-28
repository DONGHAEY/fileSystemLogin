"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }
    login() {

        const body = this.body; //코드가 더러워서 바로 body선언으로
        
        const { id, psword } = UserStorage.getUserInfo(body.id);

       if (id) {
           if(id === body.id && psword === body.psword) {
               return { success : true};
           }
           return { success : false, msg: "비밀번호가 틀렸습니다" };
       }
       return { success : false, msg: "존재하지 않는 아이디입니다"};
    }
}

module.exports = User;