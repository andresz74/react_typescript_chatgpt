import React from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { ChatGpt } from './ChatGpt';

const App: React.FC = () => {
	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>React + Typescript + ChatGPT</h1>
			<ChatGpt />
		</div>
	);
};

export default App;
