import AboutUs from "./components/Sections/AboutUs";
import Section1 from "./components/Sections/Section1";
import Section2 from "./components/Sections/Section2";
import Section3 from "./components/Sections/Section3";
import Section4 from "./components/Sections/Section4";
import Navbar from "./components/Navbar/Navbar";

export default function () {
	return (
		<main className="h-full w-full min-w-[360px] overflow-y-auto overflow-x-hidden scroll-smooth">
			<Navbar />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<AboutUs />
		</main>
	);
}
