import "antd/dist/antd.dark.css";
import "@/css/app.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "@/helpers/globalContext";

const MyApp = ({ Component, pageProps }) => {
	return (
		<GlobalProvider>
			<Component {...pageProps} />
			<ToastContainer />
		</GlobalProvider>
	);
};

export default MyApp;
