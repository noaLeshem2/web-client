import ChatingWith from './ChatingWith';
import './ChatPage.css';
import User from './usersFolder/User';
import users from './usersFolder/fakeUser';
import sami from './usersFolder/profile/sami.jpg';
import Message from './Message';
import TopLeftChat from './TopLeftChat';
import userMap from './usersFolder/usersList.js';
import {useLocation} from "react-router-dom";
import {useState} from 'react';
import MessagesListResult from './MessagesListResult';

function ChatPage() {
    
    const {state} = useLocation();
    const {username} = state;
   
    
    const[msgs, setMsgs] = useState([]);

    
    const doChoose = function(userFriend){
        var friendsDic= userMap[username].myFriends;
        var chatFriend = friendsDic[userFriend];
        console.log(chatFriend);
        setMsgs(msgs=>chatFriend);
        console.log(msgs);
    }


    /*var usernameFriend = 'noale10';
    //while we know who was clicked on, we should get his usernameFriend
    var friendsDic= userMap[username].myFriends;
    var chatFriend = friendsDic[usernameFriend];
    
    const messagesList = chatFriend.map((message, key) => {
        return <Message {...message} key={key} />
    });
    console.log(messagesList);*/

    // the my friends map
    const www = userMap[username].myFriends;
    //list of the friends name
    var friendsName = Object.keys(www);
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
        friends.push({userFriend:obj, displayName: name, message:last_message, img: myImage, time: lastTime})
        friends.sort((a, b) => a.time < b.time ? 1 : -1)
    }
    const userList = friends.map((user, key) => {
        return <User doChoose={doChoose} {...user} key={key} />
    });

    console.log(username)


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
                            <MessagesListResult chatFriend={msgs}/>
                            {/*messagesList*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatPage;