import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import config from './config/reducer';

export default combineReducers({ auth, user, config });
