import Navbar from './navigation_bar';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Layout;
