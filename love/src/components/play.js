import { useState } from "react";
import './css/play.css'

const Play = ()=>{
    const [play,setPlay] = useState(true);
    const handleClick = ()=>{
        setPlay(cur => !cur)
    }
    return(
            <i onClick={handleClick} class={play?"bi bi-play":"bi bi-pause"}></i>

    );
}

export default Play