const Navbar = () => {
  return (
    <nav className="fixed items-end top-0  w-full bg-black bg-opacity-70 text-white py-4 px-8 flex justify-end items-center z-20">
      <div className="items-end flex space-x-6">
        <a href="#home" className="hover:text-gray-400 transition duration-200">Home</a>
        <a href="#about" className="hover:text-gray-400 transition duration-200">About</a>
        <a href="#projects" className="hover:text-gray-400 transition duration-200">Projects</a>
        <a href="#contact" className="hover:text-gray-400 transition duration-200">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
