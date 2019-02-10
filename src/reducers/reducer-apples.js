import { fromJS, List } from 'immutable';
import { DROP_APPLES, LOAD_APPLES, SHAKE_APPLES } from '../constants/apples';
import apples from '../apples.json';

export const initialState = fromJS({
  apples: List(),
  isDropped: false, // The apples will be true after dropping
  isShaked: false // The apples will be true after shaking
});

function appleReducer(state = initialState, action) {
  switch (action.type) {
    case DROP_APPLES:
      return state.set('isDropped', true);
    case LOAD_APPLES:
      return state.set('apples', List(apples));
    case SHAKE_APPLES:
      return state.set('isShaked', true);
    default:
      return state;
  }
}
export default appleReducer;
