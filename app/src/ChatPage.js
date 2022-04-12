import ChatingWith from './ChatingWith';
import './ChatPage.css';
import User from './usersFolder/User';
import users from './usersFolder/usersList.js';
import sami from './usersFolder/profile/sami.jpg';
import Message from './Message';
import TopLeftChat from './TopLeftChat';
import userMap from './usersFolder/usersList.js';
function ChatPage({username}) {
    const userList = users.map((user, key) => {
        return <User {...user} key={key} />
    });
    
    var x= users[1];
    return (
        <>
            <div className="row chating">
                <div className="col-3">

            <div className="box">
                    
                    <TopLeftChat username={username}/>
                    </div>
                    <div className="chatList">
                        {userList}
                    </div>

                </div>
                <div className="col-9">
                    <div className="messages">

                        <div>
                            <ChatingWith displayName={x.displayName} time={"13:00"} message={"hi"} img={sami} />
                        </div>
                        <div className="chatings">

                            <Message img={sami} text={"hhhhjhfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddduuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"} time={"15:20"} to={"noa"} mine={"0"} />
                            <Message img={sami} text={"hhhh"} time={"15:20"} to={"noa"} mine={"1"} />
                            <Message img={sami} text={"hhhhjhfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddduuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"} time={"15:20"} to={"noa"} mine={"0"} />
                            <Message img={sami} text={"hhhh"} time={"15:20"} to={"noa"} mine={"1"} />
                            <Message img={sami} text={"hhhhjhfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddduuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"} time={"15:20"} to={"noa"} mine={"1"} />
                            <Message img={sami} text={"hhhh"} time={"15:20"} to={"noa"} mine={"0"} />
                        </div>

                    </div>

                </div>
            </div>



        </>
    );
}

export default ChatPage;