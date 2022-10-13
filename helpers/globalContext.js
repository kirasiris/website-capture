import { createContext } from "react";
import axios from "axios";
import { API_URL } from "@/config";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const router = useRouter();

	/// process.server

	const axiosSetup = () => {
		axios.defaults.baseURL = `${API_URL}/api/v1`;
		axios.defaults.headers.common["Content-Type"] = `application/json`;
		axios.defaults.headers.common["Accept"] = `application/json`;

		axios.interceptors.response.use(
			async (res) => {
				return res;
			},
			async (err) => {
				let res = err?.response;

				if (
					res?.status === 401 &&
					res?.config &&
					!res?.config?._isRetryRequest
				) {
					console.log("There was global error");
				}
			}
		);
	};

	if (process.server) {
		axiosSetup();
	} else {
		axiosSetup();
	}

	/*
	 *
	 * MOST OF THE PAGES WILL USE THIS. THATS THE REASON OF MAKING THIS REQUEST
	 * AS A GLOBAL CONTEXT
	 *
	 */

	return (
		<GlobalContext.Provider
			value={{
				router,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
