import './videoArrayObject.css'
function VideoArrayObject(props) {

    return (
        <div className="video-container">

            <div className="pic">
                <img src={props.image} alt="" className="user-image" />
            </div>
            <div className="title">{props.title} <span className='best'>{props.verified && '★★★'}</span></div>
            <div className="channel">{props.channel} </div>
            <br />
            <div className="view">
                {props.view} Views <span>.</span> {props.time}
            </div>

        </div>
    )
}
export default VideoArrayObject;
