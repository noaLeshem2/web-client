import './messageList'
function Message({img, text, time, to, sent}) {
        
        return (
            <>
                <div class="card mb-3">
                    <div class="row xs-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{to}</h5>
                                <p class="card-text">{text}</p>
                                <p class="card-text"><small class="text-muted">{time}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}
export default Message;