import {notify} from "./notification.js";

let LoginForm = class extends Object {
    /*
    * + HTMLFormElement init()
    + void display(HTMLElement container)
    + boolean validate()*/
    form: HTMLFormElement;
    usernameInput: HTMLInputElement;
    passwordInput: HTMLInputElement;
    submitBtn: HTMLInputElement;

    init(): void {
        this.form = document.createElement("form");
        this.form.active = "./UserDao.php";
        this.form.method = "post";

        this.form.innerHTML = `
            <label>username: <input type="text" name="username" /></label>
            <label>password: <input type="text" name="password" /></label>
            <input type="submit" />
        `;

        this.usernameInput = this.form.querySelector("input[name='username']");
        this.passwordInput = this.form.querySelector("input[name='password']");
        this.submitBtn = this.form.querySelector("input[type='submit']");

        let that = this;
        this.submitBtn.onclick = function (ev) {
            ev.preventDefault();

            if (!that.validate()) {
                notify.println("input invalidly");
                return false;
            }

            let formData: FormData = new FormData();
            formData.append("username", that.usernameInput.value);
            formData.append("password", that.passwordInput.value);
            console.log(that.usernameInput.value,
                that.passwordInput.value);

            let request: Request = new Request("./UserDao", {
                method: "post",
                body: formData,
            });

            fetch(request)
                .then(response => {
                    console.log(response);
                    return response.text()
                })
                .then(text => {
                    console.log(text);
                    if (text === "OK"){
                        notify.println("OK");
                        // alert()
                    }
                    else if (text === "NO")
                        notify.println("No")
                }).catch(error => {
                notify.println(error);
            });
        }

    };

    display(container: HTMLElement = document.body) {
        container?.appendChild(this.form);
    }

    validate(): boolean {
        let usernameReg = /^.{3,9}$/;
        let passwordReg = /^\w{3,9}$/;

        return usernameReg.test(this.usernameInput.value) &&
            passwordReg.test(this.passwordInput.value);
    }
};

export {LoginForm}