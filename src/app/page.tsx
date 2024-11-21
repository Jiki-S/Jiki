'use client';

import React from "react";
import Header from "@/app/components/header";
import Spline from "@splinetool/react-spline"
import Section from "@/app/components/section";

export default function Home() {
    return (
        <main>
            <Header/>
            <div className={`w-[70vw] text-[40px] leading-none text-gray-600 px-8 pt-[50px]`}>
                explore our saas plataform for the best
            </div>
            <div className={`w-[80vw] text-[80px] leading-none text-black px-8`}>
                ai services. <br/>
            </div>
            <div className={`h-[40vh]`}>
                <Spline
                    scene="https://prod.spline.design/bX-PLSrjPNQnzP5j/scene.splinecode"
                />
            </div>
            <Section/>
        </main>
    );
}
