import { FETCH_JOB_DESCRIPTIONS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_JOB_DESCRIPTIONS:
      return action.jobDescriptions;
    default:
      return state;
  }
}
