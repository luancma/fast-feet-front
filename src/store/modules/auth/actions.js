export const SIGN_IN_REQUEST = '@auth_SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = '@auth_SIGN_IN_SUCCESS';
export const SIGN_OUT = '@auth_SIGN_OUT';
export const SIGN_FAILURE = '@auth_SIGN_FAILURE';

export const signInRequest = (email, password) => ({
  type: SIGN_IN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const signInSuccess = (token, user) => ({
  type: SIGN_IN_SUCCESS,
  payload: {
    token,
    user,
  },
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const signFailure = () => ({
  type: SIGN_FAILURE,
});
