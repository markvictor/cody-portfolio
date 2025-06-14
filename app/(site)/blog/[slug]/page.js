import styles from "@/app/page.module.css";
import {getPost} from "@/sanity/sanity.query";
import {BlogPost} from "@/app/(site)/components/blog-post";
import Link from "next/link";

export default async function Post({ params }) {
    const { slug } = params;
    const post = await getPost(slug);
    const index = post.all.findIndex(p => p.slug.current === slug)
    const prev = post.all[index - 1] || null;
    const next = post.all[index + 1] || null;

    return (
        <>
            <div className={styles.page}>
                <main className={styles.main + " w-full"}>
                    <BlogPost post={post} />
                    <section className="grid grid-cols-2 gap-4 py-8 border-y-1 border-gray-300">
                        <div>
                            {prev && (
                                <Link href={`/portfolio/${prev.slug.current}`}>
                                    ← {prev.title}
                                </Link>
                            )}
                        </div>
                        <div className="text-right">
                            {next && (
                                <Link href={`/portfolio/${next.slug.current}`}>
                                    {next.title} →
                                </Link>
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
