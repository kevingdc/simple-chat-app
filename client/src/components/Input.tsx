import {Dispatch, KeyboardEvent, MouseEvent, SetStateAction} from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;
  border-top: 2px solid #d3d3d3;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
`;

type Props = {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  sendMessage(event: KeyboardEvent | MouseEvent): void;
};

function Input({message, setMessage, sendMessage}: Props) {
  return (
    <Form>
      <StyledInput
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />

      <SendButton onClick={event => sendMessage(event)}>Send</SendButton>
    </Form>
  );
}

export default Input;
