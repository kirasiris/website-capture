import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<script
						src="https://kit.fontawesome.com/4cde37f226.js"
						crossOrigin="anonymous"
					/>
					<script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
