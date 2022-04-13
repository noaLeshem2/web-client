import User from './usersFolder/User.js';
import userMap from './usersFolder/usersList.js';

import Message from './Message.js';
function Help({username}){
    var friendsDic= userMap[username].myFriends;
    var usernameFriends= Object.keys(friendsDic);
    var friendDisplayName= userMap[usernameFriends[0]].displayName;
    var friendImg = userMap[usernameFriends[0]].img;
    var chat0 = friendsDic[usernameFriends[0]];
    var lastmsg = chat0[chat0.length-1].text;
    var lastmsgTime = chat0[chat0.length-1].time;
    
    const chatList = chat0.map((message, key) => {
        return <Message {...message} key={key} />
    });

    return(
        <>
        <div className="row"> {usernameFriends}</div>
        <div className="row"> {friendDisplayName}</div>
        <div className="row">{lastmsg}</div>
        <img src={friendImg}></img>
        <div className="row">{chat0[0].text}</div>
        <div className="row">{chatList}</div>

        </>
    );
}

export default Help;