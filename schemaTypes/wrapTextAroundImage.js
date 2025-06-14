

export const wrapTextAroundImage = {
    name: 'wrapTextAroundImage',
    title: 'Wrap Text Around Image',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'Important for accessibility and SEO',
                },
                {
                    name: 'caption',
                    title: 'Caption',
                    type: 'string',
                    description: 'Optional caption to display below the image',
                },
            ],
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                ],
                layout: 'radio',
            },
            initialValue: 'left',
        },
        {
            name: 'width',
            title: 'Width (%)',
            type: 'number',
            description: 'Width of the image as percentage of container',
            validation: (Rule) => Rule.min(10).max(60),
            initialValue: 30,
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Text that will wrap around the image',
        },
    ],
    preview: {
        select: {
            image: 'image',
            position: 'position',
            width: 'width',
        },
        prepare({ image, position, width }) {
            return {
                title: 'Text with Wrapped Image',
                subtitle: `Position: ${position || 'left'}, Width: ${width || 30}%`,
                media: image,
            };
        },
    },
};
