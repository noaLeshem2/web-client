import ChatingWith from './ChatingWith';
import './ChatPage.css';
import User from './usersFolder/User';
import users from './usersFolder/fakeUser';
import sami from './usersFolder/profile/sami.jpg';
import Message from './Message';
import TopLeftChat from './TopLeftChat';
import userMap from './usersFolder/usersList.js';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import MessagesListResult from './MessagesListResult';
import SendMessage from './SendMessage'
import AddFriend from './AddFriend';


function ChatPage() {

    const { state } = useLocation();
    const { username } = state;


    const [msgs, setMsgs] = useState([]);
    const [friendTop, setFriendTop] = useState('');

    // the my friends map
    const www = userMap[username].myFriends;
    //list of the friends name

    const [userFriends, setUserFriends] = useState(userMap);


    //function for changing the chat state
    function chageTheState(chatFriend) {
        //deep clone for rendring
        var newChatFriend = [...chatFriend];
        setMsgs(msgs => newChatFriend);
        console.log(msgs)

    }

    const doChoose = function (userFriend) {
        var friendsDic = userMap[username].myFriends;
        var chatFriend = friendsDic[userFriend];
        setMsgs(msgs => chatFriend);
        setFriendTop(friendTop => userFriend);
    }



    const [buttonPopup, setButtonPopup] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    function plusFriend() {
        var writtenFriend = document.getElementById("writtenFriend").value;
        if (userMap.hasOwnProperty(writtenFriend)) {
            if (userMap[username].myFriends.hasOwnProperty(writtenFriend) || writtenFriend === username) {
                alert('choose another username');
            }
            else {

                userMap[username].myFriends[writtenFriend] = [{ text: '' }];
                var newUserMap = JSON.parse(JSON.stringify(userMap))
                plus(newUserMap);
                setButtonPopup(false);
            }
        }
        else {
            console.log('bed');
            alert('bedJ');
        }

    }


    const plus = function (newUserMap) {
        setUserFriends(userFriends => newUserMap);
    }

    var friendsName = Object.keys(www);
    //let i = friends.length;
    var friends = [];
    for (let i = 0; i < friendsName.length; i++) {
        var obj = friendsName[i];
        var name = userFriends[obj].displayName;

        var myImage = userFriends[obj].img;

        //the list of the chat info
        var listMessage = www[obj];
        if (listMessage === null) {
            last_message = "";
            lastTime = "";
        }
        else {
            var last_message = listMessage[listMessage.length - 1].text;
            var lastTime = listMessage[listMessage.length - 1].time;
        }

        friends.push({ userFriend: obj, displayName: name, message: last_message, img: myImage, time: lastTime })
        friends.sort((a, b) => a.time < b.time ? 1 : -1)
    }
    const userList = friends.map((user, key) => {
        return <User doChoose={doChoose} {...user} key={key} />
    });

    return (

        <>
            <div className="row chating">
                <div className="col-3">
                    <div className='my-user'>
                        <TopLeftChat plus={plus} username={username} setButtonPopup={setButtonPopup}/>
                    </div>
                    <div className="chatList">
                        {userList}
                    </div>
                </div>
                <div className="col-9">
                    <div className="messages">
                        <div>
                            <ChatingWith friendTop={friendTop} />

                        </div>
                        <div className="chatings">
                            <MessagesListResult chatFriend={msgs} />

                        </div>

                    </div>
                    <div className="text-send">
                        <SendMessage myUsername={username} addressee={friendTop} changeTheMsgs={chageTheState} />
                    </div>
                </div>
               <AddFriend trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <div className="titleCloseBtn">
                        <button onClick={() => { setButtonPopup(false); }}>X</button>
                    </div>
                    <h1>Add Friend</h1>
                    <input id="writtenFriend" placeholder="Enter friend's username"></input>
                    <button className="add-button" onClick={() => plusFriend()}>Add</button>
                </AddFriend>
                
            </div>

            


        </>
    );
}

export default ChatPage;