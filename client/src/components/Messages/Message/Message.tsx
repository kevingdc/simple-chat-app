import styled, {css} from 'styled-components';
import Emoji from 'react-emoji-render';

import {IMessage} from '../../../@types/interfaces';

const MessageContainer = styled.div<{owned?: boolean}>`
  display: flex;
  padding: 0 5%;
  margin-top: 3px;

  justify-content: ${props => (props.owned ? 'flex-end' : 'flex-start')};
`;

const MessageBox = styled.div<{owned?: boolean}>`
  background: #f3f3f3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;

  background: ${props => (props.owned ? '#2979ff' : '#f3f3f3')};
`;

const MessageText = styled.p<{owned?: boolean}>`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;

  color: ${props => (props.owned ? 'white' : '#353535')};

  img {
    vertical-align: middle;
  }
`;

const SentText = styled.p<{owned?: boolean}>`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;

  ${props =>
    props.owned
      ? css`
          padding-right: 10px;
        `
      : css`
          padding-left: 10px;
        `}
`;

type Props = {
  message: IMessage;
  name: string;
};

function Message({message: {user, text}, name}: Props) {
  const trimmedName = name.trim().toLowerCase();

  const owned = user === trimmedName;

  return (
    <MessageContainer owned={owned}>
      {owned && <SentText owned={owned}>{trimmedName}</SentText>}
      <MessageBox owned={owned}>
        <MessageText owned={owned}>
          <Emoji text={text} />
        </MessageText>
      </MessageBox>
      {!owned && <SentText owned={owned}>{user}</SentText>}
    </MessageContainer>
  );
}

export default Message;
