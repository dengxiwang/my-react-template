import { Spin } from "antd";
import React, { Suspense, useEffect } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import myRouters from "./myRouter";

const RouterBeforeEach: React.FC = () => {
	useEffect(() => {});

	return (
		<>
			<Outlet />
		</>
	);
};

const Router: React.FC = () => (
	<Suspense fallback={<Spin />}>{useRoutes(myRouters)}</Suspense>
);
export { Router, RouterBeforeEach };
