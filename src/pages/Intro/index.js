import { useState } from 'react';

import './index.scss';

function Intro(props){

    const [showRules,setShowRules] = useState(false);

    return(

        <div className="intro">
            <div className="background">
                <div className="sky"></div>
                <div className="clouds"></div>
                <div className="bottom"></div>
            </div>
            <div className="logo"></div>

            <div className="road">

                <button className="rules" onClick={()=>setShowRules(!showRules)}>Ինչպես խաղալ</button>
                
                <button className="start" onClick={props.startGame}>Սկսել</button>

            </div>

            <div className="rules-container" style={{display:showRules ? 'block' : 'none'}}>
               <p>Ողջու՜յն։</p>

               <p>Պատրա՞ստ ես դառնալ<br></br>
                մասնագիտությունների քաղաքի <br></br>
                ամենաաարագ գըմփգըմփիչը</p>

                <p>Ուշադիր հետևի՛ր լուսացույցի<br></br>
                գույներին և հնարավորինս արագ<br></br>
                պայթեցրու այդ պահին ցուցադրվող<br></br>
                համապատասխան գույնի փուչիկները։</p>

                <p>Դու ունես 1:30 րոպե առավելագույն<br></br>
                միավորները հավաքելու համար։</p>

                <p style={{wordSpacing:'35px'}}>Գըմփ-գըմփ Գնացի՛նք։</p>
                <span className="icon icon-1"></span>
                <span className="icon icon-2"></span>
                <span className="icon icon-3"></span>

                <button className="start-2" onClick={props.startGame}></button>

           </div>

            <div className="house"></div>
    
        </div>
        );


}

export default Intro;