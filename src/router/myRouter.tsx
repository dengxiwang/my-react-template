import Home from "../pages/home";

type myRoutersType = {
	path: string;
	element: JSX.Element;
	children?: myRoutersType;
}[];

const myRouters: myRoutersType = [
	{
		path: "/",
		element: <Home />,
		children: [],
	},
];

export default myRouters;
