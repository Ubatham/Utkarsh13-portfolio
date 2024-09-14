import React from 'react';
import Image from "next/image";
import {edu_stack, experience} from "@/constants/constants";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import ExperienceCard from "@/components/cards/ExperienceCard";
import {ArrowRight} from "lucide-react";

const About = () => {
	return (
		<div className="divide-y ">
			<div className="flex flex-col 2sm:flex-row justify-between items-center gap-5 pb-12">
				<div className="flex-1">
					<h1 className="text-black text-5xl font-black">
						About Me: <br/>
						Crafting <br/>
						Digital <br/>
						Excellence
					</h1>
					<p className="overflow-hidden break-words pt-4">
						As a software developer with a passion for innovation, I thrive on crafting elegant solutions to complex problems. With a solid foundation in <strong>WEB & APP</strong> Development, I am dedicated to continuous learning and staying updated with the latest industry trends. From building scalable web applications to optimizing user experiences, I am committed to delivering high-quality results that exceed expectations. Let&apos;s collaborate and bring your ideas to life!
					</p>
				</div>
				<div className="flex-1">
					<div className="min-w-[50%] 2sm:w-full overflow-hidden rounded-xl">
						<Image
							src="/images/utkarsh.jpg"
							alt="Utkarsh Batham about"
							width={100}
							height={100}
							className="w-full object-cover"
							/>
					</div>
				</div>
			</div>

			<div className="py-10">
				<div className="flex flex-col 2sm:flex-row justify-between items-start gap-8">
					{
						edu_stack.map((item,index) => {
							return (
								<div className={`flex flex-col justify-between items-start gap-4`} key={index}>
									<h1 className="text-3xl text-gray-800 font-extrabold">{item.name}</h1>
									<p className="text-gray-600 overflow-hidden break-words">{item.description}</p>
									<Link href={item.href}>
										<Button variant="project">
											{item.link}
										</Button>
									</Link>
								</div>
							)
						})
					}
				</div>
			</div>


			<div className="pt-10 pb-10">
				<h1 className="text-3xl text-gray-800 font-extrabold">
					Experience
				</h1>
				<div className="flex flex-col justify-between items-start gap-4 pt-6 pb-6">
					{
						experience.filter((item,index) => index===0 || index===3).map((experience,index) => {
							return (
								<ExperienceCard
									key={index}
									title={experience.title}
									company={experience.company}
									description={experience.description}
									startDate={experience.startDate}
									endDate={experience.endDate}
									/>
							)
						})
					}
				</div>

				<Link href="/contact">
					<Button variant="project">
						Contact Me <ArrowRight className="ml-5 mr-6"/>
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default About;
