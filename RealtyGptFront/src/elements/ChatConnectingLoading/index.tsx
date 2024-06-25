import { FC } from 'react';
import 'src/elements/ChatConnectingLoading/index.css';

const LOADING_TEXT = 'Connecting';
export const ChatConnectingLoading: FC = () => {
  return (
    <section>
      <div className="loading loading02">
        {LOADING_TEXT.split('').map((symbol, i) => (
          <span key={i}>{symbol}</span>
        ))}
      </div>
    </section>
  );
};
