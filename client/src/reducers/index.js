import { combineReducers } from 'redux';

import isLoading from './isLoading';
import employers from './employers';
import jobDescriptions from './jobDescriptions';

export default combineReducers({
  isLoading,
  employers,
  jobDescriptions
});
