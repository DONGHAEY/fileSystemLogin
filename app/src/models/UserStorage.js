"use strict"

class UserStorage {
    static #users = { //#숨기겠다는 뜻 외부에서 인출 못함 ㅅㄱ
        id : ["admin", "ODONG", "DONGHAEY"],
        psword : ["1234", "1234", "123456"],
        name : ["어디민", "오동헤", "동헤이"],
    };

    static getUsers(...fields) { //제귀 호출사용 여부 O//
        const users =  this.#users;
        const newUsers = fields.reduce((newUsers, filed) => {
            if (users.hasOwnProperty(filed)) {
                newUsers[filed] = users[filed];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;