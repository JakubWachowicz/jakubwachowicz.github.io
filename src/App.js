// App.js
import './App.css';
import 'animate.css';
import background from './assets/brutalist-8971819_1920.jpg';
import NavBar from './components/navigation_bar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="relative w-full h-screen">
        <img
          src={background}
          alt="Full-Screen Background"
          className="w-full h-full object-cover absolute inset-0"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className='text-white text-4xl md:text-6xl font-bold animate__animated animate__fadeInUp'>
            <h1 className="">
              Jakub Wachowicz
            </h1>
            <h2 className='text-xl '>.Net programmer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
