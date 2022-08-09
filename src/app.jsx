//React
import { BrowserRouter, Routes, Route } from "react-router-dom";
//context

//pages
import Timeline from "./pages/timeline/Timeline.js";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<></>} />
					<Route path="/sign-up" element={<></>} />
					<Route path="/timeline" element={<Timeline/>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}