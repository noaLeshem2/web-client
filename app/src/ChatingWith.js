import './ChatingWith.css';
import userMap from './usersFolder/usersList';
import Record from './Record';
import { useState } from 'react';

function ChatingWith({ myUsername, friendTop, changeTheMsgs }) {
    const [srcOfAudio, setSrcOfAudio] = useState();
    const [recMessage, setRecMessage] = useState(false)
    var record = false;
    var recorder;
    function start() {
        if(!record){
            navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                recorder = new MediaRecorder(stream);
                recorder.start();
                record = true;

                const audioChunks = [];
                recorder.addEventListener("dataavailable", event => {
                    audioChunks.push(event.data);
                });

                recorder.addEventListener("stop", () => {
                    const audioBlob = new Blob(audioChunks);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    // the text that we send
                    //adding the text message to the two converasions.
                    userMap[myUsername].myFriends[friendTop].push({ type: "audio", text: audioUrl, time: "13:00", mine: true });
                    //userMap[addressee].myFriends[myUsername].push({ type: 1, text: textMessage, time: "13:00", mine: false });
                    //changing the messages state
                    var chatFriend = userMap[myUsername].myFriends[friendTop];
                    //setMsgs(msgs=>fakeChat);
                    changeTheMsgs(chatFriend);
                    //setVal(() => "")
                    //setUpdate(false);
                });

            });
        }
        else{
            stop();
        }
        
    }
    function stop() {
        recorder.stop();
        record = false;
        setRecMessage(false);
    }

    if (friendTop == '') {
        return (<></>);
    }

    function handleAddPicture(type) {
        var el = document.getElementById("input-image-id");
        var reader = new FileReader();
        var file = el.files[0];
        //add to the messages
        reader.onload = (e) => {
            userMap[myUsername].myFriends[friendTop].push({ type: "image", text: e.target.result, time: "13:00", mine: true });
            var chatFriend = userMap[myUsername].myFriends[friendTop];
            changeTheMsgs(chatFriend);
            //console.log(userMap[myUsername].myFriends[friendTop])
            //console.log(e.target.result)
        };

        reader.readAsDataURL(file);
        console.log('jhjhj')
    }

    function handleAddVideo(){
        var el = document.getElementById("input-video-id");
        var reader = new FileReader();
        var file = el.files[0];
        //add to the messages
        reader.onload = (e) => {
            userMap[myUsername].myFriends[friendTop].push({ type: "video", text: e.target.result, time: "13:00", mine: true });
            var chatFriend = userMap[myUsername].myFriends[friendTop];
            changeTheMsgs(chatFriend);
            //console.log(userMap[myUsername].myFriends[friendTop])
            //console.log(e.target.result)
        };

        reader.readAsDataURL(file);
        console.log('jhjhj')
    }

    return (
        <>
            <div class="container">
                <div class="row theChat row-cols-2">
                    <div class="col-1 position-relative">
                        <img id="circle" class="position-absolute top-50 start-50 translate-middle" src={userMap[friendTop].img} alt="..."></img>
                    </div>
                    <div class="col-8">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1 name">{userMap[friendTop].displayName}</h5>
                        </div>
                        <small class="col-2">last seen at 13:47</small>
                    </div>
                    <div class="col-3 ">
                        <span className='image-upload'>
                            <label htmlFor="input-image-id">
                                <i class="bi bi-image-fill"></i>
                            </label>
                            <input class="ng-hide" id="input-image-id" type="file" accept="image/*" onInput={handleAddPicture} />
                        </span>

                        <i class="bi bi-geo-alt-fill"></i>
                        <i class="bi bi-mic-fill" onClick={() => setRecMessage(true)}></i>

                        <span className='video-upload'>
                            <label htmlFor="input-video-id">
                                <i class="bi bi-camera-reels-fill"></i>
                            </label>
                            <input class="ng-hide" id="input-video-id" type="file" accept="video/*" onInput={handleAddVideo} />
                        </span>
                    </div>
                </div>


            </div>
            <Record trigger={recMessage} setRecMessage={setRecMessage}>
                <div className="titleCloseBtn">
                    <button onClick={() => { setRecMessage(false); }}>X</button>
                </div>
                <h5>Record</h5>
                <i className="bi bi-play-fill" onClick={start}></i>
            </Record>
        </>
    );
}
//<i class="bi bi-three-dots-vertical pull-right" onClick={() => handleAddFile()}></i>

export default ChatingWith;