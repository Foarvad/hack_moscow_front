import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import * as actions from 'js/actions/UserActions';


const initialState = Map({
  username: '',
  role: 'carrier',
});

const UserReducer = createReducer(
  {
    [actions.getUserSuccess]: (state, payload) => state.set('username', payload.username).set('role', payload.role),
    [actions.getUserFail]: () => initialState,
  },
  initialState,
);

export default UserReducer;