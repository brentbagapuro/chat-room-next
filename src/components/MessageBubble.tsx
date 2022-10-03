import moment from 'moment';

interface Message {
  _id: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

type Props = {
  message: Message;
};

const MessageBubble = ({ message }: Props) => {
  const getTimeElapsed = (time: string) => {
    const then = new Date(time);
    const now = new Date();
    const msBetweenDates = Math.abs(then.getTime() - now.getTime());
    const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);

    if (hoursBetweenDates < 24) {
      return moment(time).startOf('minute').fromNow();
    } else {
      return moment(time).format('ddd MMM Do -  h:mm a');
    }
  };

  return (
    <div className="message">
      <div className="message_bubble">{message.message}</div>
      <p>{getTimeElapsed(message.createdAt)}</p>
    </div>
  );
};

export default MessageBubble;
