function Menu(props) {
  return (
    <div className="absolute left-0 top-24 w-full px-6 text-lg shadow-sm sm:hidden">
      <div className="rounded-lg bg-dark-violet-custom px-[1.375rem] py-[2.375rem]">
        <ul className="flex flex-col items-center gap-[1.875rem] border-b border-b-grayish-violet-custom pb-8 text-white">
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
        <ul className="flex flex-col items-center gap-[1.3125rem]">
          <li className="pt-[1.875rem] text-white">
            <a href="#">Login</a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="flex h-[3.125rem] items-center justify-center rounded-full bg-cyan-custom text-white"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
