import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import SinglePage from './page/SinglePage/SinglePage';
import EditPage from './page/EditPage/EditPage';
import CreatePost from './page/CreatePost/CreatePost';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path={`/`} element={<HomePage />} />
				<Route path={`/:id`} element={<SinglePage />} />
				<Route path={`/:id/Edit`} element={<EditPage />} />
				<Route path={`/Create`} element={<CreatePost />} />
			</Routes>
		</div>
	);
}

export default App;
