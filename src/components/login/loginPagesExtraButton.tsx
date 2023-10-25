import { Button, Flex } from "antd";
import { Dispatch, SetStateAction } from "react";

interface myComponentProps {
	setType: Dispatch<SetStateAction<string>>;
}

export default function LoginPagesExtraButton(props: myComponentProps) {
	const { setType } = props;
	return (
		<Flex justify="center" align="center">
			<Button
				size="small"
				type="link"
				onClick={() => {
					setType("register");
				}}
			>
				客户注册
			</Button>
		</Flex>
	);
}
