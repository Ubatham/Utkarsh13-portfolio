import React from 'react';
import {projects} from "@/constants/constants";
import ProjectCard from "@/components/cards/ProjectCard";

const Projects = () => {
	return (
		<section>
			<div className="flex flex-col justify-between items-start gap-12 pt-12 pb-12">
				<h1 className="text-black text-5xl font-black">
					Projects:
					Showcasing
					My Journey
				</h1>
				<div className="w-full min-h-[60vh] gap-6 flex-wrap flex justify-normal items-start"> {/*   */}
					{
						projects.map((project, index) => {
							return (
								<ProjectCard
									projectImage={project.projectImage}
									projectTitle={project.projectTitle}
									githubLink={project.githubLink}
									liveLink={project.liveLink}
									techs={project.techs}
									key={index}
								/>
							)
						})
					}
				</div>
			</div>

		</section>
	);
};

export default Projects;
