import {useState, useEffect, KeyboardEvent, MouseEvent} from 'react';
import queryString from 'query-string';
import {RouteProps} from 'react-router';
import io, {Socket} from 'socket.io-client';
import styled from 'styled-components';

import {IMessage} from '../@types/interfaces';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1d;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 8px;
  height: 60%;
  width: 35%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 480px) and (max-width: 1200px) {
    width: 60%;
  }
`;

let socket: Socket;

type Props = {
  location: RouteProps['location'];
};

function Chat({location}: Props) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([]);

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const data = queryString.parse(location?.search || '');

    socket = io(ENDPOINT);

    setName(data.name as string);
    setRoom(data.room as string);

    socket.emit('join', {name: data.name, room: data.room}, () => {});

    return () => {
      // socket.emit('disconnect');

      socket.off();
    };
  }, [ENDPOINT, location?.search]);

  useEffect(() => {
    socket.on('message', socketMessage => {
      setMessages([...messages, socketMessage]);
    });
  }, [messages]);

  function sendMessage(event: KeyboardEvent | MouseEvent) {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <OuterContainer>
      <Container>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Container>
    </OuterContainer>
  );
}

export default Chat;
