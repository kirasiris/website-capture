import { APP_NAME, KEVINFONSECA_URL } from "@/config";

const WrapperFooter = () => {
	return (
		<div>
			{APP_NAME} ©2018 Created by{" "}
			<a href={KEVINFONSECA_URL} target="_blank" rel="noopener noreferrer">
				Kevin
			</a>
		</div>
	);
};

export default WrapperFooter;
