import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (
  isPlaying && activeSong?.key===song.key && activeSong?.title===song.title ? 
  (<FaPauseCircle
    className='text-gray-300'
    size={36}
    onClick={handlePause}
  />) :
  (<FaPlayCircle
    className='text-gray-300'
    size={36}
    onClick={handlePlay}
  />)
);

export default PlayPause;
