import styles from "@/app/page.module.css";
import {BlogPost} from "@/app/(site)/components/blog-post";
import {getPosts} from "@/sanity/sanity.query";
import Link from "next/link";

export default async function Page() {
    const posts = await getPosts();

    console.log(posts);

    return (
        <>
            <div className={styles.page}>
                <main className={styles.main}>
                    {/*<header className="w-full">*/}
                    {/*    <h2 className="text-center mb-8">Blog</h2>*/}
                    {/*</header>*/}
                    <div className="grid grid-cols-1 py-12">
                        {posts?.map((pt, i) => (
                                <BlogPost key={i} post={pt} />
                            )
                        )}
                    </div>
                </main>
            </div>
        </>
    )
}
