import React from 'react';

import './index.scss';

function Header(props){

    const formTime = (secs) => {

        let sec_num = parseInt(secs, 10);

        let hours   = Math.floor(sec_num / 3600);

        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);

        let seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return minutes+':'+seconds;
    }

    const formPoints = (points) =>{

        let s = points+"";

        while (s.length < 3) s = "0" + s;

        return s;

    }

    return(

        <div className="header">

            <div className="panel time">

                <span className="clock"></span>

                {formTime(props.time)}

            </div>

            <div className="panel points">

            <span className="puchik"></span>

                {'x' + formPoints(props.points)}
                
            </div>

        </div>

    )

}

export default Header;