import { Flex } from "antd";
import React from "react";
import MyContent from "./myContent";
import MyHeader from "./myHeader";
import MySider from "./mySider";

const HomeLayout: React.FC = () => {
	return (
		<Flex className="container" vertical>
			<MyHeader />
			<Flex className="layout-sider-content">
				<MySider />
				<MyContent />
			</Flex>
		</Flex>
	);
};

export default HomeLayout;
