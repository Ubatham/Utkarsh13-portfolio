import React from 'react';
import Image from "next/image";

const ProfileCard = () => {
	return (
		<div
			className="flex flex-row justify-start sm:justify-center items-center gap-3 w-full">   { /* bg-amber-400 */}
			<div className="w-28 h-28 rounded-full overflow-hidden">
				<Image
					src="/images/utkarsh.jpg"
					alt="Utkarsh Batham"
					width={150}
					height={150}
					className="w-full object-cover rounded-full"
				/>
			</div>
			<div className="flex flex-col justify-center items-start">
				<h1 className="text-2xl font-bold text-gray-800">
					Utkarsh Batham
				</h1>
				<p className="text-gray-700">
					Student
				</p>
				<p className={"text-sm"}>
					INDIA
				</p>
			</div>
		</div>
	);
};

export default ProfileCard;
