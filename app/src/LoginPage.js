function LoginPage(){
    return(
        <header className="App-header">
      <div class="container">
              <div class="row justify-content-md-center">
                <div class="col-md-auto">
                  <ul class="fooo">
                      <div>
                          <span>Username:</span>
                          <input type="text" placeholder="Enter Username"></input>
                      </div>
                      <div>
                          <span>Password:</span>
                          <input type="text" placeholder="Enter Password"></input>
                      </div>
                      <div><button type="button" class="btn btn-outline-primary">Login</button></div>
                  </ul>
                </div>
              </div> 
          </div>
    </header>
    );
}

export default LoginPage;