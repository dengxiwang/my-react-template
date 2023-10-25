import { Button, Flex, Form, Image, Input } from "antd";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { attribute } from "../../redux/attribute";
import { message } from "../common/myMessage";
import LoginPagesExtraButton from "./loginPagesExtraButton";

interface myLoginProps {
	setType: Dispatch<SetStateAction<string>>;
}

export default function LoginForm(props: myLoginProps) {
	const { setType } = props;
	const navigator = useNavigate();
	const logoPure = useSelector(
		(state: { attribute: attribute }) => state.attribute.logoPure
	);
	const limsTitle = useSelector(
		(state: { attribute: attribute }) => state.attribute.limsTitle
	);

	function login() {
		navigator("/");
		message.success("登录成功");
	}

	return (
		<>
			<Flex align="center" vertical gap={8}>
				<Image src={logoPure} width={56} height={56} preview={false} />
				<p className="login-title">{limsTitle}</p>
			</Flex>
			<Form
				name="login"
				autoComplete="off"
				size="large"
				className="form"
				onFinish={login}
			>
				<Flex vertical gap={6}>
					<Form.Item
						name="username"
						rules={[{ required: true, message: "请输入您的用户名" }]}
					>
						<Input placeholder="请输入用户名" allowClear />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: "请输入您的密码" }]}
					>
						<Input.Password placeholder="请输入密码" allowClear />
					</Form.Item>
				</Flex>
				<div>
					<Form.Item>
						<Button style={{ width: "100%" }} type="primary" htmlType="submit">
							登录
						</Button>
					</Form.Item>
				</div>
				<div className="extra-area">
					<LoginPagesExtraButton setType={setType} />
				</div>
			</Form>
		</>
	);
}
