import './css/announcement.css'
const Announcement = ({text})=>{
    return(
        <div className="announce-con">
            <div className="announce-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Announcement