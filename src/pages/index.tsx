import { useState, useEffect, useRef } from 'react';
import { trpc } from '../utils/trpc';
import MessageBubble from '../components/MessageBubble';

interface Message {
  _id: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

export default function IndexPage() {
  const [message, setMessage] = useState<string>('');
  const messagesContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesContainer?.current?.scrollTo(
      0,
      messagesContainer?.current?.scrollHeight
    );
  }, [messagesContainer]);

  const messages = trpc.msg.list.useQuery();
  const mutation = trpc.msg.add.useMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate({ message });
    window.location.reload();
  };

  return (
    <div className="home">
      <div className="chat_room">
        <div className="chat_messages">
          {messages?.data ? (
            <div className="messages_container" ref={messagesContainer}>
              {
                // @ts-ignore
                messages?.data?.map((message: Message) => {
                  return (
                    <div key={message._id}>
                      <MessageBubble message={message} />
                    </div>
                  );
                })
              }
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <form onSubmit={handleSubmit} className="form_container">
          <input
            className="form_input"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Message ..."
          />
          <button className="form_submit" type="submit">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
