import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import config from './config/reducer';
import delivery from './delivery/reducer';
import recipient from './recipient/reducer';


export default combineReducers({ auth, user, config, delivery, recipient });
