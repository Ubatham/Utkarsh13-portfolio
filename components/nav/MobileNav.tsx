import React from 'react';

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import leftSideBarLinks from "@/constants/leftSideBarLinks";
import Link from "next/link";
import {socials} from "@/constants/socials";
import {Button} from "@/components/ui/button";

const MobileNav = () => {


	return (
		<div className="sm:hidden content-center"> { /* bg-pink-500 */}
			<Sheet>
				<SheetTrigger asChild>
					<Image
						src="/icons/hamburger.svg"
						alt="hamburger button"
						width={50}
						height={50}
					/>
				</SheetTrigger>
				<SheetContent className="divide-y">
					<SheetHeader className="text-start py-8">
						<SheetTitle>
							<Image
								src="/icons/ub.png"
								alt="mobile nav logo"
								width={300}
								height={70}
							/>
						</SheetTitle>
						<SheetDescription>
							I am a skilled software developer with experience in web development,
							specializing in Java, JavaScript, React and Node.js, ready to bring your
							projects to life.
						</SheetDescription>
					</SheetHeader>
					<div className="flex flex-col justify-between items-start gap-6 py-4">
						{
							leftSideBarLinks.map((link) => {
								return (
									<Link href={link.href}
									      key={link.key}>
										<SheetClose asChild>
											<div className="flex flex-row justify-between items-center gap-3">
												<Image
													src={link.icon}
													alt={link.label}
													width={20}
													height={20}
												/>
												<p className="text-gray-700 text-md">
													{link.label}
												</p>
											</div>
										</SheetClose>
									</Link>
								)
							})
						}
					</div>
					<SheetFooter>
						<div className="flex flex-col justify-between items-start gap-5 py-4">
							<div className="flex flex-col justify-between items-start gap-2">
								{
									socials.filter(social => social.key !== "instagram").map((social) => {
										return (
											<div key={social.key}>
												{social.text}
												<span className="text-xl text-blue-500 hover:underline">
											<Link href={social.href}>
												{social.alt}
											</Link>
										</span>
											</div>
										)
									})
								}
							</div>
							<Link href="/contact" className="w-full">
								<SheetClose asChild>
									<Button variant="default" className="w-full">
										Hire Me
									</Button>
								</SheetClose>
							</Link>
						</div>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	)
};

export default MobileNav;
