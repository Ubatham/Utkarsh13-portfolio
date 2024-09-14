import React from 'react';

interface ExperienceCardProps{
	title:string;
	company:string;
	description:string;
	startDate:string;
	endDate:string;
}

const ExperienceCard = ({title,company,description,startDate,endDate}: ExperienceCardProps) => {
	return (
		<div className="p-4 rounded-md bg-secondary">
			<div className="flex flex-col 2sm:flex-row justify-between items-start gap-6">

				<div className="w-full flex flex-row justify-start items-start gap-3">
					<div className="w-8 h-8">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false"
					     color="var(--token-28dc7010-2882-4c6d-a52a-1fe2a6b0814a, rgb(26, 26, 26))"
					     style={{
						     userSelect: 'none',
						     width: '100%',
						     height: '100%',
						     display: 'inline-block',
						     fill: 'var(--token-28dc7010-2882-4c6d-a52a-1fe2a6b0814a, rgb(26, 26, 26))',
						     color: 'var(--token-28dc7010-2882-4c6d-a52a-1fe2a6b0814a, rgb(26, 26, 26))',
						     flexShrink: 0
					     }}>
						<g fill="var(--token-28dc7010-2882-4c6d-a52a-1fe2a6b0814a, rgb(26, 26, 26))">
							<path
								d="M224,72H208V64a24,24,0,0,0-24-24H40A24,24,0,0,0,16,64v96a24,24,0,0,0,24,24H152v8a24,24,0,0,0,24,24h48a24,24,0,0,0,24-24V96A24,24,0,0,0,224,72ZM40,168a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v8H176a24,24,0,0,0-24,24v72Zm192,24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm-96,16a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,208Zm80-96a8,8,0,0,1-8,8H192a8,8,0,0,1,0-16h16A8,8,0,0,1,216,112Z"></path>
						</g>
						</svg>
					</div>
					<div className="flex flex-col justify-between items-start gap-0">
						<h3 className="text-xl font-medium text-gray-800">{title}</h3>
						<p className="text-gray-500">{company}</p>
						<p className="text-gray-600">{startDate} - {endDate}</p>
					</div>
				</div>

				<div className="w-full">
					<p className="text-gray-600 font-medium">
					{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
