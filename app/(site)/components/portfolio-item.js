import Image from "next/image";
import Link from "next/link";
import React from "react";

export function PortfolioItem({project}) {
    const bgColor = project.bgColor?? 'F6C62A';

    return (
        <Link className="duration-700 ease-in-out hover:opacity-80" href={`/portfolio/${project.slug.current}`}>
            <article className={"portfolio-item mb-6 p-6 rounded"} style={{backgroundColor: '#'+bgColor}}>
                <div className="border-b-1 grid grid-cols-2 gap-4 pb-4">
                    <div className="text-sm text-default-color">{project.year ?? '-'}</div>
                    <div className="text-sm text-right text-default-color">{project.tags?.[0].label}</div>
                </div>
                <div className="grid grid-cols-5 gap-4 py-2">
                    <h5 className="col-span-4 text-default-color">{project.title}</h5>
                    <div className="text-right"><Image className="float-right" src="/icons/arrow-up-right.svg" alt="Logo" width={48} height={48} /></div>
                </div>
                <div className="w-full h-150 overflow-hidden">
                    <img
                        // sizes="100vw"
                        className="w-full h-full object-cover"
                        src={project.imageURL}
                        alt={project.imageAlt}
                    />
                </div>
            </article>
        </Link>
    )
}
