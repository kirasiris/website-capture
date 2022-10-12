import Link from "next/link";

const My404 = ({ statusCode, router, subtitle = ``, description = `` }) => {
	const handlePrev = async (e) => {
		e.preventDefault();
		router.back();
	};
	return (
		<section className={`center-div`}>
			<div className={`container-fluid m-0 text-center error404`}>
				<h1 className={`display-3`}>{statusCode}</h1>
				<p className={`lead`}>{subtitle}</p>
				<p className={`lead`}>{description}</p>
				<Link href={`/`} passHref>
					<a className={`btn btn-sm btn-dark mr-1`}>Go Home!</a>
				</Link>
				<Link href={`#!`} passHref>
					<a onClick={handlePrev} className={`btn btn-sm btn-dark`}>
						Go Back!
					</a>
				</Link>
			</div>
		</section>
	);
};

export default My404;
