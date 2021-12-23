import {useState} from 'react';

function Ballon(props){

    const [animate,setAnimate] = useState(false);

    const [exploded,setExploded] = useState(false);

    const [pointOpacity,setPointOpacity] = useState(0);

    const explode = () => {

        const audio = document.getElementById('popping_audio');

        setAnimate(true);

        if(props.color === props.svetafor || props.color === 'blue'){

            setPointOpacity(1);

        }

        setTimeout(function(){

            if(audio){

                audio.currentTime = 0;

                audio.play();
            }


            if(props.color === props.svetafor){
                props.updatePoints(1);
            }

            if(props.color === 'blue'){
                props.updatePoints(-1);
            }

            setExploded(true);

        },105);

        
    }

    let className = 'balloon ' + props.color;

    if(animate){
        className += ' animate';
    }

    if(!exploded){

        return(
            <div className={className} style={{left:props.left + 'px',bottom:props.bottom + 'px'}}>
                <div onClick={explode} className="visible-part">
                    <div className="bum"></div>
                </div>
                <div className="point-desc" style={{opacity:pointOpacity}}>{(props.color === 'blue' ? '-1' : '+1')}</div>
            </div>
        )

    }

    return null;
   
}

export default Ballon;