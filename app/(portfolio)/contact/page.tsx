"use client";

import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {LucideMail, PhoneIcon} from "lucide-react";
import {socials} from "@/constants/socials";
import Link from "next/link";
import Image from "next/image";
import {ChangeEvent, FormEvent, useState} from "react";

const Contact = () => {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { name, email, message } = formData;
		window.location.href = `mailto:utkarshkashyap13@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

		setFormData({name: "",email: "",message:""});
	};

	return (
		<section>
			<div className="flex flex-col justify-between items-start gap-8 divide-y pb-6">

				<div className="flex flex-col justify-between items-start gap-5">
					<h1 className="text-5xl text-black font-extrabold">Let&apos;s Connect</h1>
					<p>
						Feel free to reach out with your projects, questions, <br/>
						or to connect. I&apos;ll respond promptly, and we can <br/> explore opportunities together.
					</p>
				</div>

				<div className="flex flex-col lg:flex-row justify-between items-start gap-12 pt-8">

					<form className="flex flex-col justify-between items-start gap-6" onSubmit={handleSubmit}>
						<h4 className="text-gray-800 font-bold text-xl">Get in Touch</h4>
						<Input name="name" type="text" placeholder="Name" size={50}  value={formData.name} onChange={handleChange}/>
						<Input name="email" type="email" placeholder="Email" size={50} value={formData.email} onChange={handleChange}/>
						<Textarea name="message" placeholder="Type your message here." value={formData.message} onChange={handleChange} />
						<Button variant="default" className="w-full" type="submit">
							Send Message
						</Button>
					</form>

					<div className="flex flex-col justify-between items-start gap-8">

						<div className="flex flex-col justify-between items-start gap-5">
							<h3 className="text-gray-800 font-bold text-xl">Contact</h3>
							<Link href="mailto:utkarshkashyap13@gmail.com" >
								<Button variant="ghost" className="text-gray-500">
									<LucideMail className="mr-4" /> utkarshkashyap13@mail.com
								</Button>
							</Link>
							<Button variant="ghost" className="text-gray-500">
								<PhoneIcon className="mr-4" /> +91 8979930995
							</Button>
						</div>

						<div className="flex flex-col justify-between items-start gap-5">
							<h3 className="text-gray-800 font-bold text-xl">Social</h3>
							{
								socials.map((social,index) => {
									return (
										<div className="pt-2 pb-2 pr-4 pl-4 hover:underline decoration-2 decoration-gray-500" key={index}>
											<Link href={social.href}
											      className="flex flex-row justify-between items-center gap-2">
												<Image
													src={social.icon}
													alt={social.alt}
													width={20}
													height={20}
												/>
												<p className="text-gray-700">
													{social.alt}
												</p>
											</Link>
										</div>
									)
								})
							}
						</div>
					</div>

				</div>

			</div>
		</section>
	);
};

export default Contact;
