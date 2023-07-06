import './videoArrayObject.css'
function VideoArrayObject(props) {

    return (
        <div className="video-container">          

            <div className="pic">
                <img src={props.image} alt="" className="user-image" />
            </div>
            <div className="title">{props.title} {props.verified && '🌟'}</div>
            <div className="channel">{props.channel}
                <br />
                <div className="view">
                    {props.view} Views <span>.</span> {props.time}
                </div>
            </div>
        </div>
    )
}
export default VideoArrayObject;
