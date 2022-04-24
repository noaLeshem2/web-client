import './messageList';
import './Message.css';
function Message({ type, text, time, mine }) {
    if (text === '') {
        return (<></>);
    }
    
    if (mine) {
        //text type
        if (type == 1) {
            return (
                <>
                    <div class="row message-body">
                        <div class="col-sm-12">
                            <div class="receiver">
                                <div class="message-text">
                                    {text}
                                </div>
                                <span class="message-time pull-right">
                                    {time}
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

        //image type
        if(type==2){
            return (
                <>
                    <div class="row message-body">
                        <div class="col-sm-12">
                            <div class="receiver">
                                <div className="message-img">
                                    <img src= {text}></img>
                                </div>
                                <span class="message-time pull-right">
                                    {time}
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            );

        }
    }
    if (!mine) {
        if (type == 1) {
            return (
                <>
                    <div class="row message-body">
                        <div class="col-sm-12">
                            <div class="sender">
                                <div class="message-text">
                                    {text}
                                </div>
                                <span class="message-time pull-right">
                                    {time}
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        if (type==2){
            return (
                <>
                    <div class="row message-body">
                        <div class="col-sm-12">
                            <div class="sender">
                                <div className="message-img">
                                    <img src= {text}></img>
                                </div>
                                <span class="message-time pull-right">
                                    {time}
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }

}
export default Message;