// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
    return client.fetch(
        groq`*[_type == "profile"][0]{
      _id,
      fullName,
      headline,
      profileImage {
          alt, 
          "image": asset->url,
          asset->{
              url,
              metadata{
                    dimensions{
                        width,
                        height
                    }
              }
        },
      },
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills,
      "projects": *[_type == "project" && homepage == true] | order(_createdAt asc){
        title,
        slug,
        year,
        bgColor,
        thumbnailImage,
        "imageURL": thumbnailImage.asset->url,
        "imageAlt": thumbnailImage.alt,
        "tags": tags[]->{
          _id,
          label
        },
      }
    }`
    );
}

export async function getProjects() {
    return client.fetch(
        groq`*[_type == "project"]{
            title,
            blurb,
            mainImage,
            year,
            slug,
            thumbnailImage,
            bgColor,
            "imageURL": thumbnailImage.asset->url,
            "imageAlt": thumbnailImage.alt,
            "tags": tags[]->{
              _id,
              label
            },
        }`
    )
}

export async function getProject(slug) {
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
        _createdAt,
        _updatedAt,
        publishedAt,
        title,
        blurb,
        mainImage,
        links,
        slug,
        year,
        client,
        deliverables,
        col1Title,
        col1Text,
        col2Title,
        col2Text,
        col3Title,
        col3Text,
        "companyName": job->companyName,
        "companyLogo": job->logo.asset->url,
        "imageURL": mainImage.asset->url,
        "imageAlt": mainImage.alt,
        "tags": tags[]->{
          _id,
          label
        },
        mainBody,
        "content": mainBody[]{
            _type,
            _type == "textBlock" => {
              title,
              content
            },
            _type == "singleImage" => {
              alt,
              "imageUrl": image.asset->url
            },
            _type == "imageGallery" => {
              images[]{
                "imageUrl": asset->url
              }
            }
          },
          "all": *[_type == "project"] | order(_createdAt asc){
            title,
            slug
          }
      }`,
{ slug }
    );
}

export async function getPosts() {
    return client.fetch(
        groq`*[_type == "blogPost"]{
        _createdAt,
        _updatedAt,
        publishedAt,
        title,
        blurb,
        mainImage,
        mainBody,
        "body": mainBody[]{
            _type,
            children,
            markDefs,
            style,
            _type == "quote" => {
                author,
                text
            },
            _type == "image" => {
                asset,
                "imageUrl": asset->url,
                "imageAlt": asset->alt
            },
            _type == "twoImagesSideBySide" => {
                leftImage,
                leftWidth,
                rightImage,
                "leftImageUrl": leftImage.asset->url,
                "leftImageAlt": leftImage.asset->alt,
                "rightImageUrl": rightImage.asset->url,
                "rightImageAlt": rightImage.asset->alt,
            },
            _type == "wrapTextAroundImage" => {
                content,
                image,
                position,
                width,
                caption,
                "imageUrl": image.asset->url,
                "imageAlt": image.asset->alt
            }
        },
        slug,
        author,
        "imageURL": mainImage.asset->url,
        "imageAlt": mainImage.alt,
        "tags": tags[]->{
          _id,
          label
        },
      }`
    );
}

export async function getPost(slug) {
    return client.fetch(
        groq`*[_type == "blogPost" && slug.current == $slug][0]{
    _createdAt,
    _updatedAt,
    publishedAt,
    title,
    blurb,
    mainImage,
    mainBody,
    "body": mainBody[]{
        _type,
        children,
        markDefs,
        style,
        _type == "quote" => {
            author,
            text
        },
        _type == "image" => {
            asset,
            "imageUrl": asset->url,
            "imageAlt": asset->alt
        },
        _type == "twoImagesSideBySide" => {
            leftImage,
            leftWidth,
            rightImage,
            "leftImageUrl": leftImage.asset->url,
            "leftImageAlt": leftImage.asset->alt,
            "rightImageUrl": rightImage.asset->url,
            "rightImageAlt": rightImage.asset->alt,
        },
        _type == "wrapTextAroundImage" => {
            content,
            image,
            position,
            width,
            caption,
            "imageUrl": image.asset->url,
            "imageAlt": image.asset->alt
        }
    },
    slug,
    author,
    "imageURL": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    "tags": tags[]->{
      _id,
      label
    },
    "all": *[_type == "blogPost"] | order(_createdAt asc){
        title,
        slug
    }
  }`,
{ slug }
    );
}
