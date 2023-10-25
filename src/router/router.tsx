import { Watermark } from "antd";
import "nprogress/nprogress.css";
import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useRoutes } from "react-router-dom";
import Loading from "../components/common/loading";
import { attribute } from "../redux/attribute";
import { myRouters, myRoutersType } from "./myRouter";

const getCurrentRouterMap = (
	routers: myRoutersType[],
	path: string
): myRoutersType => {
	for (let router of routers) {
		if (router.path == path) return router;
		if (router.children) {
			const childRouter = getCurrentRouterMap(router.children, path);
			if (childRouter) return childRouter;
		}
	}
	return routers[routers.length - 1];
};

const RouterBeforeEach: React.FC = ({ children }: any) => {
	const homeTitle = useSelector(
		(state: { attribute: attribute }) => state.attribute.homeTitle
	);
	const location = useLocation();
	// const navigator = useNavigate();
	useEffect(() => {
		let router = getCurrentRouterMap(myRouters, location.pathname);
		document.title = router.title || homeTitle || "lims实验室信息管理系统";
		// if (router.auth) {
		// 	navigator("/login");
		// }
	}, [location.pathname]);
	return children;
};

const Router: React.FC = () => {
	const watermarkContent = useSelector(
		(state: { attribute: attribute }) => state.attribute.watermarkContent
	);

	return (
		<>
			<Watermark
				content={watermarkContent}
				zIndex={0}
				font={{ fontSize: 14 }}
				style={{
					position: "unset",
				}}
			>
				<div style={{ position: "fixed" }} />
			</Watermark>
			<Suspense fallback={<Loading />}>{useRoutes(myRouters)}</Suspense>
		</>
	);
};
export { Router, RouterBeforeEach };
