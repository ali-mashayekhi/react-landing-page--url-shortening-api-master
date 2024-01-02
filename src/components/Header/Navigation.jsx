function Navigation() {
  return (
    <nav className="hidden justify-between sm:flex sm:flex-grow sm:items-center sm:text-sm sm:font-bold">
      <ul className="flex gap-6 text-grayish-violet-custom">
        <li className="transition-all duration-300 hover:text-black">
          <a href="#">Features</a>
        </li>
        <li className="transition-all duration-300 hover:text-black">
          <a href="#">Pricing</a>
        </li>
        <li className="transition-all duration-300 hover:text-black">
          <a href="#">Resources</a>
        </li>
      </ul>
      <ul className="flex items-center gap-8">
        <li className="text-grayish-violet-custom transition-all duration-300 hover:text-black">
          <a href="#">Login</a>
        </li>
        <li>
          <a
            href="#"
            className=" hover:bg-cyan-custom-tint flex h-10 w-[6.5rem] items-center justify-center rounded-full bg-cyan-custom text-white transition-all duration-300"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
