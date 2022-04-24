import './SendMessage.css'
import './ChatPage'
import attach from './attach.jpg';
import ReactDOM from 'react-dom'
import userMap from './usersFolder/usersList.js';
import {useState} from 'react';
function SendMessage({ myUsername, addressee, changeTheMsgs}) {

    const[update, setUpdate] = useState(true);
    const [val, setVal] = useState();

    function handleSend() { 
        // the text that we send
        var textMessage = document.getElementById("text").value;
        console.log(userMap);
        //adding the text message to the two converasions.
        userMap[myUsername].myFriends[addressee].push({ type: "text", text: textMessage, time: "23:59", mine: true });
        //userMap[addressee].myFriends[myUsername].push({ type: 1, text: textMessage, time: "13:00", mine: false });
        //changing the messages state
        var chatFriend = userMap[myUsername].myFriends[addressee];
        var fakeChat = userMap.fakeOne.myFriends.notReal;
        //setMsgs(msgs=>fakeChat);
        changeTheMsgs(chatFriend);
        //setVal(() => "")
        document.getElementById("text").value= "";
        //setUpdate(false);
    }
    return (
        <>
            <div class= "hiiii h-100">
            <div class="row h-100">
                <div class="col-10 h-100">
                    <div className="typing h-100">
                        <input type="text" value={val} id="text" placeholder="Enter text here..."></input>
                    </div>
                </div>
                <div class="col order-last">
                    <button type="submit" class="btn btn-success" onClick={() => handleSend()}
                    >Send</button>
                </div>
            </div>
        </div>
        </>
    );
}


export default SendMessage;