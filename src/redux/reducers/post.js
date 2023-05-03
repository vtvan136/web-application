import { INIT_STATE } from '../../constant';
import { getType, statePost } from '../actions';

export default function postReducers(state = INIT_STATE.post, action) {
  switch (action.type) {
    case getType(statePost):
      return {
       id: action.payload.id,
       title: action.payload.title,
       content: action.payload.content
      };
    default:
      return state;
  }
}
