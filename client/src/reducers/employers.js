import { FETCH_EMPLOYERS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EMPLOYERS:
      return action.employers;
    default:
      return state;
  }
}
