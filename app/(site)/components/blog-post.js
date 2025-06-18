import {PortableTextCustom} from "@/app/(site)/components/portable-text";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";

export function BlogPost({post}) {
    return (
        <article>
            <section className="w-full">
                <p className="mb-12">{dayjs(post.publishedAt).format('MMMM DD, YYYY')}</p>
                <h1 className="mb-4">{post.title}</h1>
            </section>
            <section className="grid grid-cols-2 gap-4">
                <div className="font-bold">
                    <Image className="mr-4 inline-block" src="/icons/icon-blog.png" alt="Logo" width={48} height={48} />
                    {post.author}
                </div>
                <div className="text-sm text-right">
                    {post.tags.map(tag => (
                        <div key={tag.label}
                             className="bg-main-color text-default-color font-bold py-1 px-2 rounded-full inline-block mb-12">{tag.label}</div>
                    ))}
                </div>
            </section>
            <section className="pb-12 border-b-1 border-gray-300">
                <img src={post.imageURL} className="w-full h-auto" alt={post.imageAlt || ''}/>
            </section>
            <section className="py-12 border-gray-300">
                <div className="space-y-12">
                    <PortableTextCustom value={post.body}/>
                </div>
            </section>
        </article>
    )
}
