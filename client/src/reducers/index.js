import { combineReducers } from 'redux';

import isLoading from './isLoading';
import employers from './employers';
import jobDescriptions from './jobDescriptions';
import employer from './employer';
import jobDescription from './jobDescription';

export default combineReducers({
  isLoading,
  employers,
  employer,
  jobDescriptions,
  jobDescription
});
