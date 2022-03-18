import { setVerify } from "./actions";

export const setVerifyThunk = (boolean) => (dispatch) => {
    dispatch(setVerify(boolean));
};
