import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import modalsReducer from './../../features/modals/modalReducer';

import {reducer as FormReducer} from 'redux-form';


const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalsReducer
})

export default rootReducer