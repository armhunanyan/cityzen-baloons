import './index.scss';

function SoundSwitcher({mute,muted}){

    let className = 'switcher';

    if(muted){

        className += ' off'; 

    }

    return(
        <div className={className} onClick={mute}>

        </div>
    )
}

export default SoundSwitcher;