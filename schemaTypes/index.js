import profile from "./profile";
import project from "./projectType";
import tag from "./tagType";
import {blog} from "./blogType";
import {blockContent} from "@/schemaTypes/blockContent";
import {contentSection} from "@/schemaTypes/contentSection";
import {wrapTextAroundImage} from "@/schemaTypes/wrapTextAroundImage";

export const schemaTypes = [profile,project, tag, blockContent, contentSection, blog, wrapTextAroundImage];
