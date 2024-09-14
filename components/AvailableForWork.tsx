import React from 'react';
import Image from "next/image";

const AvailableForWork = () => {
	return (
		<div className="px-3 py-2 mb-12 w-48 flex flex-row justify-start items-center gap-2 bg-green-100 rounded-md">
			<Image
				src="/icons/green-point.svg"
				alt="green point"
				width={10}
				height={10}
			/>
			<p className="text-green-500 font-medium">
				Available for Work
			</p>
		</div>
	);
};

export default AvailableForWork;
