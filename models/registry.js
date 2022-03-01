const connection = require("../utility/database")

module.exports = class Registry {
    constructor(username, email, password, repassword) {
        this.username = username
        this.email = email
        this.password = password
        this.repassword = repassword
    }

    save() {
        connection.query("INSERT INTO REGISTRY (username, email, password, repassword) VALUES (?,?,?,?)", [this.username, this.email, this.password, this.repassword])
    }

    static getAll() {
        return connection.query("SELECT * FROM REGISTRY")
    }
}