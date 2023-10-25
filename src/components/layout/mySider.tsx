import {
    DoubleLeftOutlined,
    DoubleRightOutlined,
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Divider, Menu, MenuProps } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { layoutSettings, setSiderCollapsed } from "../../redux/layoutSettings";

export default function MySider() {
	const dispatch = useDispatch();
	const siderCollapsed = useSelector(
		(state: { layoutSettings: layoutSettings }) =>
			state.layoutSettings.siderCollapsed
	);
	const siderCollapsedWidth = useSelector(
		(state: { layoutSettings: layoutSettings }) =>
			state.layoutSettings.siderCollapsedWidth
	);
	const siderUnCollapsedWidth = useSelector(
		(state: { layoutSettings: layoutSettings }) =>
			state.layoutSettings.siderUnCollapsedWidth
	);

	const items2: MenuProps["items"] = [
		UserOutlined,
		LaptopOutlined,
		NotificationOutlined,
	].map((icon, index) => {
		const key = String(index + 1);

		return {
			key: `sub${key}`,
			icon: React.createElement(icon),
			label: `subnav ${key}`,

			children: new Array(4).fill(null).map((_, j) => {
				const subKey = index * 4 + j + 1;
				return {
					key: subKey,
					label: `option${subKey}`,
				};
			}),
		};
	});

	return (
		<div className="layout-sider-container">
			<Menu
				mode="inline"
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
				items={items2}
				inlineCollapsed={siderCollapsed}
				style={{
					width: siderCollapsed ? siderCollapsedWidth : siderUnCollapsedWidth,
					height: "calc(100% - 56px)",
					overflow: "scroll",
				}}
			/>
			<Divider style={{ margin: "8px 0px" }} />
			<div>
				<Button
					type="text"
					icon={
						siderCollapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />
					}
					onClick={() => dispatch(setSiderCollapsed(!siderCollapsed))}
				>
					{siderCollapsed ? "" : "收起菜单"}
				</Button>
			</div>
		</div>
	);
}
