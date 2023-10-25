import { UserOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { attribute } from "../../redux/attribute";
import "../../styles/layout.less";

export default function MyHeader() {
	const navigator = useNavigate();
	const location = useLocation();
	const logoPure = useSelector(
		(state: { attribute: attribute }) => state.attribute.logoPure
	);
	const homeTitle = useSelector(
		(state: { attribute: attribute }) => state.attribute.homeTitle
	);

	return (
		<>
			<div className="my-header-container">
				<div
					className="logo-area"
					onClick={() => {
						if (location.pathname !== "/" && location.pathname !== "home") {
							navigator("/");
						}
					}}
				>
					<Image
						className="logo"
						src={logoPure}
						width={32}
						height={32}
						preview={false}
					/>
					<p>{homeTitle}</p>
				</div>
				<div>
					<Avatar icon={<UserOutlined />} />
				</div>
			</div>
		</>
	);
}
