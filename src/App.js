import './App.css';
import { useState, useEffect } from 'react';
import Cube from './components/Cube';
import Loss from './components/Loss';
import Win from './components/Win';
import animalCrossing from './assets/ac-nook.png';
import donkeyKonga from './assets/donkey.png';
import doubleDash from './assets/double-dash.png';
import kirby from './assets/kirby.png';
import luigi from './assets/luigi.png';
import marioParty from './assets/mario-party.png';
import marioSunshine from './assets/mario-sunshine.png';
import metroid from './assets/metroid.png';
import pikmin from './assets/pikmin.png';
import pokemon from './assets/pokemon.png';
import smash from './assets/smash.png';
import sonic from './assets/sonic.png';
import starfox from './assets/starfox.png';
import strikers from './assets/strikers.png';
import wario from './assets/wario.png';
import windwaker from './assets/wind-waker.png';
import joyStick from './assets/joy-stick.svg';

function Dots() {
  return (
    <div className="dots">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
}

function App() {
  const [saves, setSaves] = useState([
    { img: animalCrossing, id: 'animalCrossing', selected: false },
    { img: donkeyKonga, id: 'donkeyKonga', selected: false },
    { img: doubleDash, id: 'doubleDash', selected: false },
    { img: kirby, id: 'kirby', selected: false },
    { img: luigi, id: 'luigi', selected: false },
    { img: marioParty, id: 'marioParty', selected: false },
    { img: marioSunshine, id: 'marioSunshine', selected: false },
    { img: metroid, id: 'metroid', selected: false },
    { img: pikmin, id: 'pikmin', selected: false },
    { img: pokemon, id: 'pokemon', selected: false },
    { img: smash, id: 'smash', selected: false },
    { img: sonic, id: 'sonic', selected: false },
    { img: starfox, id: 'starfox', selected: false },
    { img: strikers, id: 'strikers', selected: false },
    { img: wario, id: 'wario', selected: false },
    { img: windwaker, id: 'windwaker', selected: false },
  ]);

  const [game, setGame] = useState({
    count: 0,
    highScore: 0,
    lost: false,
    win: false,
  });

  const playAgain = () => {
    setSaves((prev) => prev.map((item) => ({ ...item, selected: false })));
    setGame((prev) => ({
      ...prev,
      count: 0,
      lost: false,
      win: false,
      highScore: [prev.count > prev.highScore ? prev.count : prev.highScore],
    }));
  };

  const handleClick = (id) => {
    let givenIndex;
    const clicked = saves.find((item, index) => {
      if (item.id === id) {
        givenIndex = index;
        return true;
      }
      return false;
    });
    if (!clicked.selected) {
      setGame((prev) => ({ ...prev, count: prev.count + 1 }));
      setSaves((prev) => {
        const copy = [...prev];
        copy.splice(givenIndex, 1, { ...prev[givenIndex], selected: true });
        return copy;
      });
    } else {
      setGame((prev) => ({ ...prev, lost: true }));
    }
  };

  useEffect(() => {
    if (game.count === 16) {
      setGame(prev => ({...prev, win: true}))
      return
    };
    setSaves((prev) => [...prev].sort(() => Math.random() - 0.5));
    const cubes = document.querySelectorAll('.cube');
    cubes.forEach((cube) => {
      cube.className = 'cube spin';
    });
    setTimeout(() => {
      cubes.forEach((cube) => (cube.className = 'cube animate-hover'));
    }, 300);
  }, [game.count]);

  return (
    <div className="App">
      {game.win && <Win reset={playAgain} />}
      {game.lost && <Loss reset={playAgain} />}
      <div className="score">
        <div className="score--count">{game.count}</div>
        <div className="score--text">Hi Score</div>
        <div className="hi-score">{game.highScore}</div>
      </div>
      <div className="saves-container">
        {saves.map((save) => (
          <Cube key={save.id} handleClick={() => handleClick(save.id)}>
            <img src={save.img} alt={save.id} />
          </Cube>
        ))}
      </div>
      <div className="instructions">
        <p>Click on each save ONCE...</p>
      </div>
      <div className="false-nav">
        <div className="false-nav--item">
          <img className="joy-stick" src={joyStick} alt="joy stick design" />
          <Dots />
          <div className="false-nav--text">Select</div>
        </div>
        <div className="false-nav--item">
          <div className="false-nav--button B">
            <span className="button-letter">B</span>
          </div>
          <Dots />
          <div className="false-nav--text">Finish</div>
        </div>

        <div className="false-nav--item">
          <div className="false-nav--button A">
            <span className="button-letter">A</span>
          </div>
          <Dots />
          <div className="false-nav--text">Confirm</div>
        </div>
      </div>
    </div>
  );
}

export default App;
