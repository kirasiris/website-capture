import { useEffect, useState } from "react";
import { Breadcrumb, PageHeader } from "antd";
import Link from "next/link";

const WrapperBreadCrumbs = ({
	titleStr = `Title`,
	subtitleStr = `This is a subtitle`,
	router,
}) => {
	const convertBreadcrumb = (string) => {
		return string
			.replace(/-/g, " ")
			.replace(/oe/g, "ö")
			.replace(/ae/g, "ä")
			.replace(/ue/g, "ü")
			.toUpperCase();
	};

	const [breadcrumbs, setBreadcrumbs] = useState(null);
	useEffect(() => {
		const routePath = router.asPath.split("/");
		routePath.shift();

		const pathArray = routePath.map((path, i) => {
			return {
				text: path,
				href: "/" + routePath.slice(0, i + 1).join("/"),
			};
		});
		setBreadcrumbs(pathArray);
	}, [router]);

	if (!breadcrumbs) {
		return null;
	}

	return (
		<PageHeader
			className="site-page-header-responsive"
			onBack={() => router.back()}
			title={titleStr}
			subTitle={subtitleStr}
		>
			<Breadcrumb
				style={{
					margin: "16px 0",
				}}
			>
				{breadcrumbs.map((breadcrumb, index) => {
					return (
						<Breadcrumb.Item key={index}>
							<Link href={breadcrumb.href} passHref>
								{convertBreadcrumb(breadcrumb.text)}
							</Link>
						</Breadcrumb.Item>
					);
				})}
			</Breadcrumb>
		</PageHeader>
	);
};

export default WrapperBreadCrumbs;
