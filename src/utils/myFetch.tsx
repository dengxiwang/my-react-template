import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { message } from "../components/common/myMessage";

// 统一的错误处理函数
const handleError = (status: number) => {
	let errMsg = "";
	switch (status) {
		case 404:
			errMsg = "请求地址不存在";
			break;
		case 500:
			errMsg = "服务器错误";
			break;
		default:
			errMsg = "请求错误";
			break;
	}
	message.error(errMsg);
};

// 统一的请求函数
const request = async (
	url: string,
	config: any,
	token?: string,
	signal?: AbortSignal
) => {
	try {
		// 显示加载进度条
		NProgress.start();
		// 添加 Authorization 请求头，携带 token
		if (token) {
			config.headers = {
				...config.headers,
				token: `${token}`,
			};
		}

		if (signal) {
			// 如果存在 AbortSignal 对象，则设置 fetch 的 signal 参数
			config.signal = signal;
		}

		const res = await fetch(url, config);

		// 处理HTTP状态码不为200的情况
		if (!res.ok) {
			handleError(res.status);
			// 隐藏进度条，返回结果
			NProgress.done();
			return null;
		}

		const contentType = res.headers.get("content-type");

		// 如果返回数据不是JSON格式或者不是二进制流，则返回原始文本
		if (
			contentType?.indexOf("application/json") === -1 &&
			contentType?.indexOf("application/octet-stream") === -1
		) {
			// 隐藏进度条，返回结果
			NProgress.done();
			return await res.text();
		}

		// 如果返回的是JSON格式，则对其进行解析
		if (contentType?.indexOf("application/json") !== -1) {
			const result = await res.json();

			// 隐藏进度条，返回结果
			NProgress.done();
			return result.data;
		}

		// 如果返回的是二进制流，则直接返回Blob对象
		const blob = await res.blob();
		NProgress.done();
		return blob;
	} catch (error) {
		// 出现异常时，隐藏进度条并提示内部错误信息
		console.log(error);
		NProgress.done();
		return null;
	}
};

const debounce = (func: any, delay: number) => {
	let timer: any = null;
	return (...args: any) => {
		clearTimeout(timer);
		return new Promise((resolve, reject) => {
			timer = setTimeout(async () => {
				try {
					const result = await func(...args);
					resolve(result);
				} catch (error) {
					reject(error);
				}
			}, delay);
		});
	};
};

//GET请求函数
export const get = debounce(
	(url: string, params: object, token?: string, signal?: AbortSignal) => {
		let queryString = "";
		if (params) {
			queryString = Object.entries(params)
				.map(
					([key, value]) =>
						`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
				)
				.join("&");
		}

		return request(
			`${url}${queryString ? `?${queryString}` : ""}`,
			{
				method: "GET",
				mode: "cors",
			},
			token,
			signal
		);
	},
	350
);

//POST请求函数
export const post = debounce(
	(
		url: string,
		data: object | FormData,
		token?: string,
		signal?: AbortSignal
	) => {
		if (data instanceof FormData) {
			// 如果是FormData类型，则不需要手动设置content-type
			return request(
				url,
				{
					body: data,
					method: "POST",
				},
				token,
				signal
			);
		} else {
			// 否则，默认使用JSON格式，并手动设置content-type
			return request(
				url,
				{
					body: JSON.stringify(data),
					headers: {
						"content-type": "application/json",
					},
					method: "POST",
				},
				token,
				signal
			);
		}
	},
	350
);
