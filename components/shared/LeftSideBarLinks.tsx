"use client";

import React from 'react';
import Link from "next/link";
import leftSideBarLinks from "@/constants/leftSideBarLinks";
import Image from "next/image";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";

const LeftSideBarLinks = () => {

	const pathname = usePathname();

	return (
		<div className="p-6 w-full hidden sm:block">   { /* bg-green-400 */ }
			<div className="flex flex-col justify-evenly items-start gap-4">
				{
					leftSideBarLinks.map((link) => {
						return (
							<div className="pt-2 pb-2 pr-4 pl-4 w-full" key={link.key}>
								<Link
									href={link.href}
									className={`flex flex-row justify-start items-center gap-2 px-4 py-2 rounded ${pathname === link.href ? "bg-violet-500 text-white" : ""}`}>
									<Image
										src={link.icon}
										alt={link.label}
										width={20}
										height={20}
										/>
									<p>
										{link.label}
									</p>
								</Link>
							</div>
						)
					})
				}
			</div>
		</div>
	);
};

export default LeftSideBarLinks;
