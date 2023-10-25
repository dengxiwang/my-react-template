import { createSlice } from "@reduxjs/toolkit";

export type attribute = {
	logo: string;
	logoPure: string;
	logoSquare: string;
	loginBanner: string;
	limsTitle: string;
	loginBottomText: string;
	watermarkContent: string;
	welcomeToRegister: string;
	welcomeToRegisterTitle: string;
	homeTitle: string;
};

const defaultValues: attribute = {
	logo: "logo.svg",
	logoPure: "./src/assets/logo_pure.svg",
	logoSquare: "./src/assets/logo_square.svg",
	loginBanner: "./src/assets/login/login_banner.svg",
	limsTitle: "实验室信息管理系统",
	welcomeToRegister: "./src/assets/login/hi.svg",
	welcomeToRegisterTitle: "欢迎您的注册使用",
	loginBottomText: "©️lims.fun 版权所有",
	watermarkContent: "©️lims.fun",
	homeTitle: "lims信息管理系统",
};

const attribute = createSlice({
	name: "attribute",
	initialState: defaultValues,
	reducers: {},
});

export const {} = attribute.actions;

export default attribute.reducer;
