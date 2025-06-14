import { defineField } from "sanity";
import { BiImage } from "react-icons/bi";
import tag from './tagType'
import {blockContent} from "@/schemaTypes/blockContent";

const project = {
    name: "project",
    title: "Project",
    type: "document",
    icon: BiImage,
    fieldsets: [
        // {
        //     name: "jsonLd",
        //     title: "JSON-LD Settings",
        //     options: {collapsible: true, collapsed: false},
        // },
        {
            name: "overview",
            title: "Overview Section",
            options: {collapsible: true, collapsed: false},
        },
    ],
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "blurb",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
            },
        }),
        defineField({
            title: 'Feature on Homepage?',
            name: 'homepage',
            type: 'boolean',
        }),
        defineField({
            title: 'Card BG Colour',
            name: "bgColor",
            type: "string",
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{type: "reference", to: [{type: "tag"}]}],
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
        defineField({
            name: "thumbnailImage",
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
        defineField({
            name: "year",
            title: "Year",
            type: "string",
        }),
        defineField({
            name: "client",
            title: "Client",
            type: "string",
        }),
        defineField({
            name: "deliverables",
            title: "Deliverables",
            type: "string",
        }),
        defineField({
            name: "col1Title",
            title: "Col1 Title",
            type: "string",
            fieldset: "overview",
        }),
        defineField({
            name: "col1Text",
            title: "Col1 Text",
            type: "text",
            fieldset: "overview",
        }),
        defineField({
            name: "col2Title",
            title: "Col2 Title",
            type: "string",
            fieldset: "overview",
        }),
        defineField({
            name: "col2Text",
            title: "Col2 Text",
            type: "text",
            fieldset: "overview",
        }),
        defineField({
            name: "col3Title",
            title: "Col3 Title",
            type: "string",
            fieldset: "overview",
        }),
        defineField({
            name: "col3Text",
            title: "Col3 Text",
            type: "text",
            fieldset: "overview",
        }),
        // defineField({
        //     name: "body",
        //     title: "Body",
        //     type: "array",
        //     of: [ { type: 'block'}]
        // }),
        defineField({
            name: 'mainBody',
            title: 'Main Body',
            type: 'contentSection',})
        // // JSON-LD
        // defineField({
        //     name: "jsonLdType",
        //     title: "JSON-LD Type",
        //     type: "array",
        //     of: [{ type: "string" }],
        //     validation: (Rule) => Rule.required().min(1),
        //     options: {
        //         list: [
        //             { title: "Software Application", value: "SoftwareApplication" },
        //             { title: "Product", value: "Product" },
        //             { title: "Software Source Code", value: "SoftwareSourceCode" },
        //             { title: "Web Application", value: "WebApplication" },
        //             { title: "Creative Work", value: "CreativeWork" },
        //         ],
        //         layout: "list",
        //     },
        //     fieldset: "jsonLd",
        // }),
    ],
    preview: {
        select: {
            title: "title",
            media: "mainImage",
        },
    },
    orderings: [
        {
            title: "Publish Date (Newest First)",
            name: "publishedAtDesc",
            by: [{field: "publishedAt", direction: "desc"}],
        },
        {
            title: "Publish Date (Oldest First)",
            name: "publishedAtAsc",
            by: [{field: "publishedAt", direction: "asc"}],
        },
    ],
};

export default project;
