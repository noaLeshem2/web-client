import './ChatingWith.css';
import userMap from './usersFolder/usersList';
function ChatingWith({myUsername, friendTop, changeTheMsgs}) {
    if (friendTop == '') {
        return (<></>);
    }

    function handleAddFile() {
        var el = document.getElementById("input-file-id");
        var reader = new FileReader();
        var file = el.files[0];
        reader.onload = (e) => {

            userMap[myUsername].myFriends[friendTop].push({ type: 2, text: e.target.result, time: "13:00", mine: true });
            console.log(e.target.result)
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
                        <div className='image-upload'>
                            <label for="input-file-id">
                                <i class="bi bi-image-fill"></i>
                            </label>
                            <input class="ng-hide" id="input-file-id" type="file" accept="image/*" onInput={handleAddFile} />
                        </div>

                        <i class="bi bi-geo-alt-fill"></i>
                        <i class="bi bi-mic-fill"></i>
                        <i class="bi bi-camera-reels-fill"></i>


                    </div>
                </div>

            </div>

        </>
    );
}
//<i class="bi bi-three-dots-vertical pull-right" onClick={() => handleAddFile()}></i>

export default ChatingWith;