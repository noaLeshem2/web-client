import ChatingWith from './ChatingWith';
import './ChatPage.css';
import User from './usersFolder/User';
import users from './usersFolder/usersList.js';
import sami from './usersFolder/profile/sami.jpg';
function ChatPage() {
    const userList = users.map((user, key) => {
        return <User {...user} key={key} />
    });
    return (
        <>
            <div className="row chating">
                <div className="col-3">

                    <div className="chatList">
                        {userList}
                    </div>

                </div>
                <div className="col-9">
                        <div className="messages">
                            <ChatingWith displayName={"shir"} time={"13:00"} message={"hi"} img={sami} />
                        </div>

                </div>
            </div>



        </>
    );
}

export default ChatPage;