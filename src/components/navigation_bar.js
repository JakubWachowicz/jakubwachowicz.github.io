const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white py-4 px-8 flex justify-between items-center z-20">
      <div className="text-xl font-bold">Jakub Wachowicz</div>
      <div className="flex space-x-6">
        <a href="#home" className="hover:text-gray-400 transition duration-200">Home</a>
        <a href="#about" className="hover:text-gray-400 transition duration-200">About</a>
        <a href="#projects" className="hover:text-gray-400 transition duration-200">Projects</a>
        <a href="#contact" className="hover:text-gray-400 transition duration-200">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
