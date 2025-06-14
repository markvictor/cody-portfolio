import styles from "@/app/page.module.css";
import Image from "next/image";
import {PortfolioItem} from "@/app/(site)/components/portfolio-item";
import {getProject, getProjects} from "@/sanity/sanity.query";

export default async function Page() {
    const projects = await getProjects();

    return (
        <>
            <div className={styles.page}>
                <main className={styles.main}>
                    <header className="w-full">
                        <h2 className="text-center mb-8">Selected Works</h2>
                    </header>
                    <section className="border-t-1 border-gray-300 grid grid-cols-1 gap-12 md:grid-cols-2 py-12">
                        {projects?.map((proj, i) =>
                            <PortfolioItem key={i} project={proj} />
                        )}
                    </section>
                    {/*<section className="grid grid-cols-2 gap-4 py-8 border-y-1 border-gray-300">*/}
                    {/*    <div>*/}
                    {/*        <a href="#">*/}
                    {/*            <div><span className="text-2xl inline-block mr-4">&larr;</span> Project 1</div>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div className="text-right">*/}
                    {/*        <a href="#">*/}
                    {/*            <div>Project 2 <span className="text-2xl inline-block ml-4">&rarr;</span></div>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                </main>
            </div>
        </>
    )
}
