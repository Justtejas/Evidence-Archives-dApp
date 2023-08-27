import React from "react";

const CreateEvidence = () => {
	return (
		<div>
			<h1 className='mt-10 ml-5 text-3xl font-medium'>Create Evidence</h1>
			<hr className='my-8 w-5/6 mx-6' />
			<div className='flex flex-col w-1/3 mx-10'>
				<label className='text-xl mb-8 font-medium'>Evidence ID :</label>
				<input
					type='text'
					className='border border-nav-bg rounded-lg p-2'
					placeholder='Enter Evidence ID'
				/>

				<label className='text-xl my-8 font-medium'>
					Evidence Description :
				</label>
				<textarea
					rows={4}
					className=' border border-nav-bg rounded-lg p-2 mb-8'
					placeholder='Enter Evidence Description'
				/>
				<input type='file' className='border border-nav-bg rounded-lg my-8' />
				<button className='bg-nav-bg text-white rounded-lg p-2 my-12 w-40 mx-auto'>
					Create
				</button>
			</div>
		</div>
	);
};

export default CreateEvidence;
