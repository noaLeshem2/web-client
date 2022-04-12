import './Users.css';

function User({ displayName, message, img, time }) {
    return (
        <>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2 position-relative">
                        <img id="circle" class="position-absolute top-50 start-50 translate-middle" src={img} alt="..."></img>
                    </div>
                    <div class="col-10">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1 name">{displayName}</h5>
                            {/*<small class="col-2">{time}</small>*/}
                        </div>
                        {/*<p class="mb-1 name">{message}</p>*/}
                    </div>
                </div>
            </a>
        
        </>
    );
}

export default User;