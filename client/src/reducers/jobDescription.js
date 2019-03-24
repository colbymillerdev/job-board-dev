import { FETCH_JOB_DESCRIPTION } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_JOB_DESCRIPTION:
      return action.jobDescription;
    default:
      return state;
  }
}
