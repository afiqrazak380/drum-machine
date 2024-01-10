import { useEffect, useState } from 'react';
import './App.css';
import { drumPads } from './data';

function App() {
  const [activeKey, setActiveKey] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      console.log(event.key);
      playSound(event.key.toLocaleUpperCase());
    });
  }, []);

  function playSound(selector) {
    const audio = document.getElementById(selector);
    console.log(audio);
    audio.play();
    setActiveKey(selector);
  }

  return (
    <>
      <div className='App'>
        <div id='drum-machine'>
          {' '}
          <div id='title'>Drum Machine</div>
          <div className='drum-pads'>
            {drumPads.map((drumPad) => (
              <div
                style={{ color: 'black' }}
                key={drumPad.keyCode}
                onClick={() => {
                  playSound(drumPad.text);
                }}
                className='drum-pad'
                id={drumPad.src}
              >
                {drumPad.text}
                <audio
                  src={drumPad.src}
                  className='clip'
                  id={drumPad.text}
                ></audio>
              </div>
            ))}
          </div>
          <div id='display'>Your key is: {activeKey}</div>
        </div>
      </div>
    </>
  );
}

export default App;
