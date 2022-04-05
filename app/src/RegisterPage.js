import LoginPage from "./LoginPage";

function RegisterPage() {
    function conditionUser() {
        var username = document.getElementById("username")
        let text1 = "ab";
        let text2 = "cd";
        let result = text1.localeCompare(text2);
        
        alert('Username or password incorrect')
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
                            Password:<input type="password" placeholder="Enter Password"></input>
                        </div>
                        <div>
                            Display Name:<input type="display-Name" placeholder="Enter Name"></input>
                        </div>
                        <div>
                            Already registered? <a href='/' type="button" class="h">Click here</a> to login
                        </div>
                        <button onClick={() => conditionUser()}>
                            login
                        </button>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default RegisterPage;