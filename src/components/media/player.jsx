import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const RadioPLayer = ({ children, ...props }) => {
    const { currentRadio } = props;
    
    return (
        <AudioPlayer
        header={`Now playing: ${ currentRadio && currentRadio.name }` }
        src={ currentRadio && currentRadio.url_resolved }
        onPlay={e => console.log("onPlay")}
        showJumpControls={false}
        autoPlay={true}
        showFilledProgress={false}
        customAdditionalControls={[]}
        onError={e => console.log(e)}
      // other props here
      />
    );
}