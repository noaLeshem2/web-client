import users from "./usersFolder/usersList";
import ChatPage from "./LoginPage";
import './LoginPage.css'
import logo from "./logo.jpg"
function LoginPage() {
    function conditionUser() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        username = username.trim();
        password = password.trim();
        // if one of the fieald are empty.
        if (username == "" || password == "") {
            alert('Please entar all fields')
            return;
        }

        let len = users.length;
        let position = -1;
        //cheack if username existed
        for (let i = 0; i < len; i++) {
            //const username
            if (users[i].username.localeCompare(username) == 0) {
                position = i;
                alert('good job')
            }
        }

        // if the username does not exiest.
        if (position == -1) {
            alert('Username is not exist')
            return;
        }

        // cheack if the password correct.
        if (users[position].password.localeCompare(password) != 0) {
            alert('The password is incorrect')
            return;
        }


    }
    return (
        <body className="App-header">
            <div class="head-line">
                <img src={logo} alt="Logo" type="logo" />
            </div>
            <div class="row justify-content-md-center">
                <div class="fooo">
                    <div class="loggg">
                        Login
                    </div>
                    <div>
                        Username:<input type="username" id="username" placeholder="Enter Username"></input>
                    </div>
                    <div>
                        Password:<input type="password" id="password" placeholder="Enter Password"></input>
                    </div>
                    <div class="registering">
                        Not registered? <a href='/Register' type="button" class="h">Click here</a> to register
                    </div>
                    <div>
                        <button types="button" class="btn btn-lg btn-primary" onClick={() => conditionUser()}>
                            Login
                        </button>
                    </div>
                </div>

            </div>
        </body>
    );
}

export default LoginPage;