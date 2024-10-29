import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf, faPhone } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200 p-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Want to get in touch? Feel free to reach out to me through my email or call me.


          <div className='flex flex-col md:flex-row md:justify-center items-center space-x-4 '>
            <br></br> <a className='transition-transform transform hover:scale-105 bg-black rounded-full font-bold mb-4 text-white p-3 lg:m-3'>  <FontAwesomeIcon icon={faEnvelope} size="lg" /> wachowiczjakub@proton.me</a>
            <a className='transition-transform transform hover:scale-105 bg-black rounded-full font-bold mb-4 text-white p-3 lg:m-3'><FontAwesomeIcon icon={faPhone} size="lg" /> 725 128 559</a>
          </div>

        </p>
      </div>
    </div>
  );
};

export default Contact;
