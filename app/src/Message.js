import './messageList';
import './Message.css';
function Message({ type, text, time, mine }) {
    if (text === '') {
        return (<></>);
    }
    
    if (mine) {
        //this is a text type
        if (type.localeCompare('text') == 0) {
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
        if(type.localeCompare('image') == 0){
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
        else if(type.localeCompare('audio') == 0) {
            return (
                <>
                <div class="row message-body">
                      <div class="col-sm-12">
                          <div class="receiver">
                              <div className="message-img">
                              <audio controls src={text}></audio>
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
        //its video type
        if(type.localeCompare('video') == 0){
            console.log("videoooooooo")
            return (
                <>
                    <div class="row message-body">
                        <div class="col-sm-12">
                            <div class="receiver">
                                <div className="message-video">
                                    <video controls src= {text}></video>
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
        //this is a text type
        if (type.localeCompare('text') == 0) {
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
        // its an image type
        else if (type.localeCompare('image') == 0){
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
        //its audio message
        else if(type.localeCompare('audio') == 0) {
            return (
                <>
                  <div class="row message-body">
                        <div class="col-sm-12">
                            <div class="sender">
                                <div className="message-img">
                                <audio controls src={text}></audio>
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
        // its an image type
        else if (type.localeCompare('video') == 0){
            return (
                <>
                    <div class="row message-body">
                        <div class="col-sm-12">
                            <div class="sender">
                                <div className="message-video">
                                    <video controls src= {text}></video>
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