import { DROP_APPLES, LOAD_APPLES, SHAKE_APPLES } from '../constants/apples';

export function dropApples() {
  return {
    type: DROP_APPLES
  };
}

export function loadApples() {
  return {
    type: LOAD_APPLES
  };
}

export function shakeApples() {
  return {
    type: SHAKE_APPLES
  };
}
