import ChatingWith from './ChatingWith';
import './ChatPage.css';
import User from './usersFolder/User';
import users from './usersFolder/usersList.js';
import sami from './usersFolder/profile/sami.jpg';
import Message from './Message';
import TopLeftChat from './TopLeftChat';
import userMap from './usersFolder/usersList.js'; 

function ChatPage({ username }) {
    // the my friends map
    const www = userMap[username].myFriends;
    //list of the friends name
    var friendsName = Object.keys(www);
    console.log(friendsName);
    //let i = friends.length;
    var friends = [];
    for (let i = 0; i < friendsName.length; i++){
        var obj = friendsName[i];
        var name = userMap[obj].displayName;
        
        var myImage = userMap[obj].img;
        
        //the list of the chat info
        var listMessage = www[obj];
        var last_message = listMessage[listMessage.length -1].text;
        var lastTime =  listMessage[listMessage.length -1].time;
        friends.push({ displayName: name, message:last_message, img: myImage, time: lastTime})
    }
    console.log(friends)
    const userList = friends.map((user, key) => {
        return <User {...user} key={key} />
    });
    console.log(userList);

    //var x = users[1];
    return (
        <>
            <div className="row chating">
                <div className="col-3">

                    <div className="box">

                        <TopLeftChat username={username} />
                    </div>
                    <div className="chatList">
                        {userList}
                    </div>
                </div>
                <div className="col-9">
                    <div className="messages">
                        <div>
                            <ChatingWith displayName={"amit"} time={"13:00"} message={"hi"} img={sami} />
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