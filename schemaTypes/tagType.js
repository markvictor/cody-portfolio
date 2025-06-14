import { defineField } from "sanity";
import { BiPurchaseTagAlt } from "react-icons/bi";
import profile from "@/schemaTypes/profile";

const tag = {
    name: "tag",
    title: "Tag",
    type: "document",
    icon: BiPurchaseTagAlt,
    fields: [
        defineField({
            name: "label",
            type: "string",
        }),
    ],
    preview: {
        select: {
            title: "label",
        },
    },
};

export default tag;
