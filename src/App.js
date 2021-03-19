import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Story from "./Story";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
// import StoryReel from "./StoryReel";
function App() {
	const [{ user }, dispatch] = useStateValue();
	// const user = null;
	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					<div className="app__body">
						<Sidebar />
						{/* <Story /> */}
						<Feed />
						<Widgets />
					</div>
				</>
			)}
		</div>
	);
}

export default App;

// npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy
