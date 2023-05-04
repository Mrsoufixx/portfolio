import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import Project from '../pages/sections/ProjectsSections';
import Button from '../components/reusable/Button';
import About from './sections/AboutMeSection';
import Contact from './sections/ContactSection';
import Skills from './sections/Skills';
import { useEffect } from 'react';



const Home = () => {
	useEffect(() => {
		document.title = "_Home";
	    }, []);
	return (
		<div className="container mx-auto">
			<AppBanner/>
			<About/>
			<Skills/>
			<Project/>

			<div className="mt-8 sm:mt-10 flex justify-center mb-8">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-primary-green hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>
			<Contact/>
		</div>
	);
};

export default Home;
