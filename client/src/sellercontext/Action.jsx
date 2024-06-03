export const LoginStart = () => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (seller) => ({
  type: "LOGIN_SUCCESS",
  payload: seller,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const UpdateStart = () => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = (seller) => ({
  type: "UPDATE_SUCCESS",
  payload: seller,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
