import { FETCH_EMPLOYER } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EMPLOYER:
      return action.employer;
    default:
      return state;
  }
}
