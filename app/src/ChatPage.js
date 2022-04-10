import './ChatPage.css';
import User from './usersFolder/User';
import users from './usersFolder/usersList.js';

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
                            <div>The CHAT</div>
                        </div>
                    </div>
                </div>
            

        </>
    );
}

export default ChatPage;