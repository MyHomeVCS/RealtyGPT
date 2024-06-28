import { FC, memo } from 'react';
import { Select } from 'antd';
import { ESupportedLanguages, SUPPORTED_LANGUAGES, SUPPORTED_LANGUAGES_MAPPING } from 'src/interfaces/configs';
import { useDispatch, useSelector } from 'react-redux';
import { setConfigs } from 'src/store/actions/configs.actions';
import './index.css';
import { socket } from 'src/services/soketConnector';

export const LanguageSwitcher: FC = memo(() => {
  const dispatch = useDispatch();

  // @Todo need to check types
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { language } = useSelector(state => state.configs);

  const setLanguage = (language: ESupportedLanguages) => {
    socket.emit('change-language', language);
    dispatch(setConfigs({ language }));
  };
  return (
    <Select
      className="languageSwitcher"
      suffixIcon={null}
      onChange={setLanguage}
      tagRender={() => <span className={`fi fi-${SUPPORTED_LANGUAGES_MAPPING[language as ESupportedLanguages]} flag`} />}
      value={language}
      getPopupContainer={(triggerNode: HTMLElement): HTMLElement => triggerNode.parentNode as HTMLElement}
    >
      {SUPPORTED_LANGUAGES.map(lang => (
        <Select.Option key={lang} value={lang}>
          <span className={`fi fi-${SUPPORTED_LANGUAGES_MAPPING[lang]} flag `} />
        </Select.Option>
      ))}
    </Select>
  );
});
