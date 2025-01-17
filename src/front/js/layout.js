import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Home } from "./views/home";
import { Signup } from "./views/signup";
import { Login } from "./views/login";
import { Favorites } from "./views/favorites";
import { Electric } from "./views/electric";
import { Acoustic } from "./views/acoustic";
import { Classical } from "./views/classical";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		
			<BrowserRouter basename={basename}>
				<ScrollToTop>	
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/electric/:id" element={<Electric />} />
						<Route path="/acoustic/:id" element={<Acoustic />} />
						<Route path="/classical/:id" element={<Classical />} />
						<Route path="/login" element={<Login />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		
	);
};

export default injectContext(Layout);
