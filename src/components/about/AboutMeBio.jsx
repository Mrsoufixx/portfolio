// import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import {user} from "../../assets"
import LineHead from '../reusable/LineHead';


const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<>
		
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={user} className="rounded-lg w-96 bg-slate-600" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
		</>
	);
};

export default AboutMeBio;
