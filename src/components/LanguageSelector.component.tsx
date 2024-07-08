import React from 'react';
import { connect } from 'react-redux';
import { AppState, SetLanguageAction } from "../store/store";

interface LanguageSelectorProps {
  lang: "ru" | "en";
  setLanguage: (lang: "ru" | "en") => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ lang, setLanguage }) => {
  return (
    <select
      value={lang}
      onChange={(e) => setLanguage(e.target.value as "ru" | "en")}
      className="mr-4 p-2 rounded"
    >
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
  );
};

const mapStateToProps = (state: AppState) => ({
  lang: state.lang,
});

const mapDispatchToProps = (dispatch: React.Dispatch<SetLanguageAction>) => ({
  setLanguage: (lang: "ru" | "en") =>
    dispatch({ type: "SET_LANGUAGE", payload: lang }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);