import {
    CREATE_INPUT,
    READ_INPUT,
    UPDATE_INPUT,
    DELETE_INPUT,
  } from './inputActions';
  
  const initialState = {
    inputs: [],
  };
  
  const inputReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_INPUT:
        return {
          ...state,
          inputs: [...state.inputs, action.payload],
        };
      case READ_INPUT:
        return state.inputs.find((input) => input.id === action.payload);
      case UPDATE_INPUT:
        return {
          ...state,
          inputs: state.inputs.map((input) =>
            input.id === action.payload.id ? action.payload : input
          ),
        };
      case DELETE_INPUT:
        return {
          ...state,
          inputs: state.inputs.filter((input) => input.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default inputReducer;
