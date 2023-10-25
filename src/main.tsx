import {
	StyleProvider,
	legacyLogicalPropertiesTransformer,
} from "@ant-design/cssinjs";
import { App } from "antd";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MyMessage from "./components/common/myMessage";
import "./index.less";
import { store } from "./redux/store";
import { Router, RouterBeforeEach } from "./router/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StyleProvider
		transformers={[legacyLogicalPropertiesTransformer]}
		hashPriority="high"
	>
		<App>
			<MyMessage />
		</App>
		<BrowserRouter>
			<Provider store={store}>
				<RouterBeforeEach />
				<Router />
			</Provider>
		</BrowserRouter>
	</StyleProvider>
);
