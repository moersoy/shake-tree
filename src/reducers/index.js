import { combineReducers } from 'redux-immutable';
import ApplesReducer from './reducer-apples';
import BasketReducer from './reducer-basket';
import TreeReducer from './reducer-tree';

// All reducers

export default function createReducer() {
  return combineReducers({
    applesReducer: ApplesReducer,
    basketReducer: BasketReducer,
    treeReducer: TreeReducer
  });
}
