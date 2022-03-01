const data = [
    {
        name: null,
        email: null,
        pass: null,
        repass: null
    }
]

module.exports = class Registry {
    constructor(name, email, pass, repass){
        this.name = name
        this.email = email
        this.pass = pass
        this.repass = repass
    }

    save(){
        data.push(this)
    }

    static getAll(){
        return data
    }
}