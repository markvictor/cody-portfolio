
"use client";
import {
    PortableTextComponents,
    PortableText as SanityPortableText,
} from '@portabletext/react';
import { PortableTextObject } from 'sanity';
import {PortableText} from "next-sanity";
import urlBuilder from '@sanity/image-url'
import { Fraction } from 'fraction.js';

// import { SanityImage } from './SanityImage';

export function PortableTextCustom({ value }) {
    const components = {
        types: {
            wrapTextAroundImage: ({value}) => {
                const {image, imageUrl, imageAlt, caption, position = 'left', width = 30, content} = value;
                const floatClass = 'left'
                    ? 'float-left mr-6'
                    : 'float-right ml-6';

                return (
                    <>
                        <div className="clear-both py-12">
                            <figure
                                className={floatClass + ' relative mb-4 sm:w-'+new Fraction(width/100).toFraction()}
                                // style={{width: `${width}%`}}
                            >
                                <img src={imageUrl} alt={imageAlt}/>
                                {caption && (
                                    <figcaption className="mt-2 text-center text-sm">
                                        {caption}
                                    </figcaption>
                                )}
                            </figure>
                            <div className="space-y-12">
                                <PortableTextCustom value={content}/>
                            </div>
                        </div>
                        <div className="clear-both"></div>
                    </>
                );
            },
            image: ({value}) => {
                return (
                    <img src={value.imageUrl} alt={value.imageAlt} />
                )
            },
            twoImagesSideBySide: ({ value }) => {
                const leftImageUrl = value.leftImageUrl;
                const rightImageUrl = value.rightImageUrl;
                const leftWidth = value.leftWidth || 50;
                const rightWidth = 100 - leftWidth;

                if (!leftImageUrl && !rightImageUrl) return null;

                return (
                    <div className="grid sm:flex gap-4 my-8">
                        {leftImageUrl && (
                            <img
                                src={leftImageUrl}
                                alt="Left side image"
                                // style={{ width: `${leftWidth}%` }}
                                className={'object-cover h-auto sm:w-'+new Fraction(leftWidth/100).toFraction()}
                            />
                        )}
                        {rightImageUrl && (
                            <img
                                src={rightImageUrl}
                                alt="Right side image"
                                // style={{ width: `${rightWidth}%` }}
                                className={'object-cover h-auto sm:w-'+new Fraction(rightWidth/100).toFraction()}
                            />
                        )}
                    </div>
                );
            },
            quote: ({ value }) => (
                <blockquote className="text-center my-24 max-w-[1024px] mx-auto ">
                    <p className="text-7xl text-[#F24F2D] font-semibold">{value.text}</p>
                    {value.author && (
                        <footer className="mt-4">{value.author}</footer>
                    )}
                </blockquote>
            ),
        },
        block: ({ children, node }) => {
            const style = node.style || 'normal';

            if (style.startsWith('h') && style.length === 2 && !isNaN(style[1])) {
                const Tag = style; // 'h1', 'h2', etc.
                return (
                    <Tag className="max-w-[1200px] mx-auto font-bold">
                        {children}
                    </Tag>
                );
            }

            if (style === 'normal') {
                return (
                    <p className="max-w-[1200px] mx-auto mb-4 text-base">
                        {children}
                    </p>
                );
            }

            // Fallback for other styles like blockquote, etc.
            return <p>{children}</p>;
        },
    };

    return (
        <SanityPortableText components={components} value={value} />
    );
}
