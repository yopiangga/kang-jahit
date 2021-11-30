import React from "react";
import { LangkahSection } from "./components/beranda/LangkahSection";
import { MainSection } from "./components/beranda/MainSection";
import { Navigation } from "./components/shareable/Navigation";
import { SambutanSection } from "./components/beranda/SambutanSection";
import { FiturSection } from "./components/beranda/FiturSection";
import { UsersSection } from "./components/beranda/UsersSection";
import { NewsSection } from "./components/beranda/NewsSection";
import { Subscribe } from "./components/shareable/Subscribe";
import { Footer } from "./components/shareable/Footer";
import { LanggananSection } from "./components/beranda/LanggananSection";
import { BantuanSection } from "./components/beranda/BantuanSection";
import { FixedContact } from "./components/shareable/FixedContact";

export default function BerandaLanding(){
    return(
        <div className="text-indigo-50 bg-dark">
            <Navigation />
            <FixedContact />
            <MainSection />
            <LangkahSection />
            <SambutanSection />
            <FiturSection />
            <UsersSection />
            <LanggananSection />
            <NewsSection />
            <Subscribe />
            <BantuanSection />
            <Footer />
        </div>
    )
}