import { defineField, defineType } from "sanity";

export const blockContent = {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
        {
            type: 'block',
        },
        {
            type: 'image',
            options: { hotspot: true },
        },
    ],
};
