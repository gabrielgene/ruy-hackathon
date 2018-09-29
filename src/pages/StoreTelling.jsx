import React from 'react';
import Sound from 'react-sound';

class StoreTelling extends React.Component {
  render() {
    return (
      <div>
        <Sound
          url="https://s0.vocaroo.com/media/download_temp/Vocaroo_s0uAqaePiDr8.mp3"
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          onLoading={() => console.log('onloading')}
          onPlaying={() => console.log('playing')}
          onFinishedPlaying={() => console.log('onfinish')}
        />
      <div>
        <h1>Conheça a loja</h1>
      </div>

      </div>
    )
  }
}

export default StoreTelling;
