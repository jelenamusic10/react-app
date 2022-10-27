const initialState = {
  result: ''
};
// eslint-disable-next-line
export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      };

    default:
      return state;
  }
};
