import { LeftOutlined } from "@ant-design/icons";
import { animated, useSpring } from "@react-spring/web";
import { Button, Col, Row } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateEffect } from "react-use";
import LoginForm from "../components/login/loginForm";
import LoginPagesMessage from "../components/login/loginPagesMessage";
import RegisterForm from "../components/login/registerForm";
import { attribute } from "../redux/attribute";
import "../styles/common.less";
import "../styles/login.less";

export default function Login() {
	const [loginBoxAnimation, loginBoxAnimationControl] = useSpring(
		{
			from: { opacity: 0, x: 60 },
			to: { opacity: 1, x: 0 },
		},
		[]
	);
	const loginBanner = useSelector(
		(state: { attribute: attribute }) => state.attribute.loginBanner
	);
	const loginBottomText = useSelector(
		(state: { attribute: attribute }) => state.attribute.loginBottomText
	);
	const [type, setType] = useState("login");

	useUpdateEffect(() => {
		loginBoxAnimationControl.start({
			from: { opacity: 0, x: 60 },
			to: { opacity: 1, x: 0 },
		});
	}, [type]);

	return (
		<Row className="container" wrap={false}>
			<Col
				flex={"500px"}
				className="left-login-container background-image-set"
				style={{
					backgroundImage: `url(${loginBanner})`,
					backgroundSize: "contain",
				}}
			></Col>
			<Col flex={1} className="right-login-container">
				<LoginPagesMessage />
				<div className="login-box">
					{type === "login" ? null : (
						<Button
							icon={<LeftOutlined />}
							type="text"
							className="fixed-left-top-area"
							onClick={() => {
								setType("login");
							}}
						/>
					)}
					<animated.div
						style={loginBoxAnimation}
						className="animation-keep-style"
					>
						{type === "login" ? (
							<LoginForm setType={setType} />
						) : (
							<RegisterForm setType={setType} />
						)}
					</animated.div>
				</div>
				<div className="login-bottom-container">{loginBottomText}</div>
			</Col>
		</Row>
	);
}
