import nprogress from "nprogress";
import "nprogress/nprogress.css";
import React, { useEffect } from "react";

const Loading: React.FC<{}> = () => {
	//组件挂在时执行nprogress.start()
	useEffect(() => {
        console.log(123);
        
		nprogress.start();
	}, []);
	//组件消亡时执行 nprogress.done()
	useEffect(() => {
		return () => {
			nprogress.done();
		};
	});
	return <React.Fragment />;
};

export default Loading;
