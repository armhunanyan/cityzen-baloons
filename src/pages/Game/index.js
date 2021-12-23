import {useState,useEffect} from 'react';
import Svetafor from '../../components/Svetafor';
import Panel from '../../components/Panel';
import Balloons from '../../components/Balloons/'
import Header from '../../components/Header';

import './index.scss';

function Game(props){

    const colors = ['red','yellow','green'];

    const [color,setColor] = useState('red');

    useEffect(()=>{

        const _interval =  setInterval(function(){

            let rand = Math.floor(Math.random() * 3) + 0;

            setColor(colors[rand]);

        },2500);

        return () => {
            clearInterval(_interval);
          }

    },[])

    return(
        <div className="game">

            <div className="background">
                <div className="sky"></div>
                <div className="clouds"></div>
                <div className="bottom"></div>
            </div>

            <Header points={props.points} time={props.time}></Header>

            <div className="road"></div>

            <Panel color={color}></Panel>

            <Svetafor color={color}></Svetafor>

            <Balloons updatePoints={props.updatePoints} color={color}></Balloons>

        </div>        

    )
}

export default Game;