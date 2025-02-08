import Link from "next/link";
const Opportunities = () => {
	return (
		<div className='flex flex-col justify-center items-center pb-[5vh]'>
			<p className=' text-center text-acm-black font-lexend text-[14vw] md:text-[3.5vw] font-semibold py-[5vh]'>
				Programs
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<Link
					href='https://tinyurl.com/acmignitespring25'
					className='no-underline'
					target='_blank'
				>
					<div className='bg-gradient-to-br from-acm-lightblue to-acm-lightpurple hover:opacity-85 text-acm-white text-[4vw] md:text-[2vw] px-8 py-4 rounded-xl shadow-xl text-center font-bold'>
						ACM Spark Spring&apos;25 Application
					</div>
				</Link>
				<Link
					href='https://tinyurl.com/acmcreatespring25'
					className='no-underline'
					target='_blank'
				>
					<div className='bg-gradient-to-br from-acm-lightpurple to-acm-pink hover:opacity-85 text-acm-white text-[4vw] md:text-[2vw] px-8 py-4 rounded-xl shadow-xl text-center font-bold'>
						ACM Create Spring&apos;25 Application
					</div>
				</Link>
			</div>
			<Link
				href='https://tinyurl.com/acmforgespring25'
				className='no-underline pt-4'
				target='_blank'
			>
				<div className='bg-gradient-to-br from-acm-green to-acm-blue hover:opacity-85 text-acm-white text-[4vw] md:text-[2vw] px-8 py-4 rounded-xl shadow-xl text-center font-bold'>
					ACM Forge Spring&apos;25 Application
				</div>
			</Link>
		</div>
	);
};

export default Opportunities;
