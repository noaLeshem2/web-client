import Message from "./Message";
function MessagesListResult({chatFriend}) {
    if(chatFriend == []){
        return(<></>);
    }
    const messagesList = chatFriend.map((message, key) => {
        return <Message {...message} key={key} />
    });
    return (
        <div className="chatings">
            {messagesList}
        </div>
    );
}
export default MessagesListResult;