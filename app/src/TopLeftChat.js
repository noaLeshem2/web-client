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

  
    {<img src={addPerson} onClick={() => setButtonPopup(true)} className="col-2"></img>} 
 }*/
    return (
        <>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col order-first position-relative">
                        <img id="circle" className="position-absolute top-50 start-50 translate-middle" src={x.img} alt="..."></img>
                    </div>
                    <div className="col">
                        
                            <h5 className="mb-1 name">{x.displayName}</h5>
                        
                    </div>
                    <div className="col-2">
                      <i className="bi bi-person-plus-fill " onClick={() => setButtonPopup(true)} ></i>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TopLeftChat;