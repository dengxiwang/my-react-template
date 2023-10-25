import { ReactNode } from "react";
import Home from "../pages/home";
import Login from "../pages/login";

export interface myRoutersType {
	path: string;
	element: ReactNode;
	children?: myRoutersType[];
	auth: boolean;
	title?: string;
}

export const myRouters: myRoutersType[] = [
	{
		path: "/",
		element: <Home />,
		auth: true,
		title: "首页",
	},
	{
		path: "login",
		element: <Login />,
		auth: false,
		title: "登录",
	},
];
