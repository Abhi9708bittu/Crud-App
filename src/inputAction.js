export const CREATE_INPUT = 'CREATE_INPUT';
export const READ_INPUT = 'READ_INPUT';
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const DELETE_INPUT = 'DELETE_INPUT';

export const createInput = (input) => ({
  type: CREATE_INPUT,
  payload: input,
});

export const readInput = (id) => ({
  type: READ_INPUT,
  payload: id,
});

export const updateInput = (input) => ({
  type: UPDATE_INPUT,
  payload: input,
});

export const deleteInput = (id) => ({
  type: DELETE_INPUT,
  payload: id,
});
