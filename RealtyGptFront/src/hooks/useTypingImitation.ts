import { useEffect, useState } from 'react';
import { getRndInteger } from 'src/utils/generic';

const REGEXP_TO_DETECT_PAUSE = new RegExp(/[:;,.`]/);

type TUseTypingImitation = (
  text: string,
  configs?: {
    delay: number | 'random';
  },
) => string;

export const useTypingImitation: TUseTypingImitation = (text, configs = { delay: 'random' }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let delay = configs.delay === 'random' ? getRndInteger() : configs.delay;

    if (text[currentIndex] && REGEXP_TO_DETECT_PAUSE.test(text[currentIndex])) {
      delay += 150;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, configs.delay, text]);

  return currentText;
};
