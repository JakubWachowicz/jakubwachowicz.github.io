const About = () => {
  return (
    <div id="about" className="w-full h-screen flex items-center justify-center bg-gray-100 p-8 pt-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg">
        I am a passionate developer from Słupsk, Poland, specializing in C#. In addition to coding, I express my creativity through music composition and artistic endeavors.
        Check out my CV to see more about what I do! <br></br> <button className='transition-transform transform hover:scale-105 bg-black rounded-full font-bold mb-4 text-white p-3 m-3'>My Curriculum Vitae</button>
        </p>
        
      </div>
    </div>
  );
};

export default About;
