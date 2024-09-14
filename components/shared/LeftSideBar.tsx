import React from 'react';
import ProfileCard from "@/components/cards/ProfileCard";
import LeftSideBarLinks from "@/components/shared/LeftSideBarLinks";
import Socials from "@/components/shared/Socials";
import MobileNav from "@/components/nav/MobileNav";

const LeftSideBar = ({bgColor}:{bgColor?:string}) => {
	return (
		<nav className={ ` w-full sm:w-auto sticky top-0 z-10 bg-[rgba(255,255,255,0.6)] backdrop-blur-md sm:${bgColor} `}> {/*max-w-[25%] flex-1  */} {/*bg-red-400*/}
			<div className="p-6 ">
				<div className="flex flex-row sm:flex-col justify-between sm:items-start gap-8 sm:divide-y">
					<ProfileCard/>
					<MobileNav/>
					<LeftSideBarLinks/>
					<Socials/>
				</div>
			</div>
		</nav>
	);
};

export default LeftSideBar;
