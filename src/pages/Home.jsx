import { useEffect, useState } from 'react';
import {
  About,
  Hero,
  Projects,
  Services,
  Skills,
  TabProject,
} from '../components';
const Home = () => {
  // useState(false)
  const [project, setProject] = useState(null);

  return (
    <main className="page">
      <Hero />
      <Services />
      <Skills />
      <Projects setProject={setProject} />
      <About />
      {project && <TabProject {...project} setProject={setProject} />}
    </main>
  );
};
export default Home;
