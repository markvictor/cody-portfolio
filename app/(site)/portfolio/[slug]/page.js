
import styles from "@/app/page.module.css";
import Image from "next/image";
import {PortfolioItem} from "@/app/(site)/components/portfolio-item";
import {getProfile, getProject} from "@/sanity/sanity.query";
import {PortableText} from "next-sanity";
import Link from "next/link";

export default async function Portfolio({ params }) {
    const { slug } = params;
    const project = await getProject(slug);
    const index = project.all.findIndex(p => p.slug.current === slug)
    const prev = project.all[index - 1] || null;
    const next = project.all[index + 1] || null;

    return (
        <>
            <header className="w-full bg-center bg-cover h-200 -mt-21"
                    style={{'backgroundImage': 'url('+project.imageURL+')'}}>
                <div className="flex items-center justify-center w-full h-full bg-gray-600/50">
                    <div className="text-center max-w-600px">
                        {project.tags?.length > 0 &&
                        <div className="tags flex items-center justify-center gap-4">
                            {project.tags.map(tag => (
                                <div key={tag.label} className="bg-main-color text-default-color font-bold py-1 px-4 rounded-full inline-block mb-12">{tag.label}</div>
                            ))}
                        </div>
                        }
                        <h1 className="text-white mb-4">{project.title}</h1>
                        <p className="text-white">{project.blurb}</p>
                    </div>
                </div>
            </header>
            <section className="border-b-1 border-gray-300 py-8 text-center sm:flex sm:items-center sm:justify-center sm:gap-x-12 w-full">
                <div className="my-2"><span className="font-bold">Year</span> {project.year}</div>
                <div className="my-2"><span className="font-bold">Client</span> {project.client}</div>
                <div className="my-2"><span className="font-bold">Deliverables</span> {project.deliverables}</div>
            </section>
            <div className={styles.page}>
                <main className={styles.main + " w-full"}>
                    <article>
                        <h3 className="text-center">Overview</h3>
                        <section className="grid grid-cols-1 gap-12 md:grid-cols-3 py-12">
                            <div>
                                <h5 className="mb-8">{project.col1Title}</h5>
                                <p>{project.col1Text}</p>
                            </div>
                            <div>
                                <h5 className="mb-8">{project.col2Title}</h5>
                                <p>{project.col2Text}</p>
                            </div>
                            <div>
                                <h5 className="mb-8">{project.col3Title}</h5>
                                <p>{project.col3Text}</p>
                            </div>
                        </section>
                        {project.content?.map((section, i) => {
                            switch (section._type) {
                                case 'textBlock':
                                    return (
                                        <section key={i} className="py-12 border-t-1 border-gray-300">
                                            <div className="max-w-[1200px] m-auto">
                                                {section.title && <h4>{section.title}</h4>}
                                                {/* Use your block content renderer here */}
                                                <div className="space-y-4">
                                                    <PortableText  value={section.content}/>
                                                </div>
                                            </div>
                                        </section>
                                    )
                                case 'singleImage':
                                    return (
                                        <section key={i} className="py-12 border-t-1 border-gray-300">
                                            <img src={section.imageUrl} className="w-full h-auto" alt={section.alt || ''} />
                                        </section>
                                    )
                                case 'imageGallery':
                                    return (
                                        <section key={i} className={"grid grid-cols-1 gap-4 md:grid-cols-"+section.images.length+" py-12 border-t-1 border-gray-300"}>
                                            {section.images?.map((img, idx) => (
                                                <img key={idx} className="w-full h-auto" src={img.imageUrl} alt={section.alt || ''} />
                                            ))}
                                        </section>
                                    )
                                default:
                                    return null
                            }
                        })}
                        {/*<section className="py-12 border-t-1 border-gray-300">*/}
                        {/*    <Image width="1400"*/}
                        {/*           height="1077"*/}
                        {/*        // sizes="100vw"*/}
                        {/*           className="w-full h-auto"*/}
                        {/*           src="https://placehold.co/1400x1077.png"  alt="Portfolio 1"/>*/}
                        {/*</section>*/}
                        {/*<section className="py-12 border-t-1 border-gray-300 max-w-[1200px] m-auto">*/}
                        {/*    <div>*/}
                        {/*        <h4>Xxxxxxxx</h4>*/}
                        {/*        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ipsum rhoncus montes massa tellus nibh fames scelerisque sit. Nec nam sed tristique libero eget aliquam. Justo egestas facilisi enim neque fermentum tincidunt rutrum. Amet pharetra pharetra amet in sagittis at malesuada. Scelerisque</p>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                        {/*<section className="grid grid-cols-1 gap-4 md:grid-cols-2 py-12">*/}
                        {/*    <div>*/}
                        {/*        <Image width="690"*/}
                        {/*               height="530"*/}
                        {/*            // sizes="100vw"*/}
                        {/*               className="w-full h-auto"*/}
                        {/*               src="https://placehold.co/690x530.png"  alt="Portfolio 2"/>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <Image width="690"*/}
                        {/*               height="530"*/}
                        {/*            // sizes="100vw"*/}
                        {/*               className="w-full h-auto"*/}
                        {/*               src="https://placehold.co/690x530.png"  alt="Portfolio 3"/>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                        {/*<section className="py-12 border-t-1 border-gray-300 max-w-[1200px] m-auto">*/}
                        {/*    <div>*/}
                        {/*        <h4>Xxxxxxxx</h4>*/}
                        {/*        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ipsum rhoncus montes massa tellus nibh fames scelerisque sit. Nec nam sed tristique libero eget aliquam. Justo egestas facilisi enim neque fermentum tincidunt rutrum. Amet pharetra pharetra amet in sagittis at malesuada. Scelerisque</p>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                    </article>
                    <section className="grid grid-cols-2 gap-4 py-8 border-y-1 border-gray-300">
                        <div>
                            {prev && (
                                <Link href={`/portfolio/${prev.slug.current}`}>
                                    ← {prev.title}
                                </Link>
                            )}
                            {/*<a href="#">*/}
                            {/*    <div><span className="text-2xl inline-block mr-4">&larr;</span> Project 1</div>*/}
                            {/*</a>*/}
                        </div>
                        <div className="text-right">
                            {next && (
                                <Link href={`/portfolio/${next.slug.current}`}>
                                    {next.title} →
                                </Link>
                            )}
                            {/*<a href="#">*/}
                            {/*    <div>Project 2 <span className="text-2xl inline-block ml-4">&rarr;</span></div>*/}
                            {/*</a>*/}
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
