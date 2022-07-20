import React from "react";

const Gallery = () => {
	return (
		<section className='py-6 dark:bg-gray-800 dark:text-gray-50'>
			<div className='container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4'>
				<img
					src='./image2.jpg'
					alt='A group of students sitting around tables wait patiently as they wait for the presentation to begin.'
					className='w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'
				/>
				<img
					alt='Students sit around tables and wait patiently for the presentation to begin.'
					className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
					src='./image1.jpg'
				/>
				<img
					alt='A group of students in a classroom watching two people give a presentation.'
					className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
					src='./image3.jpg'
				/>
				<img
					alt='Professors oversee as students group up and gather around tables to brainstorm ideas.'
					className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
					src='./image4.jpg'
				/>
				<img
					alt='Students sitting around tables having a discussion while multiple professors walk around.'
					className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
					src='./image5.jpg'
				/>
				<img
					alt='Students sitting around tables doing work and having discussions with professors.'
					className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
					src='./image6.jpg'
				/>
				<img
					alt='Students in a classroom watching a presentation.'
					className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
					src='./image7.jpg'
				/>
				<img
					alt='Students sitting around tables doing work on their laptops.'
					className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
					src='./image8.jpg'
				/>
				<img
					alt='Students sitting at tables and doing work on their laptops'
					className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
					src='./image9.jpg'
				/>
				<img
					src='./image10.jpg'
					alt='Students sitting at tables with professors as they discuss their brainstorm ideas.'
					className='w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square'
				/>
			</div>
		</section>
	);
};

export default Gallery;
