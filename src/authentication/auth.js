class AuthDataCreator {
    constructor(email, password) {
        this.email = email
        this.password = password
        this.returnSecureToken = true

    }

    getEmail() {
        return this.email
    }

    changeEmail(email) {
        return this.email = email
    }

    getPassword() {
        return this.password
    }

    changeEmail(password) {
        return this.email = password
    }

    changeSecureToken(value) {
        if (typeof value === "boolean") {
            this.returnSecureToken = value
        }
        throw new Error("Secure token must be boolean value!")
    }
}


export default AuthDataCreator