import { Outlet } from "react-router-dom";
import "../../styles/layout.less";

export default function MyContent() {
	return (
		<div className="layout-content-container">
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
}
