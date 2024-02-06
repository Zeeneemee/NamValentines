import LoveYou from '../our_memory/amore-love-you.gif'
import './css/valentines.css'
import { useState, useRef } from 'react'

const Valentines = ({showPic, setShowPic})=>{
    const [click,setClick] = useState(1)
    const enlarge = useRef(null)
    const move = useRef(null)
    const handleClickNo = ()=>{
        setClick(cur=> cur < 6 ? cur + 1 : 6 )
        enlarge.current.style.transform = `scale(${1+click*0.5}) translateY(${click*10}px)`
       
    }
    const handleClickYes = ()=>{
        setShowPic(0)
    }
    const valentines = ['Will you be my valentine?','I love you','I miss you','I want to be with you','I need you','please accept me', 'Don\'t leave me\n please be my valentine 🥹 ']

    return(
            <div className="valentine_con">
                <div className="valentine">
                    <img src= {LoveYou} alt="Love You"/>
                    <h1>{valentines[click]}</h1>
                    <div className='confirm_con'>
                        <div className='yes' ref={enlarge} onClick={handleClickYes} >
                            <h1>Yes</h1>
                        </div>
                        {click < 6 ?  <div className='no' onClick={handleClickNo}>
                            <h1>No</h1>
                        </div>  
                        : null
                        }
                       
                    </div>
                </div>
            </div>
        
    )
}

export default Valentines;