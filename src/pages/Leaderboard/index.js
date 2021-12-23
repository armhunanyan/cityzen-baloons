import React, { useState,useEffect} from 'react';

import './index.scss';

function Leaderboard(props){

    const [players,setPlayers] = useState([]);

    const getScores = () => {

        let limit = 10;

        if(window.innerWidth < 800){
            limit = 5;
        }

        fetch('/api/scores', {
			method: 'POST',
			body: JSON.stringify({
				limit: limit
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
            return response.json()
        }).then(json => {
            setPlayers(json);
        });

    }

    useEffect(()=>{
        getScores();
    })

    return(
        <div className="leaderboard">

        <div className="background">
            <div className="sky"></div>
            <div className="clouds"></div>
            <div className="bottom"></div>
        </div>

        <div className="road"></div>

            <div className="tablo">

                <h2>Առաջատարներ</h2>

                <table>

                <thead>
                    <tr>
                        <th></th>
                        <th>Մասնակից</th>
                        <th>Միավոր</th>
                    </tr>
                </thead>
                <tbody>
                {players.map((player, i) => {  
                    
                    return(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{player.full_name}</td>
                            <td>{player.score}</td>
                        </tr>
                    )

                })}
                    
                </tbody>

                </table>

                <button className="go-to-home" onClick={props.showIntro}></button>

            </div>

        </div>
    )

}

export default Leaderboard;