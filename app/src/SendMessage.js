import './SendMessage.css'
function SendMessage() {
    function handleSend() { }
    return (

        
        <>
            <div class= "hiiii">
            <div class="row">
                <div class="col-1">
                    hi
                    </div>

                <div class="col-10">
                    <div className="typing">
                        <input type="text" id="text" placeholder="Enter text here..."></input>
                    </div>
                </div>
                <div class="col order-last -2">
                    <button type="submit" class="btn btn-default" onClick={() => handleSend()}
                    >Submit</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default SendMessage;