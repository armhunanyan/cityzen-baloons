import {useState,useEffect} from 'react';
import './index.scss'

import Balloon from '../Baloon';


function Balloons(props){

    const colors = ['red','yellow','green','blue'];

    const [balloons,setBaloons] = useState([]);

    const random = (min, max) =>{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const generateNewBaloon = () => {

        let rand = random(0,3);

        let color = colors[rand];

        const left = random(0,30) * 20;

        const bottom = random(-150,-180);

        setBaloons(balloons => [...balloons, {color:color,left:left,bottom:bottom,created_at:+new Date()}]);

    }

    const filterBallons = () => {

        setBaloons(balloons => balloons.filter(balloon => (+new Date() - balloon.created_at) / 1000 < 10));

    }

    useEffect(()=>{

        const _int = setInterval(()=>{

            generateNewBaloon();

            //filterBallons();

        },200);

        return () => {
            clearInterval(_int);
        }

    })

    return(

        <div className="balloons-container">

            {balloons.map((balloon,index) => <Balloon key={index} color={balloon.color} svetafor={props.color} updatePoints={props.updatePoints} left={balloon.left} bottom={balloon.bottom}></Balloon>)}

        </div>

    )

}

export default Balloons;