import { IS_LOADING } from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}
