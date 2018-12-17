import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  // passes Redux store functions to manipulate data, dispatch actions,
  // and return data State, if needed
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
  
    // return inner function when there's no object
    dispatch({ 
      type: 'FETCH_POSTS', payload: response
    })
  }
};