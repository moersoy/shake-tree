import { fromJS } from 'immutable';
import { SHAKE_TREE } from '../constants/tree';

export const initialState = fromJS({
  isShaked: false // The tree will be true after shaking
});

function treeReducer(state = initialState, action) {
  switch (action.type) {
    case SHAKE_TREE:
      return state.set('isShaked', true);
    default:
      return state;
  }
}
export default treeReducer;
