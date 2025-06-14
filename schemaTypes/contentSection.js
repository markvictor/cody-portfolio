export const contentSection = {
    title: 'Content Section',
    name: 'contentSection',
    type: 'array',
    of: [
        {
            type: 'object',
            title: 'Text Block',
            name: 'textBlock',
            fields: [
                {
                    name: 'content',
                    title: 'Content',
                    type: 'blockContent',
                },
            ],
            preview: {
                select: {
                    title: 'content',
                },
                prepare() {
                    return {
                        title: 'Text Block',
                    };
                },
            },
        },
        {
            type: 'object',
            title: 'Single Image',
            name: 'singleImage',
            fields: [
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                },
            ],
            preview: {
                select: {
                    title: 'alt',
                    media: 'image',
                },
                prepare({ title, media }) {
                    return {
                        title: title || 'Single Image',
                        media,
                    };
                },
            },
        },
        {
            type: 'object',
            title: 'Image Gallery',
            name: 'imageGallery',
            fields: [
                {
                    name: 'images',
                    title: 'Images',
                    type: 'array',
                    of: [{ type: 'image', options: { hotspot: true } }],
                },
            ],
            preview: {
                select: {
                    images: 'images',
                },
                prepare({ images }) {
                    return {
                        title: 'Image Gallery',
                        subtitle: `${images?.length || 0} image(s)`,
                        media: images?.[0],
                    };
                },
            },
        },
    ],
};
