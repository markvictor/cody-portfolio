
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
    const widthClassMap = {
        10: 'sm:w-[10%]',
        15: 'sm:w-[15%]',
        20: 'sm:w-[20%]',
        25: 'sm:w-[25%]',
        30: 'sm:w-[30%]',
        35: 'sm:w-[35%]',
        40: 'sm:w-[40%]',
        45: 'sm:w-[45%]',
        50: 'sm:w-[50%]',
        55: 'sm:w-[55%]',
        60: 'sm:w-[60%]',
        65: 'sm:w-[65%]',
        70: 'sm:w-[70%]',
        75: 'sm:w-[75%]',
        80: 'sm:w-[80%]',
        85: 'sm:w-[85%]',
        90: 'sm:w-[90%]',
        95: 'sm:w-[95%]',
    };

    const components = {
        types: {
            wrapTextAroundImage: ({value}) => {
                const {image, imageUrl, imageAlt, caption, position = 'left', width = 30, content} = value;
                const floatClass = 'left'
                    ? 'float-left mr-6'
                    : 'float-right ml-6';
                const widthClass = widthClassMap[width] || 'w-full'; // fallback to full width

                return (
                    <>
                        <div className="clear-both py-12">
                            <figure
                                className={floatClass + ` relative mb-4 ${widthClass}`}
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
                const leftWidthClass = widthClassMap[leftWidth] || 'w-full'; // fallback to full width
                const rightWidthClass = widthClassMap[rightWidth] || 'w-full'; // fallback to full width

                if (!leftImageUrl && !rightImageUrl) return null;

                return (
                    <div className="grid sm:flex gap-4 my-8">
                        {leftImageUrl && (
                            <img
                                src={leftImageUrl}
                                alt="Left side image"
                                // style={{ width: `${leftWidth}%` }}
                                className={`object-cover h-auto ${leftWidthClass}`}
                            />
                        )}
                        {rightImageUrl && (
                            <img
                                src={rightImageUrl}
                                alt="Right side image"
                                // style={{ width: `${rightWidth}%` }}
                                className={`object-cover h-auto ${rightWidthClass}`}
                            />
                        )}
                    </div>
                );
            },
            quote: ({ value }) => (
                <blockquote className="text-center my-24 max-w-[1024px] mx-auto ">
                    <p className="text-7xl text-main-color font-semibold">{value.text}</p>
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
