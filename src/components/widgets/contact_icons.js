
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import cv from '../..\\assets\\cv.pdf'


function ContactIcon() {
    return (
        <div className='flex gap-4 pt-5 align-bottom '>

            <div class="relative">
                <div class="absolute -inset-2">
                    <div
                        class="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div
                    class="gap-5 relative z-10 inline-flex items-center justify-center w-full px-8 py-2 text-lg font-bold text-white  border-2  sm:w-auto rounded-xl font-pj "
                >
                    <button id="cv" className="bg-white sticky duration-500 border-2 border-black-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-yellow-900 hover:text-white text-yellow-900 ">
                        <a target='_blanc' href={cv}><button>CV</button></a>
                    </button>
                    <a href='#contact'><button href="" id="mail" className="bg-white sticky duration-500 border-2 border-black-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-purple-600 hover:text-white text-purple-600 ">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </button></a>
                    
                    <a target='_black' href='https://github.com/JakubWachowicz'> 
                    <button id="github" className="bg-white text-black sticky duration-500 border-2 border-black-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-black hover:text-white  ">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </button></a>

                   <a target='_black' href='https://www.youtube.com/@BloodMeditations'> <button id="github" className="bg-white text-red-600 sticky duration-500 border-2 border-black-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-red-600 hover:text-white ">
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                    </button></a>

                </div>
            </div>

        </div>

    )
}
export default ContactIcon