import Link from "next/link";
const Opportunities = () => {
	return (
		<div className='flex flex-col justify-center items-center pb-[5vh]'>
			<p className=' text-center text-acm-black font-lexend text-heading py-[5vh]'>
				Available Opportunities
			</p>
			<Link
				href='https://tinyurl.com/acmignitewinter25'
				className='no-underline'
				target='_blank'
			>
				<div className='bg-acm-lightblue hover:opacity-85 text-acm-white text-[2vw] px-8 py-4 rounded-xl shadow-xl text-heading font-bold'>
					ACM Ignite Winter&apos;25 Application
				</div>
			</Link>
		</div>
	);
};

export default Opportunities;
