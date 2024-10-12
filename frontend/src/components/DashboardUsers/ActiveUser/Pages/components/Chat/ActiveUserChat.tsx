import { FormEvent, useState } from 'react';
import { Loader } from 'components';

import SVGFullArrowUp from 'assets/svg/SVGFullArrowUp';
import SVGUnread from 'assets/svg/SVGUnread';

const messages = [
  {
    id: 1,
    text: 'Your company is just wonderful! We will definitely contact you again! Have a good day!',
    type: 'me',
    time: '12:38',
  },
  { id: 2, text: 'Thanks for the order! It was a pleasure to work with you too!', type: 'he', time: '12:38' },
];

export const ActiveUserChat = () => {
  const [value, setValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(v => !v)
  };

  return (
    <div className="mt-16 flex-col flex-between gap pages-chat">
      <div className="flex-col gap-mini pages-chat-messages">
        <p className="flex-center text-secondary text-14 weight-500">Today</p>
        {messages.map((message) => (
          <div key={message.id} className={`pages-chat-message gap-mini flex-col ${message.type === 'he' && '-he'}`}>
            <p className="text-12">{message.text}</p>
            <div className="flex gap-mini text-12 align-center text-secondary pages-chat-message-read">
              <SVGUnread />
              <p>{message.time}</p>
            </div>
          </div>
        ))}
      </div>
      <form className="flex gap" onSubmit={onSubmit}>
        <input className="w-full" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="rounded-8" disabled={isLoading}>
          {isLoading ? <Loader /> : <SVGFullArrowUp />}
        </button>
      </form>
    </div>
  );
};
