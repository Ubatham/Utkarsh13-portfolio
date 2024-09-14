import HomeAbout from "@/components/home/HomeAbout";
import RecentProjects from "@/components/home/RecentProjects";
import HomeStack from "@/components/home/HomeStack";

export default function Home() {
	return (
		<div className="divide-y ">
			<HomeAbout/>
			<RecentProjects/>
			<HomeStack/>
		</div>
	);
}


