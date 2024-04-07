import React, { useState } from 'react'
import {Button } from 'reactstrap';
import ReactAudioPlayer from 'react-audio-player';


function Play() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleButtonClick = () => {
        setIsPlaying(!isPlaying);
  
    };
  return (
    <div className='text-center mt-5'>
      <Button 
      className='btn btn-primary' 
      color='primary' 
      onClick={handleButtonClick}>
        Play Audio
      </Button>
      {isPlaying && <ReactAudioPlayer src="http://localhost:8000//media/malayalam_audio.mp3" autoPlay />}
    </div>
  )
}

export default Play