import './messageList';
import './Message.css';
function Message({type, text, time, mine}) {
    
    if (mine) {
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
    if (!mine) {
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

}
export default Message;