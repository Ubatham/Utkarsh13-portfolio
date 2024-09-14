import React from 'react';

const Footer = () => {
	return (
		<div className="divide-y py-10">
			<div/>
			<div className="py-10">
				&copy; Copyright {new Date().getFullYear()}. Utkarsh
			</div>
		</div>
	);
};

export default Footer;
