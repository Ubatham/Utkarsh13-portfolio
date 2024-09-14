"use client";

import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Certificate = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume/Internship.png';
        link.download = 'internship.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={"flex flex-col justify-between items-center gap-5"}>
            <div className={"flex flex-row justify-between items-center gap-16"}>
                <Button variant={"project"} onClick={handleDownload}>Download Certificate</Button>
                <h1 className={"text-5xl text-black font-black"}>Internship Certificate</h1>
            </div>
            <div className={"w-full lg:w-[70%] ring-2"}>
         <Image
            className="w-full"
            src="/resume/internship.png"
            alt="resume image"
            width={1200} // Adjust width according to actual image size
            height={800}  // Adjust height according to actual image size
            quality={100} // Ensure high quality
            layout="responsive" // Adjust layout as necessary
        />

            </div>
        </div>
    );
};

export default Certificate;
