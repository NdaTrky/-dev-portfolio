import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/functions/getAllProjects";
import Link from "next/link";


export default function ProjectsPage({projects}) {
    console.log(projects);
    return (
        <Layout title="Portfolio / Project" description={"My Projects"}>
            <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
                {/* Uygun bir sayfaya yönlendirme yap */}
                <Link href="/">
                    <span className="text-black dark:text-white hover:text-purple-800 dark:hover:text-purple-500">← Back To Home</span>
                </Link>


            { /*Projects */}
            <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
                {projects.map((project, index) => (
                   <ProjectCard key={project.id} project={project}/>
                ))}

            </div>
            </section>
        </Layout>
    );


    
}
export const getStaticProps = async () => {
    const  projects = await getAllProjects();
    return {
        props: {
            projects
        }
    }

}