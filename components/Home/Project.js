import React from "react";

const Project = () => {
	return (
		<div className='dark:bg-gray-800 dark:text-gray-100'>
			<div className='container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900'>
				<div className='flex items-center justify-between'>
					<span className='text-sm dark:text-gray-400'>
						Jun 1, 2020
					</span>
					<div className='flex justify-evenly items-center'>
						<a
							rel='noopener noreferrer'
							href='#'
							className='px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900 m-1'
						>
							Javascript
						</a>
						<a
							rel='noopener noreferrer'
							href='#'
							className='px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900 m-1'
						>
							React
						</a>
					</div>
				</div>
				<div className='mt-3'>
					<a
						rel='noopener noreferrer'
						href='#'
						className='text-2xl font-bold hover:underline'
					>
						Nos creasse pendere crescit angelos etc
					</a>
					<p className='mt-2'>
						Tamquam ita veritas res equidem. Ea in ad expertus
						paulatim poterunt. Imo volo aspi novi tur. Ferre hic
						neque vulgo hae athei spero. Tantumdem naturales
						excaecant notaverim etc cau perfacile occurrere. Loco
						visa to du huic at in dixi aër.
					</p>
				</div>
				<div className='flex items-center justify-between mt-4'>
					<a
						rel='noopener noreferrer'
						href='#'
						className='hover:underline dark:text-violet-400'
					>
						Read more
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
