import React from 'react';
import {socials} from "@/constants/socials";
import Image from "next/image";
import Link from "next/link";

const Socials = () => {
	return (
		<div className="p-6 w-full hidden sm:block"> { /* bg-pink-500 */ }
			<div className="flex flex-row justify-between items-center">
				{
					socials.map((social) => {
						return (
							<Link href={social.href} key={social.key}>
								<Image
									src={social.icon}
									alt={social.alt}
									width={25}
									height={25}
								/>
							</Link>
						)
					})
				}
			</div>
		</div>
	);
};

export default Socials;
