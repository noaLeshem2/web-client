import './ChatingWith.css';
import userMap from './usersFolder/usersList';
function ChatingWith({ friendTop }) {
    if(friendTop == ''){
        return(<></>);
    }
    function handleAddFile(){

    }
    return (
        <>
            <div class="container">
                <div class="row theChat row-cols-2">
                    <div class="col-1 position-relative">
                        <img id="circle" class="position-absolute top-50 start-50 translate-middle" src={userMap[friendTop].img} alt="..."></img>
                    </div>
                    <div class="col-9">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1 name">{userMap[friendTop].displayName}</h5>
                        </div>
                        <small class="col-2">last seen at 13:47</small>
                    </div>
                    <div class="col-2">
                         
                      <i class="bi bi-three-dots-vertical pull-right" onClick={() => handleAddFile()}></i>
                        
                    </div>
                </div>
                
            </div>

        </>
    );
}

export default ChatingWith;