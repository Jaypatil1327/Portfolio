import Nav from "../helper/nav/nav";
import About from "./about";
import Certifications from "./certifications";
import Contact_me from "./contact";
import HeroSection from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import ResumeSection from "./resume-section";
import Footer from "../helper/footer";

function Home() {
  return (
    <main className="relative min-h-screen flex flex-col w-full overflow-x-hidden bg-background text-foreground">
      <Nav />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <ResumeSection />
      <Contact_me />
      <Footer />
    </main>
  );
}

export default Home;
