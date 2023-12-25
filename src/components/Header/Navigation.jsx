function Navigation() {
  return (
    <nav className="hidden justify-between sm:flex sm:flex-grow sm:items-center sm:text-sm sm:font-bold">
      <ul className="flex gap-6 text-grayish-violet-custom">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
      <ul className="flex items-center gap-8">
        <li className="text-grayish-violet-custom">
          <a href="#">Login</a>
        </li>
        <li>
          <a
            href="#"
            className="flex h-10 w-[6.5rem] items-center justify-center rounded-full bg-cyan-custom text-white"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
