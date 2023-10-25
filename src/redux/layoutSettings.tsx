import { createSlice } from "@reduxjs/toolkit";

export type layoutSettings = {
	siderCollapsed: boolean;
	siderCollapsedWidth: number;
	siderUnCollapsedWidth: number;
};

const defaultValues: layoutSettings = {
	siderCollapsed: false,
	siderCollapsedWidth: 60,
	siderUnCollapsedWidth: 230,
};

const layoutSettings = createSlice({
	name: "userInfo",
	initialState: defaultValues,
	reducers: {
		setSiderCollapsed: (state, action) => {
			state.siderCollapsed = action.payload;
		},
	},
});

export const { setSiderCollapsed } = layoutSettings.actions;

export default layoutSettings.reducer;
