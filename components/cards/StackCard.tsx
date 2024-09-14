import React from 'react';
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";

interface StackCardProps {
	icon: string;
	heading: string;
	subtitle: string;
	description?: string;
}

const StackCard = ({icon, heading, subtitle, description}: StackCardProps) => {
	return (
		<Card className="w-full sm:w-auto"> {/*  className="w-[300px] max-w-sm" */}
			<CardHeader className="flex flex-row justify-start items-center gap-3">
				<div className="p-3 bg-gray-200 w-14 h-14 rounded-xl">
					<Image
						src={icon}
						alt="twitter"
						width={56}
						height={56}
						className="w-full shrink-0 transform-cpu"
					/>
				</div>
				<div className="flex flex-col justify-between items-start">
					<h1 className="text-black text-2xl font-bold">{heading}</h1>
					<p className="text-gray-600">{subtitle}</p>
				</div>

			</CardHeader>
			{
				description &&
                <CardContent className="overflow-auto break-words">
                    <div className="text-gray-600 text-md">
						{description}
                    </div>
                </CardContent>
			}

		</Card>
	);
};

export default StackCard;
