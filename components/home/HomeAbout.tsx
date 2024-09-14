import React from 'react';
import AvailableForWork from "@/components/AvailableForWork";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {ArrowBigRight, ArrowBigRightIcon, ArrowRight, Mail} from "lucide-react";

const HomeAbout = () => {
	return (
		<div className="flex flex-col justify-between items-start gap-12 pb-12">
			<div className="max-w-[360px] flex flex-col justify-between items-start gap-6">
				<h1 className="text-black text-7xl font-black">
					Hey there!
					I&apos;m Utkarsh...
				</h1>
				<p>
					A Student of poornima college of engineering studying b.tech.This portfolio is for the project.
				</p>
			</div>
			<Link href="/about">
				<Button variant="outline" className="w-48 text-lg text-gray-600 font-medium">
					More about Me
						<ArrowRight className="ml-1 w-6 h-4" />
				</Button>
			</Link>
		</div>
	);
}

export default HomeAbout;
