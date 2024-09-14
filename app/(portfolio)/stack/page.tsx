import React from 'react';
import {stacks} from "@/constants/constants";
import StackCard from "@/components/cards/StackCard";

const Stack = () => {
	return (
		<section>
			<div className="flex flex-col justify-between items-start gap-12 pt-12 pb-8">
				<h1 className="text-black text-5xl font-black">
					My Skill Stack:
					Crafting Digital
					Solutions
				</h1>
				<div
					className="grid grid-cols-1 gap-x-6 gap-y-6 sm:gap-y-10 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8"> {/* flex flex-col sm:flex-row flex-wrap  justify-between items-start gap-6 */}
					{
						stacks.map((stack, index) => {
							return (
								<StackCard
									icon={stack.icon}
									heading={stack.heading}
									subtitle={stack.subtitle}
									description={stack.description}
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

export default Stack;
