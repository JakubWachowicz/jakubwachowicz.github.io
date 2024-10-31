import background from '../assets/brutalist-8971819_1920.jpg';
import ContactIcon from './widgets/contact_icons';
import './../App.css'
import 'animate.css';
const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={background}
        alt="Home Background"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">

        <div className='text-white text-4xl font-bold animate__animated animate__fadeInUp'>
          <h1 className="md:text-6xl font-myname ">
            Jakub Wachowcz
          </h1>
          <span className='text-2xl'>.Net developer </span>
          <br></br>

          <ContactIcon />
        </div>

      </div>
    </div>
  );
};

export default Home;
