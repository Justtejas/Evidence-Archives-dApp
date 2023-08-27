import React from 'react'

const ViewEvidence = () => {
  return (
    <div>
			<h1 className='mt-10 ml-5 text-3xl font-medium'>View Evidence</h1>
			<hr className='my-8 w-5/6 mx-6' />
			<div className='flex flex-col w-1/3 mx-10'>
				<label className='text-xl mb-8 font-medium'>Evidence ID :</label>
				<input
					type='text'
					className='border border-nav-bg rounded-lg p-2'
					placeholder='Enter Evidence ID'
				/>
				<button className='bg-nav-bg text-white rounded-lg p-2 my-12 w-40 mx-auto'>
					View
				</button>
			</div>
		</div>
  )
}

export default ViewEvidence