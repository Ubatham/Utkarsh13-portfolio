import React from 'react';
import {projects, stacks} from "@/constants/constants";
import ProjectCard from "@/components/cards/ProjectCard";
import StackCard from "@/components/cards/StackCard";
import {ArrowRight, icons} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const HomeStack = () => {
	return (
		<div className="flex flex-col justify-between items-start gap-12 pt-12 pb-8">
			<h1 className="text-black text-5xl font-black">
				Stack
			</h1>
			<div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:gap-y-10 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8"> {/* flex flex-col sm:flex-row flex-wrap  justify-between items-start gap-6 */}
				{
					stacks.slice(0, 6).map((stack, index) => {
						return (
							<StackCard
								icon={stack.icon}
								heading={stack.heading}
								subtitle={stack.subtitle}
								key={index}
							/>
						)
					})
				}
			</div>
			<Link href="/stack">
				<Button variant="outline" className="w-48 text-lg text-gray-600 font-medium">
					All Stack
					<ArrowRight className="ml-1 w-6 h-4" />
				</Button>
			</Link>
		</div>
	);
};

export default HomeStack;
