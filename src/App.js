import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Snapshot from "./pages/Snapshot";
import Testing from "./pages/Testing";

import ScrollToTop from "./utils/scrollToTop"

function App() {
  return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/gallery/:id" element={<Gallery />} />
					<Route path="/snapshot/:id" element={<Snapshot />} />
					<Route path="/testing" element={<Testing />} />
				</Routes>
				<Footer />
			</Router>
		</div>
  );
}

export default App;
