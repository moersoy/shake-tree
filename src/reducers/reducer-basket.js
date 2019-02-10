import { fromJS } from 'immutable';
import { ADD_APPLES } from '../constants/basket';

export const initialState = fromJS({
  isAdded: false // The apples will be true after added basket
});

function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_APPLES:
      return state.set('isAdded', true);
    default:
      return state;
  }
}
export default basketReducer;
