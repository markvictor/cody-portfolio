
import { defineField } from "sanity";
import {BiNews} from "react-icons/bi";

export const blog = {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    icon: BiNews,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        }),
        defineField({
            name: "mainImage",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                }),
            ],
        }),
        {
            name: "mainBody",
            title: "Main Body",
            type: "array",
            of: [
                { type: "block" },
                { type: 'image'},
                { type: 'wrapTextAroundImage' },
                {
                    // Custom block for two images side-by-side
                    title: 'Two Images Side by Side',
                    name: 'twoImagesSideBySide',
                    type: 'object',
                    fields: [
                        {
                            title: 'Left Image',
                            name: 'leftImage',
                            type: 'image',
                            options: { hotspot: true },
                        },
                        {
                            title: 'Right Image',
                            name: 'rightImage',
                            type: 'image',
                            options: { hotspot: true },
                        },
                        {
                            title: 'Left Image Width (%)',
                            name: 'leftWidth',
                            type: 'number',
                            description: 'Width of left image in percent (0-100)',
                            validation: (Rule) => Rule.min(10).max(90),
                            initialValue: 50,
                        },
                    ],
                    preview: {
                        select: {
                            leftImage: 'leftImage',
                            rightImage: 'rightImage',
                            leftWidth: 'leftWidth',
                        },
                        prepare({ leftImage, rightImage, leftWidth }) {
                            return {
                                title: `Two Images Side by Side (${leftWidth} / ${100 - leftWidth}%)`,
                                media: leftImage || rightImage,
                            };
                        },
                    },
                },
                {
                    title: 'Quote',
                    name: 'quote',
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            type: 'text',
                            title: 'Quote Text',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'author',
                            type: 'string',
                            title: 'Author',
                        },
                    ],
                    preview: {
                        select: {
                            title: 'text',
                            subtitle: 'author',
                        },
                        prepare({ title, subtitle }) {
                            return {
                                title: `"${title?.slice(0, 50)}${title?.length > 50 ? '...' : ''}"`,
                                subtitle: subtitle ? `— ${subtitle}` : '',
                            };
                        },
                    },
                }
            ],
        },
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{type: "reference", to: [{type: "tag"}]}],
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "string",
        }),
    ],
};
