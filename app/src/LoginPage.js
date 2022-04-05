
function LoginPage() {
    function conditionUser() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if(username == "" || password == ""){
            alert('Username or password incorrect')
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