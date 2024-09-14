import React from 'react';
import {projects} from "@/constants/constants";
import ProjectCard from "@/components/cards/ProjectCard";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

const RecentProjects = () => {
	return (
		<div className="flex flex-col justify-between items-start gap-12 pt-12 pb-12">
			<h1 className="text-black text-5xl font-black">
				Recent Projects
			</h1>
			<div className=" w-full min-h-[50vh] gap-6 flex-wrap flex justify-normal items-start"> {/*   */}
				{
					projects.slice(0, 3).map((project, index) => {
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
			<Link href="/projects">
				<Button variant="outline" className="w-48 text-lg text-gray-600 font-medium">
					All Projects
					<ArrowRight className="ml-1 w-6 h-4" />
				</Button>
			</Link>
		</div>
	);
};

export default RecentProjects;
