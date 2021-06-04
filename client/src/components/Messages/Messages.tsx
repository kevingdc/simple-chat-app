import ScrollToBottom from 'react-scroll-to-bottom';

import {IMessage} from '../../@types/interfaces';
import './Messages.css';
import Message from './Message';

type Props = {
  messages: IMessage[];
  name: string;
};

function Messages({messages, name}: Props) {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}

export default Messages;
