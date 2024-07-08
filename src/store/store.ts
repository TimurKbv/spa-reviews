import { createStore, Action } from 'redux';

export interface AppState {
  lang: 'ru' | 'en';
}

const initialState: AppState = {
  lang: 'ru'
};

export interface SetLanguageAction extends Action {
  type: 'SET_LANGUAGE';
  payload: 'ru' | 'en';
}

type AppAction = SetLanguageAction;

function rootReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, lang: action.payload };
    default:
      return state;
  }
}

export const store = createStore(rootReducer);