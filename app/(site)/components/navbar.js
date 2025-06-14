"use client";
import React,{useState} from "react";
import { slide as Menu } from 'react-burger-menu'
import {usePathname} from "next/navigation";
import * as path from "path";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    const pathname = usePathname(),
        hasPortfolio = pathname.startsWith('/portfolio/'),
        navClasses = "navbar border-b-1 "+((hasPortfolio)? "outline-solid text-white outline-1": "border-gray-300");

    console.log(pathname);


    return (
        <div className={navClasses}>
            <div className="sm:hidden">
                <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
                    <div>
                        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 text-black">
                            <a id="portfolio-mobile" className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 menu-item"
                               href="/portfolio">Portfolio</a>
                            <a id="blog-mobile" className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 menu-item"
                               href="/blog">Blog</a>
                            <a id="about-mobile" className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 menu-item"
                               href="/#about">About</a>
                            <a id="resume-mobile" className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 menu-item"
                               href="/resume.pdf" target="_blank">Resume</a>
                            <a id="contact-mobile" className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 menu-item"
                               href="mailto:hello@codygall.com">Contact</a>
                            <a id="linkedin-mobile" className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 menu-item"
                               href="https://www.linkedin.com/in/codygall/" target="_blank">
                                <Image src="/linkedin.svg" alt="Logo" width={25} height={25} />
                            </a>
                        </div>
                    </div>
                </Menu>
                {/*<button type="button"*/}
                {/*        className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"*/}
                {/*        id="mobile-menu-collapse"*/}
                {/*        aria-controls="mobile-menu" aria-expanded="false"*/}
                {/*        onClick={() => setOpen(!open)}>*/}
                {/*    <svg className="mobile-menu-collapse-open:hidden shrink-0 size-4"*/}
                {/*         xmlns="http://www.w3.org/2000/svg"*/}
                {/*         width="24"*/}
                {/*         height="24"*/}
                {/*         viewBox="0 0 24 24"*/}
                {/*         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
                {/*         strokeLinejoin="round">*/}
                {/*        <line x1="3" x2="21" y1="6" y2="6"/>*/}
                {/*        <line x1="3" x2="21" y1="12" y2="12"/>*/}
                {/*        <line x1="3" x2="21" y1="18" y2="18"/>*/}
                {/*    </svg>*/}
                {/*    <svg className="mobile-menu-collapse-open:block hidden shrink-0 size-4"*/}
                {/*         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
                {/*         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">*/}
                {/*        <path d="M18 6 6 18"/>*/}
                {/*        <path d="m6 6 12 12"/>*/}
                {/*    </svg>*/}
                {/*    <span className="sr-only">Toggle navigation</span>*/}
                {/*</button>*/}
                <span className="sr-only">Toggle menu</span>
            </div>
            <nav
                className="w-full mx-auto p-6 sm:flex sm:items-center sm:justify-between max-w-7xl">
                <div className="flex items-center justify-between">
                    <Link className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80"
                          href={'/'} aria-label="Home">
                        Cody Gall
                    </Link>
                </div>
                <div className="w-full hidden sm:block md:w-auto">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <a className="font-medium text-blue-500 focus:outline-hidden" href="/portfolio" aria-current="page">Portfolio</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                           href="/blog" >Blog</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                           href="/#about">About</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                           href="/resume.pdf" target="_blank">Resume</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                           href="mailto:hello@codygall.com">Contact</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                           href="https://www.linkedin.com/in/codygall/" target="_blank">
                            <Image src="/linkedin.svg" alt="Logo" width={25} height={25} />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
