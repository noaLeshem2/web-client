function User(){
    return(
        <div class="col-lg-3 col-md-4 col-sm-6">
            <a class="card" href="details.html">
                <img src={img} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{display}</h5>
                    <p class="card-text">{time}</p>
                    <p class="card-text">{lastText}</p>
                </div>
            </a>
        </div>
    )
}