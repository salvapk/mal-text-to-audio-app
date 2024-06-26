import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner, Input} from 'reactstrap';
//import ReactAudioPlayer from 'react-audio-player';
//import { Link } from 'react-router-dom';
//import { FaCirclePlay } from "react-icons/fa6";
import './Text.css';

function Text() {
  const myStyle = {
    backgroundImage: "url('./bluebg.jpg')",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  const [text, setText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handlePlayButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:8000/text/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      console.log(data.text.audio_link);
      setIsPlaying(data.text.audio_link);
      //console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }finally {
      setLoading(true);
    }
  };

  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);

};

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
};

  return (
    <Container className='text-page' style={myStyle}>
      <Row className="mt-3">
        <Col className='text-center'>
          <div className='text-field d-flex flex-row'>
            <div>
              <textarea 
                className='me-4'
                cols={50} 
                rows={20} 
                value={text}
                onChange={handleInputChange}
              />
              <div>
                <Input
                  type="radio"
                  name="radioOption"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleRadioChange}
                />{' '}
                vits
                <Input
                  type="radio"
                  name="radioOption"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  onChange={handleRadioChange}
                />{' '}
                gtts
              </div>
            </div>
              <div className='btn'>
                <Button color='primary' onClick={handlePlayButtonClick}>
                  {loading ? (
                    <Spinner size="sm" color="light" />
                  ) : (
                    "Convert to Audio"
                  )} 
                </Button>
                {isPlaying && (<Button 
                  className='btn ' 
                  color='primary' 
                  onClick={handleButtonClick}>
                  Play Audio
                </Button>)}
              </div>
          </div>
        </Col>
      </Row> 
    </Container>
  );
}

export default Text;
