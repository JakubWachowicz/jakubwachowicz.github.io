import bloom from '../assets/bloom.png';
import socialapp from '../assets/reactivities.png';
import challenger from '../assets/challenger.png';
import mapmaker from '../assets/mapmaker.png';
import stegonography from '../assets/LSB+key.png';
import rest from '../assets/rest.png'

const projects = [
  {
    id: 1,
    title: 'React and .Net social app',
    description: 'A social application designed to facilitate seamless social interactions and enhance connectivity among users.',
    imageUrl: socialapp,
    demoUrl: '#',
    codeUrl: 'https://github.com/JakubWachowicz/reactAndDotNet',
  },
  {
    id: 2,
    title: 'Metal health app for students',
    description: 'A mental health application developed using Flutter, enabling students to connect and interact with school psychologists for support and guidance',
    imageUrl: bloom,
    demoUrl: '#',
    codeUrl: 'https://github.com/JakubWachowicz/psycholog',
  },
  {
    id: 3,
    title: 'Challenger',
    description: 'A social media application designed for friendly competition, allowing users to engage in various challenges with their friends.',
    imageUrl: challenger,
    demoUrl: '#',
    codeUrl: 'https://github.com/JakubWachowicz/challenger',
  },
  {
    id: 4,
    title: 'Map maker',
    description: 'An application designed for creating interactive image maps tailored for promotional leaflets',
    imageUrl: mapmaker,
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 5,
    title: 'Lsb with key stegonography',
    description: 'App for encyption images in images developed in python',
    imageUrl: stegonography,
    demoUrl: '#',
    codeUrl: 'https://github.com/JakubWachowicz/LsbWithKey',
  },
  {
    id: 6,
    title: 'Restaurant API',
    description: 'Rest api for restaurants. Developed in ASP.Net',
    imageUrl: rest,
    demoUrl: '#',
    codeUrl: 'https://github.com/JakubWachowicz/restaurantAPI',
  },
];

const Projects = () => {
  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex justify-between mt-4">
                <a href={project.codeUrl} target="_blanc" className="text-purple-600 hover:text-purple-800">
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
