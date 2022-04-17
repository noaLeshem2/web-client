import react from "react";
import './AddFriend.css'
import userMap from "./usersFolder/usersList";

function AddFriend(props) {
   
    return (props.trigger) ? (
        <div className="addfriend">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default AddFriend;