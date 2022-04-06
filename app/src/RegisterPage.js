import LoginPage from "./LoginPage";
import users from "./usersList";

function RegisterPage() {
    function conditionUserRegi() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var displayName = document.getElementById("displayname").value;
        username = username.trim();
        password = password.trim();
        displayName = displayName.trim();
        // if one of the fieald are empty.
        if(username == "" || password == "" || displayName == ""){
            alert('Please entar all fields')
            return;
        }

        let len = users.length;
        //cheack if username existed
        for(let i = 0; i<len; i++) {
            
            if (users[i].username.localeCompare(username)==0){
                alert('This username is already taken. Please choose another one.')
                return;
            }
        }
        if (username.length < 4){
            alert('The user name should be longer than four characters.')
            return;
        }
        if (password.length < 3){
            alert('The password should be longer than three characters.')
            return;
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
                            Password:<input type="password" id="password" placeholder="Enter Password"></input>
                        </div>
                        <div>
                            Display Name:<input type="displayname" id="displayname" placeholder="Enter Name"></input>
                        </div>
                        <div>
                            Already registered? <a href='/' type="button" class="h">Click here</a> to login
                        </div>
                        <button onClick={() => conditionUserRegi()}>
                            login
                        </button>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default RegisterPage;