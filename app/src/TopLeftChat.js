import userMap from './usersFolder/usersList.js';
import './usersFolder/Users.css';
import addPerson from './addPerson.jpeg';
import { useState } from 'react';
import './TopLeftChat.css';

import AddFriend from './AddFriend.js';
function TopLeftChat({ username, plus , setButtonPopup}) {
    var x = userMap[username];
    

   /* const [buttonPopup, setButtonPopup] = useState(false);

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

    }*/
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

                    <img src={addPerson} onClick={() => setButtonPopup(true)} class="col-2"></img>


                </div>
            </div>


{/*
            <AddFriend trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className="titleCloseBtn">
                    <button onClick={() => {setButtonPopup(false);}}>X</button>
                </div>
                <h1>Add Friend</h1>
                <input id="writtenFriend" placeholder="Enter friend's username"></input>
                <button onClick={() => plusFriend()}>Add</button>
    </AddFriend>*/}

        </>
    );
}
export default TopLeftChat;