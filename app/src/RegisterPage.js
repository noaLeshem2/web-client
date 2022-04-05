
function RegisterPage() {
    return (
        <header className="App-header">
            <div class="container">
                <div class="row justify-content-md-center">
                    <ul class="fooo">
                        <div>
                            Username:<input id="username" placeholder="Enter Username"></input>
                        </div>
                        <div>
                            Password:<input id="password" placeholder="Enter Password"></input>
                        </div>
                        <div>
                            Display Name:<input id="display-Name" placeholder="Enter Name"></input>
                        </div>
                        <div>
                            Already registered? <a href='' type="button" class="h">Click here</a> to login
                        </div>
                        <div><button type="button" class="btn btn-outline-primary">Login</button></div>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default RegisterPage;