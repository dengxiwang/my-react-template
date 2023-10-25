import { createSlice } from "@reduxjs/toolkit";

export type userInfo = {
	token: string;
};

const defaultValues: userInfo = {
	token: "",
};

const userInfo = createSlice({
	name: "userInfo",
	initialState: defaultValues,
	reducers: {},
});

export const {} = userInfo.actions;

export default userInfo.reducer;
