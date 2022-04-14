import userMap from './usersFolder/usersList.js';
import './usersFolder/Users.css';
function TopLeftChat({username}) {
    var x= userMap[username];
    return (
        <>
       
            <div class="col-2 position-relative">
                <img id="circle" class="position-absolute top-50 start-50 translate-middle" src={x.img} alt="..."></img>
            </div>
            <div class="col-9">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 name">{x.displayName}</h5>
                    
                </div>
                <p class="mb-1 name"></p>
            </div>
            
        </>
    );
}
export default TopLeftChat;