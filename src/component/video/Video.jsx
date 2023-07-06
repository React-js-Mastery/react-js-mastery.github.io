import picImg from '../userData/img/Ajay-Dhangar.jpg'
import pic2Img from '../userData/img/img.jpg'
import './Video.css'
function Video(props) {
    let channelName;
    if (props.verified) {
        channelName = <div className="channel">{props.channel} 🌟</div>;
    }
    else {
        channelName = <div className="channel">{props.channel}</div>;
    }
    return (
        <div className="container">
            <div className="pic">
                {props.verified ? <img src={pic2Img} alt="" className="user-image" /> : <img src={picImg} alt="" className="user-image" />}
            </div>
            <div className="title">{props.title} {props.verified && '🌟🌟🌟'}</div>
            {channelName}
            <br />
            <div className="view">
                {props.view} Views <span>.</span> {props.time}
            </div>

        </div>
    )
}
export default Video;
