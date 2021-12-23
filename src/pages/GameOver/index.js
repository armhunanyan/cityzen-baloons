import './index.scss';

function GameOver(props){

  const share = () => {
    
    let quote = 'Ես հավաքեցի ' + props.points + ' միավոր։ Փորձիր նաև դու։';

    window.open('https://www.facebook.com/sharer/sharer.php?u=https://cityzen.prodigi.am/game/?result='+props.points + '&quote='+quote,'facebook-share-dialog',"width=1200, height=630");

  }

  return(
    <div className="game-over">

        <div className="background">
            <div className="sky"></div>
            <div className="clouds"></div>
            <div className="bottom"></div>
        </div>

        <div className="road">

            <button className="leaderboard-button" onClick={props.showLeaderboard}>Առաջատարներ</button>

            <button className="share" onClick={share}>Կիսվել արդյունքով</button>

            <button className="start" onClick={props.playAgain}>Խաղալ նորից</button>

        </div>

        <div className="panel">
            <span className="title">Իմ արդյունքն է</span>
            <span className="points">{props.points}</span>
        </div>

    </div>
  );

}

export default GameOver;