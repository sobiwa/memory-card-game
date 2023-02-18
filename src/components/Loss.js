import resetti from '../assets/resetti.png';
import resettiBox from '../assets/resetti-talk.svg';

export default function Loss({reset}) {
  return (
    <div className="gray-screen">
      <div className="loss-container">
        <div className="resetti">
          <img src={resetti} alt="resetti" />
        </div>
        <div className="resetti--dialogue-box">
          <div className="resetti--name">Resetti</div>
          <img src={resettiBox} alt='very pretty dialogue box'/>
          <div className="resetti--text">Graaahh!!!</div>
          <div className="resetti--response-box">
            <div className="resetti--response-bubble"></div>
            <div className="resetti--response-bubble"></div>
            <div className= "resetti--response-text">
              <button onClick={reset}>Play again!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
