
function SendMessage() {
    function handleSend() { }
    return (
        <>
<                       div className="text-send">
                            <SendMessage></SendMessage>
                        </div>
            <div className="flexbox-container">
                <div className="linking">
                    hi
                </div>

                <div className="typing">
                    <input type="text" id="text" placeholder="Enter text here..."></input>
                </div>

                <div className="text-right mb-3">
                    <button types="button" class="btn btn-lg btn-default" onClick={() => handleSend()}>
                        send
                    </button>
                </div>
            </div>

        </>
    );
}

export default SendMessage;