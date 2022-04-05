
function LoginPage(){
    return(
        <header className="App-header">
            <div class="container">
                <div class="row justify-content-md-center">
                        <ul class="fooo">
                            <div>
                                Username:<input id="username" placeholder="Enter Username"></input>
                            </div>
                            <div>
                                Password:<input type="text" placeholder="Enter Password"></input>
                            </div>
                            <div><button type="button" class="btn btn-outline-primary">Login</button></div>
                        </ul>
                    </div>
            </div>
        </header>
    );
}

export default LoginPage;