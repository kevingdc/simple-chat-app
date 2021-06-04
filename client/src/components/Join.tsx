import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1a1a1d;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

const InnerContainer = styled.div`
  width: 20%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
`;

const Heading = styled.h1`
  color: white;
  font-size: 2.5em;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;

const JoinInput = styled.input`
  box-sizing: border-box;
  border-radius: 0;
  padding: 15px 20px;
  width: 100%;
`;

const Button = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  width: 100%;
  margin-top: 20px;

  :focus {
    outline: 0;
  }
`;

function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <OuterContainer>
      <InnerContainer>
        <Heading>Join</Heading>
        <div>
          <JoinInput
            type="text"
            placeholder="Name"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <JoinInput
            type="text"
            placeholder="Room"
            style={{marginTop: '20px'}}
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={event => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button
            style={{marginTop: '20px'}}
            disabled={!name || !room}
            type="submit"
          >
            Sign In
          </Button>
        </Link>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Join;
