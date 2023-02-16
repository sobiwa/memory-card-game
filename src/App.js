import './App.css';
import { useState } from 'react';
import Cube from './components/Cube';
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
  return (
    <div className="App">
      <div className='saves-container'>
        {saves.map((save) => (
          <Cube>
            <img src={save.img} alt={save.id} />
          </Cube>
        ))}
      </div>
      <div className="instructions">
        <p>Click on each save ONCE</p>
      </div>
      <div className="false-nav">
        <div className="false-nav--item">
          <img className='joy-stick' src={joyStick} />
        </div>

      </div>
    </div>
  );
}

export default App;
