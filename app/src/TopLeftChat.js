import userMap from './usersFolder/usersList.js';
import './usersFolder/Users.css';
import addPerson from './addPerson.jpeg';
import { useState } from 'react';
import AddFriend from './AddFriend.js';
import './TopLeftChat.css'
function TopLeftChat({ username, plus }) {
    var x = userMap[username];
    var friendMap = x.myFriends;

    const [buttonPopup, setButtonPopup] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    function plusFriend(){
        var writtenFriend = document.getElementById("writtenFriend").value;
        if (userMap.hasOwnProperty(writtenFriend)) {
            if(userMap[username].myFriends.hasOwnProperty(writtenFriend) || writtenFriend === username){
                alert('choose another username');
            }
            else{
               
                userMap[username].myFriends[writtenFriend] = [{text:''}];
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
    return (
        <>
            <div className="container-fluid h-100">
                <div className="row">
                    <div class="col order-first position-relative">
                        <img id="circle" class="position-absolute top-50 start-50 translate-middle" src={x.img} alt="..."></img>
                    </div>
                    <div class="col-6">
                        <div class="d-flex w-100 align-middle">
                            <h5 class="mb-1 name">{x.displayName}</h5>
                        </div>
                    </div>

                    <img src={addPerson} onClick={() => setButtonPopup(true)} class="col-2"></img>


                </div>
            </div>



            <AddFriend style={StyleSheet.modalContent} trigger={buttonPopup} setTrigger={setButtonPopup}>

                <h1>Add Friend</h1>
                <input id="writtenFriend" placeholder="Enter friend's username"></input>
                <button onClick={()=>plusFriend()}>Add</button>
            </AddFriend>

        </>
    );
}
export default TopLeftChat;