import { useState, useEffect } from 'react';
import './App.css';

import Intro from './pages/Intro/';
import Game from './pages/Game/';
import GameOver from './pages/GameOver/';
import Leaderboard from './pages/Leaderboard/';

import bg_audio from './assets/twinkle.mp3';
import popping_audio from './assets/popping.mp3';

import SoundSwitcher from './components/SoundSwitcher';

function App(){

  const game_time = 90;

  let _timeInterval;

  const [points,setPoints] = useState(0);

  const [current_time,setCurrentTime] = useState(0);

  const [screen,setScreen] = useState('intro');

  const [muted,setMuted] = useState(false);

  const startGame = () => {

    setCurrentTime(game_time);

    setScreen('game');

  }

  useEffect(() => {

    const bg_audio = document.getElementById('bg-audio');

    if(bg_audio && bg_audio.paused){
      bg_audio.play();
    }

    let _timeInterval;

    if(screen === 'game'){

      _timeInterval = setInterval(function(){

        if(current_time <= 0){
  
          gameOver();
  
        }else{
  
          setCurrentTime(current_time - 1);
  
        }
  
      },1000);

    }

    return () => {
      clearInterval(_timeInterval);
    }    

   }, [screen,current_time]);

  const gameOver = () => {

    clearInterval(_timeInterval);

    setScreen('gameOver');

  }

  const showIntro = () => {
    setScreen('intro');
  }

  const showLeaderboard = () => {
    setScreen('leaderboard');
  }

  const playAgain = () =>{

    setPoints(0);

    setCurrentTime(0);

    startGame();

  }
  const updatePoints = (point) => {

    let newPoints = (points+point < 0) ? 0 :points+point;

    setPoints(newPoints)

  }

  const renderScreen = (screen) => {

    switch(screen){

      case 'intro':

        return <Intro startGame={startGame}></Intro>;

      case 'game':

        return <Game points={points} time={current_time} updatePoints={updatePoints} gameOver={gameOver}></Game>;
      
      case 'gameOver':

        return <GameOver points={points} playAgain={playAgain} showLeaderboard={showLeaderboard}></GameOver>;

      case 'leaderboard':

        return <Leaderboard showIntro={showIntro}></Leaderboard>;

      default:

        return <></>;

    }

  }

  return(
    <div className="app">
   
      {renderScreen(screen)}

      <audio id="bg-audio" src={bg_audio} muted={muted} autoPlay/>

      <audio id="popping_audio" src={popping_audio} muted={muted}/>

      <SoundSwitcher mute={()=>setMuted(!muted)} muted={muted}></SoundSwitcher>

    </div>
  );

}

export default App;