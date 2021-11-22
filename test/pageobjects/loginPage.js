class Login {

    get username() {
        return $("[id='username']")
    }
    get password() {
        return $("#password")
    }
    get signInButton() {
        return $(".btn.btn-info")
    }
    get alertBox() {
        return $(".alert.alert-danger")
    }
    get textInfo(){
        return $(".form-group p")
    }
    async login(username, password) {
        console.log('1')
        await this.username.setValue(username)
        console.log('2')
        await this.password.setValue(password)
        console.log('3')
        await this.signInButton.click()
        console.log('4')
    }
}

module.exports = new Login()