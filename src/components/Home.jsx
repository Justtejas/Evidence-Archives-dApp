import React from "react";

const Home = () => {
	const evidence = [
		{
			id: 1,
			name: "Evidence 1",
		},
		{
			id: 2,
			name: "Evidence 2",
		},
		{
			id: 3,
			name: "Evidence 3",
		},
		{
			id: 4,
			name: "Evidence 4",
		},
		{
			id: 5,
			name: "Evidence 5",
		},
	];
	return (
		<div className='rounded-lg'>
			<h1 className='mt-10 ml-5 text-3xl font-medium'>Evidences :</h1>
			<div className=' my-14 sm:mx-10'>
				<ul className='mx-auto'>
					<div className='flex flex-col w-1/2 ml-10'>
						<hr className='mb-5 w-full' />
						{evidence.map((evidence) => (
							<li key={evidence.id}>
								<span className='sm:text-2xl text-lg sm:mx-1 mx-1 md:mr-30'>
									{evidence.name}
								</span>
								<span className='sm:text-2xl text-lg sm:mx-12 lg:mx-64 mx-8 md:ml-36'>
									{"#" + evidence.id}
								</span>
								<hr className='my-5' />
							</li>
						))}
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Home;
