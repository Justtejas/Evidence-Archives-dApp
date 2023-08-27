import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
	const location = useLocation();
	const isLinkActive = (href) => {
		return href === location.pathname;
	};
	return (
		<>
			<div className=' bg-sidebar-bg h-screen '>
				<ul className='sm:p-14'>
					<li className='p-2 mb-4'>
						<Link
							to='/'
							className={`hover:bg-slate-400 sm:text-2xl sm:pl-4 sm:pr-8 sm:py-2 rounded-lg  text-lg ${
								isLinkActive("/") ? "bg-active-bg font-medium" : ""
							}`}
						>
							Home
						</Link>
					</li>
					<li className='p-2 my-4	'>
						<Link
							to='/create'
							className={`hover:bg-slate-400 sm:text-2xl sm:pl-4 sm:pr-8 sm:py-2 rounded-lg text-lg  ${
								isLinkActive("/create") ? "bg-active-bg font-medium" : ""
							}`}
						>
							Create Evidence
						</Link>
					</li>
					<li className='p-2 my-4	'>
						<Link
							to='/transfer'
							className={`hover:bg-slate-400 sm:text-2xl sm:pl-4 sm:pr-8 sm:py-2 rounded-lg  text-lg ${
								isLinkActive("/transfer") ? "bg-active-bg font-medium " : ""
							}`}
						>
							Transfer Evidence
						</Link>
					</li>
					<li className='p-2 my-4	'>
						<Link
							to='/view'
							className={`hover:bg-slate-400 sm:text-2xl sm:pl-4 sm:pr-8 sm:py-2 rounded-lg  text-lg ${
								isLinkActive("/view") ? "bg-active-bg font-medium" : ""
							}`}
						>
							View Evidence
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default SideBar;
