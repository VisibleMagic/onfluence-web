import { IntroBanner } from "./components/IntroBanner";
import { Header } from "./components/Header";
import { AboutUs } from "./components/AboutUs";
import { FeaturedWork } from "./components/FeaturedWork";
import { WhatWeDo } from "./components/WhatWeDo";
import { WhoWeWorkWith } from "./components/WhoWeWorkWith";
import { AsFeaturedIn } from "./components/AsFeaturedIn";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-background-light scroll-smooth">
      <Header />
      <IntroBanner />
      <AboutUs />
      <FeaturedWork />
      <WhatWeDo />
      <WhoWeWorkWith />
      <AsFeaturedIn />
      <Team />
      <Footer />
    </div>
  );
}
