import users from "./usersFolder/usersList";
import ChatPage from "./LoginPage";
import './LoginPage.css'
import './RegisterPage'
import logo from "./logo.jpg"
import {Link, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
import userMap from "./usersFolder/usersList";

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

        //userMap.username.password.localeCompare(password)
        // cheack if the username exiest.
        if (userMap.hasOwnProperty(username)) {
             // cheack if the password correct.
             alert('existeddd')
            //var x = users.username;
            if( userMap[username].password.localeCompare(password) != 0){
                alert('The password is incorrect')
                return;
            }
            return;
         // the username does not exiest.
        } else{
            alert('Username is not exist')
        }

        /*
        var x = users[username];
        if(x==null){
            alert('bed');
        }
        else{
            alert('good')
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

        */


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
                        <p> Not registered? <Link to='/RegisterPage' class="h">Click here</Link> to register</p>
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
const rootElement = document.getElementById("root")
ReactDOM.createPortal(<LoginPage />, rootElement)
export default LoginPage;