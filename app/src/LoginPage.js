import users from "./usersFolder/usersList";
import './LoginPage.css';

function LoginPage() {
    function conditionUser() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        username = username.trim();
        password = password.trim();
        // if one of the fieald are empty.
        if(username == "" || password == ""){
            alert('Please entar all fields')
            return;
        }

        let len = users.length;
        let position = -1;
        //cheack if username existed
        for(let i = 0; i<len; i++) {
            //const username
            if (users[i].username.localeCompare(username)==0){
                position = i;
                alert('good job')
            }
        }

        // if the username does not exiest.
        if (position == -1) {
            alert('Username is not exist')
        }

        // cheack if the password correct.
        if (users[position].password.localeCompare(password) != 0){
            alert('The password is incorrect')
        }
        
    }
    return (
        <header className="App-header">
            <div class="container">
                <div class="row justify-content-md-center">
                    <ul class="fooo">
                        <div>
                            Username:<input id="username" placeholder="Enter Username"></input>
                        </div>
                        <div>
                            Password:<input type="password" id= "password" placeholder="Enter Password"></input>
                        </div>
                        <div>
                            Not registered? <a href='/Register' type="button" class="h">Click here</a> to register
                        </div>
                        <div>
                            <button onClick={() => conditionUser()}>
                                login
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default LoginPage;