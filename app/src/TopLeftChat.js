import userMap from './usersFolder/usersList.js';
import './usersFolder/Users.css';
import addPerson from './addPerson.jpeg';
function TopLeftChat({ username }) {
    var x = userMap[username];
    return (
        <>
            <div className="container">
                <div className="row">
                    <div class="col-2 position-relative">
                        <img id="circle" class="position-absolute top-50 start-50 translate-middle" src={x.img} alt="..."></img>
                    </div>
                    <div class="col-8">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1 name">{x.displayName}</h5>
                        </div>
                    </div>

                    <img src={addPerson} class="col-2"></img>

                </div>
            </div>
        </>
    );
}
export default TopLeftChat;