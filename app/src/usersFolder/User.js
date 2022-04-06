function User(username, password, displayName){
    return(
        <div className="col-1 col-lg-3 g-0">
            <a className="card" href="details.html">
                
                <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <p className="card-text">{password}</p>
                    <p className="card-text">{displayName}</p>
                </div>
            </a>
        </div>
    )
}

export default User;