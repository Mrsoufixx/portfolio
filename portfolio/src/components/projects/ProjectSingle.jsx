import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image,techno }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to="/projects/single-project" aria-label="Single Project">
				<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<img
							src={image}
							className="rounded-t border"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-4 border">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
						<div className='border flex flex-wrap'>
							{techno.map((t)=>(

								<div key={t} className='p-2 dark:text-primary-light'>{t}</div>
								))}
						</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
