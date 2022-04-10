import './ChatingWith.css';
function ChatingWith({ displayName, message, img, time }) {
    return (
        <>
            <div class="container">
                <div class="row theChat row-cols-2">
                    <div class="col-1 position-relative">
                        <img id="circle" class="position-absolute top-50 start-50 translate-middle" src={img} alt="..."></img>
                    </div>
                    <div class="col-11">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1 name">{displayName}</h5>
                        </div>
                        <small class="col-2">last seen at {time}</small>
                    </div>
                </div>
                
            </div>

        </>
    );
}

export default ChatingWith;