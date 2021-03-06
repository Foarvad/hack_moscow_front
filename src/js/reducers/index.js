import { combineReducers } from 'redux';

import AppReducer from './AppReducer';
import UIReducer from './UIReducer';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import NotificationReducer from './NotificationReducer';
import OrderReducer from './OrderReducer';


const reducers = combineReducers({
  App: AppReducer,
  UI: UIReducer,
  Auth: AuthReducer,
  User: UserReducer,
  Notifications: NotificationReducer,
  Orders: OrderReducer,
});

export default reducers;
