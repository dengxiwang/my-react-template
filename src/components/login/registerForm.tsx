import { Button, Flex, Form, Image, Input } from "antd";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { attribute } from "../../redux/attribute";

interface myRegisterProps {
	setType: Dispatch<SetStateAction<string>>;
}

export default function RegisterForm(props: myRegisterProps) {
	const { setType } = props;
	const welcomeToRegister = useSelector(
		(state: { attribute: attribute }) => state.attribute.welcomeToRegister
	);
	const welcomeToRegisterTitle = useSelector(
		(state: { attribute: attribute }) => state.attribute.welcomeToRegisterTitle
	);

	function register() {
		console.log(123);
	}

	function backToLastType() {
		setType("login");
	}

	return (
		<>
			<Flex align="center" vertical gap={8}>
				<Image src={welcomeToRegister} width={56} height={56} preview={false} />
				<p className="login-title">{welcomeToRegisterTitle}</p>
			</Flex>
			<Form
				name="login"
				autoComplete="off"
				size="large"
				className="form"
				onFinish={register}
			>
				<Flex vertical gap={6}>
					<Form.Item
						name="username"
						rules={[{ required: true, message: "请输入您的用户名" }]}
					>
						<Input placeholder="请输入用户名" allowClear autoComplete="off" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: "请输入您的密码" }]}
					>
						<Input.Password
							placeholder="请输入密码"
							allowClear
							autoComplete="new-password"
						/>
					</Form.Item>
				</Flex>
				<div>
					<Form.Item>
						<Button style={{ width: "100%" }} type="primary" htmlType="submit">
							我要注册
						</Button>
					</Form.Item>
				</div>
				<div className="extra-area">
					<Flex justify="center" align="center">
						<Button type="text" size="small" onClick={backToLastType}>
							返回登录
						</Button>
					</Flex>
				</div>
			</Form>
		</>
	);
}
