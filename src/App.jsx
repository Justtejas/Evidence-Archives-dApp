import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import ViewEvidence from "./components/Hero/ViewEvidence";
import TransferEvidence from "./components/Hero/TransferEvidence";
import CreateEvidence from "./components/Hero/CreateEvidence";

const App = () => {
	return (
		<div>
			<div className=' w-full h-1/6'>
				<NavBar />
			</div>
			<BrowserRouter>
				<div className=' flex flex-row'>
					<div className=' w-1/5'>
						<SideBar />
					</div>
					<div className='w-4/5'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/view' element={<ViewEvidence />} />
							<Route path='/transfer' element={<TransferEvidence />} />
							<Route path='/create' element={<CreateEvidence />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
