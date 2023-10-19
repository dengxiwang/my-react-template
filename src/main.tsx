import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.less";
import { store } from "./redux/store";
import { Router, RouterBeforeEach } from "./router/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<RouterBeforeEach />
		<Provider store={store}>
			<Router />
		</Provider>
	</BrowserRouter>
);
