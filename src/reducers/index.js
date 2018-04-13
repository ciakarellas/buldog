import { combineReducers } from 'redux';
import MessageBot from './reducer_bot_message'

const rootReducer = combineReducers({
  messages: MessageBot
});

export default rootReducer;
