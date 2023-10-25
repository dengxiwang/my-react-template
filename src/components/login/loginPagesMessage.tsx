import { Alert } from "antd";

export default function LoginPagesMessage() {
	const content: string = "";

	return (
		<>
			{content ? (
				<div className="alert-message">
					<Alert message={content} banner type="info" />
				</div>
			) : null}
		</>
	);
}
