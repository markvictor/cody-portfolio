import Image from "next/image";
import styles from "../page.module.css";
import {PortfolioItem} from "@/app/(site)/components/portfolio-item";
import { client } from "@/sanity/sanity.client";
import {getProfile, PROFILE_QUERY} from "@/sanity/sanity.query";
import Link from "next/link";
import React from "react";


export default async function Home() {
    const profile = await getProfile();

    console.log(profile);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <header className="grid grid-cols-1 gap-12 md:grid-cols-3 place-items-center py-12">
              <div className="md:justify-self-end">
                  <video className="dark-video" width={350} height={350} autoPlay loop muted playsInline>
                      <source src="videos/cat_top_black.mp4" type="video/mp4" />
                  </video>
                  <video className="light-video" width={350} height={350} autoPlay loop muted playsInline>
                      <source src="videos/cat_top_white.mp4" type="video/mp4" />
                  </video>
              </div>
              <div className="md:col-span-2 md:justify-self-start">
                  <h1 className="mb-4">A full-deck designer - <br className="hidden 2xl:inline" />built for brands in motion</h1>
                  <h4>Hello! — I&apos;m Cody, an agile brand + motion <br className="hidden 2xl:inline" />designer hopping across digital and physical worlds.</h4>
              </div>
          </header>
          <section className="border-t-1 border-gray-300 py-12">
              <h2 className="text-center mb-12">Selected Works</h2>
              {profile.projects?.map((proj, i) =>
                <PortfolioItem key={i} project={proj} />
              )}
              <Link href="/portfolio" className="bg-main-color duration-700 ease-in-out hover:opacity-80 text-default-color font-bold py-4 px-4 rounded block text-center">View all projects</Link>
          </section>
          <section id="about" className="grid grid-cols-1 gap-12 md:grid-cols-2 border-t-1 border-gray-300 py-12 place-items-center">
              <div>
                  <Image width={profile.profileImage.asset.metadata.dimensions.width}
                         height={profile.profileImage.asset.metadata.dimensions.height}
                         // sizes="100vw"
                         className="w-full h-auto"
                         src={profile.profileImage.image}  alt="Hello! I'm Cody"/>
              </div>
              <div>
                  <div className="bg-main-color font-bold text-default-color py-1 px-4 rounded-full inline-block mb-12">About</div>
                  <h2 className="mb-12">Hello! I&apos;m Cody</h2>
                  <h4 className="mb-12">a brand + motion designer located in San Francisco, CA</h4>
                  <div className="mb-12">
                      <p>I bring over 10 years of experience across startups, agencies, and in-house roles, specializing in building design systems, creating meaningful motion graphics, and crafting impactful brand identities for B2B and B2C clients.</p>
                      <p><br /></p>
                      <p>As a brand designer, I’ve managed campaigns from concept to execution across print and digital platforms, delivering creative solutions that resonate with audiences and align with strategic goals. My work emphasizes cohesive storytelling and collaboration.</p>
                  </div>
                  <a href="/resume.pdf" target="_blank" className="bg-main-color duration-700 ease-in-out hover:opacity-80 text-default-color font-bold py-4 px-6 rounded">View my resume</a>
              </div>
          </section>
          <section className="grid grid-cols-1 gap-12 md:grid-cols-2 border-t-1 border-gray-300 py-12">
              <h3>What I do</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                      <h6 className="pb-4">
                          <Image className="inline-block mr-1" src="icons/icon_spade.svg" alt="Logo" width={14} height={14} />
                          Graphic Design
                      </h6>
                      <ul>
                          <li>Branding & Visual Identity</li>
                          <li>Print & Editorial</li>
                          <li>Social Media Design</li>
                          <li>Digital Media Marketing</li>
                      </ul>
                  </div>
                  <div>
                      <h6 className="pb-4">
                          <Image className="inline-block mr-1" src="icons/icon_diamond.svg" alt="Logo" width={14} height={14} />
                          Motion design
                      </h6>
                      <ul>
                          <li>Branding & Visual Identity</li>
                          <li>Print & Editorial</li>
                          <li>Social Media Design</li>
                          <li>Digital Media Marketing</li>
                      </ul>
                  </div>
                  <div>
                      <h6 className="pb-4">
                          <Image className="inline-block mr-1" src="icons/icon_heart.svg" alt="Logo" width={14} height={14} />
                          Web design
                      </h6>
                      <ul>
                          <li>Branding & Visual Identity</li>
                          <li>Print & Editorial</li>
                          <li>Social Media Design</li>
                          <li>Digital Media Marketing</li>
                      </ul>
                  </div>
                  <div>
                      <h6 className="pb-4">
                          <Image className="inline-block mr-1" src="icons/icon_club.svg" alt="Logo" width={14} height={14} />
                          Software + tech
                      </h6>
                      <ul>
                          <li>Branding & Visual Identity</li>
                          <li>Print & Editorial</li>
                          <li>Social Media Design</li>
                          <li>Digital Media Marketing</li>
                      </ul>
                  </div>
              </div>
          </section>
          <section className="grid grid-cols-1 gap-12 md:grid-cols-2 border-t-1 border-gray-300 py-12">
              <h3>Experiences</h3>
              <div>
                  <div className="exerience border-b-1 border-gray-300 grid grid-cols-1 gap-4 md:grid-cols-2 py-4">
                      <div className="left">
                          Freelance Graphic Designer
                      </div>
                      <div className="text-right">
                          2023 - Present
                      </div>
                  </div>
                  <div className="exerience border-b-1 border-gray-300 grid grid-cols-1 gap-4 md:grid-cols-2 py-4">
                      <div className="left">
                          Brand Designer @ Boost Mobile
                      </div>
                      <div className="text-right">
                          2020 - 2023
                      </div>
                  </div>
                  <div className="exerience border-b-1 border-gray-300 grid grid-cols-1 gap-4 md:grid-cols-2 py-4">
                      <div className="left">
                          Graphic Designer @ Strategy Marketing
                      </div>
                      <div className="text-right">
                          2018 - 2020
                      </div>
                  </div>
                  <div className="exerience border-b-1 border-gray-300 grid grid-cols-1 gap-4 md:grid-cols-2 py-4">
                      <div className="left">
                          Graphic Artist @ Whole Foods
                      </div>
                      <div className="text-right">
                          2016 - 2018
                      </div>
                  </div>
              </div>
          </section>
      </main>
    </div>
  );
}
