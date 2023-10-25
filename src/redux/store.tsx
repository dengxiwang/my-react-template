import { configureStore } from "@reduxjs/toolkit";
import attribute from "./attribute";
import layoutSettings from "./layoutSettings";
import userInfo from "./userInfo";

export const store = configureStore({
	reducer: {
		attribute: attribute,
		layoutSettings: layoutSettings,
		userInfo: userInfo,
	},
});
