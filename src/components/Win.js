import marioFlag from '../assets/mario-flag.svg';
import { Fireworks } from '@fireworks-js/react';
import OneUpMushroom from '../assets/1up-mushroom2.png';

export default function Win({reset}) {
  return (
    <div className="gray-screen win-screen">
      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 100,
          },
          intensity: 12,
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
        }}
      />
      <div className="win-container">
        <button className="win--play-again-button" onClick={reset}>
          <img src={OneUpMushroom} alt="play again" />
          <div className='play-again-text'>Play Again</div>
        </button>
        <div className="full-flag">
          <div className="flag">
            <img src={marioFlag} alt="classic mario flag" />
          </div>
          <div className="pole-ball"></div>
          <div className="pole"></div>
          <div className="block"></div>
        </div>
        <div className="congrats-container">
          <div className="congrats">Congratulations!</div>
        </div>
      </div>
    </div>
  );
}
