import "antd/dist/antd.dark.css";
import "@/css/app.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer />
		</>
	);
};

export default MyApp;
