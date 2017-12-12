/*
* example file of redux structure.
*/

const OPEN_NICKNAME_POPOVER = "OPEN_NICKNAME_POPOVER";
const CLOSE_NICKNAME_POPOVER = "CLOSE_NICKNAME_POPOVER";

const initialState = {
  type: "",
  open: false
};

// Reducer
export default function accessibilityReducer(state = initialState, actions) {
  switch (actions.type) {
    case OPEN_NICKNAME_POPOVER: {
      return {
        ...state,
        ...actions
      };
    }
    case CLOSE_NICKNAME_POPOVER: {
      return {
        ...state,
        ...actions
      };
    }
    default: {
      return state;
    }
  }
}

// Actions
export function open() {
  return dispatch => dispatch({ type: OPEN_NICKNAME_POPOVER, open: true });
}

export function close() {
  return dispatch => dispatch({ type: CLOSE_NICKNAME_POPOVER, open: false });
}
