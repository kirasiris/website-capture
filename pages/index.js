import {
	Col,
	Form,
	Input,
	Row,
	Space,
	Divider,
	Button,
	Image,
	Select,
} from "antd";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import WrapperLayout from "@/layout/WrapperLayout";
import GlobalContext from "@/helpers/globalContext";

const Index = () => {
	const { router } = useContext(GlobalContext);

	const [form] = Form.useForm();
	const [imageUrl, setImageUrl] = useState(
		`https://cdn.shopify.com/s/files/1/0249/7898/0942/products/SKU_722897_1024x.png?v=1627660740`
	);
	const [captureData, setCaptureData] = useState({
		url: ``,
		width: 1980,
		height: 720,
		format: `jpeg`,
	});

	const { url, width, height, format } = captureData;

	const createCapture = async () => {
		try {
			const res = await axios.post(
				`/extras/tools/capture/website`,
				captureData
			);
			setImageUrl(res?.data?.data);
			toast.success("Capture created");
			resetForm();
		} catch (err) {
			// const error = err.response.data.message;
			const error = err?.response?.data?.error?.errors;
			const errors = err?.response?.data?.errors;

			if (error) {
				// dispatch(setAlert(error, 'danger'));
				error &&
					Object.entries(error).map(([, value]) => toast.error(value.message));
			}

			if (errors) {
				errors.forEach((error) => toast.error(error.msg));
			}

			toast.error(err?.response?.statusText);
			return { msg: err?.response?.statusText, status: err?.response?.status };
		}
	};

	const resetForm = () => {
		form.resetFields();
		setCaptureData({ url: ``, width: 1980, height: 720, format: `jpeg` });
	};

	return (
		<WrapperLayout title="Take a Screenshot!">
			<Row>
				<Col xs={24} sm={24} lg={12} className={`padding-right`}>
					<Form name="add-website-capture" form={form} layout="vertical">
						<Form.Item
							label="Url"
							name="url"
							rules={[
								{
									required: true,
									message: "Please input an URL",
								},
							]}
						>
							<Input
								id="url"
								name="url"
								placeholder="Paste a URL"
								value={url}
								onChange={(e) => {
									setCaptureData({
										...captureData,
										url: e.target.value,
									});
								}}
							/>
						</Form.Item>
						<Form.Item label="Width" name="width">
							<Input
								id="with"
								name="width"
								placeholder={`Set a width ${width}px`}
								value={width}
								onChange={(e) => {
									setCaptureData({
										...captureData,
										width: e.target.value,
									});
								}}
							/>
						</Form.Item>
						<Form.Item label="Height" name="heigh">
							<Input
								id="height"
								name="height"
								placeholder={`Set a height ${height}px`}
								value={height}
								onChange={(e) => {
									setCaptureData({
										...captureData,
										height: e.target.value,
									});
								}}
							/>
						</Form.Item>
						<Form.Item label="Format" name="format">
							<Select
								defaultValue={format}
								onChange={(e) => {
									setCaptureData({
										...captureData,
										format: e,
									});
								}}
							>
								<Select.Option value={`png`}>PNG</Select.Option>
								<Select.Option value={`jpeg`}>JPEG</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item>
							<Space split={<Divider type="vertical" />}>
								<Button
									type="primary"
									onClick={createCapture}
									htmlType="submit"
								>
									Submit
								</Button>
								<Button htmlType="button" onClick={resetForm}>
									Reset
								</Button>
							</Space>
						</Form.Item>
					</Form>
				</Col>
				<Col xs={24} sm={24} lg={12} className={`padding-left`}>
					{imageUrl !== null && imageUrl !== undefined && imageUrl !== "" && (
						<Image
							src={imageUrl}
							alt={`Image created from ${url}`}
							width={width}
							height={height}
							className="ant-image"
						/>
					)}
				</Col>
			</Row>
		</WrapperLayout>
	);
};

export default Index;
