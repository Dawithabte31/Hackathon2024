
  const Reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          seller: null,
          isFetching: true,
          error: false,
        };
  
      case "LOGIN_SUCCESS":
        return {
          seller: action.payload,
          isFetching: false,
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
          seller: null,
          isFetching: false,
          error: false,
        };
        case "LogOut":
          return {
            seller: null,
            isFetching: false,
            error: false,
          };
          case "UPDATE_START":
            return {
              ...state,
              isFetching:true
            };
      
          case "UPDATE_SUCCESS":
            return {
              seller: action.payload,
              isFetching: false,
              error: false,
            };
          case "UPDATE_FAILURE":
            return {
              seller: state.seller,
              isFetching: false,
              error: true,
            };
      default:
        return state;
    }
  };
  
  export default Reducer;
