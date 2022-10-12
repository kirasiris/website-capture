import { withRouter } from "next/router";
import My401 from "./my401";
import My404 from "./404";
import My500 from "./my500";

const Error = ({ statusCode, router }) => {
	if (statusCode === 404) {
		return (
			<My404
				statusCode={statusCode}
				subtitle="Page Not Found"
				description="Page moved or deleted"
			/>
		);
	} else if (statusCode === 401) {
		return <My401 statusCode={statusCode} />;
	} else {
		return (
			<My500
				statusCode={statusCode}
				subtitle="Something Wrong!."
				description="Problem with server!."
			/>
		);
	}
};

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default withRouter(Error);
