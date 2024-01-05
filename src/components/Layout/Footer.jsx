import logo from "../../assets/logo-footer.svg";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="bg-very-dark-violet-custom py-[3.125rem] sm:py-[4.3125rem]">
      <div className="mx-auto flex max-w-[72.375rem] flex-col items-center sm:grid sm:grid-cols-9 sm:items-start  sm:px-6">
        <a href="#" className="mb-[3.125rem] sm:col-span-3">
          <img
            src={logo}
            alt="Shortly Logo"
            className="fill-white stroke-white text-white"
          />
        </a>
        <div className="sm:col-span-6 sm:grid sm:grid-cols-4 sm:gap-[2.5rem]">
          <div className="mb-9 text-center sm:mb-0 sm:text-left">
            <p className="mb-6 text-base font-bold text-white">Features</p>
            <ul className="flex flex-col gap-2">
              <li className="text-base text-gray-custom transition-all duration-300 hover:text-cyan-custom">
                <a href="#">Link Shortening</a>
              </li>
              <li className="text-base text-gray-custom transition-all duration-300 hover:text-cyan-custom">
                <a href="#">Branded Links</a>
              </li>
              <li className="text-base text-gray-custom transition-all duration-300 hover:text-cyan-custom">
                <a href="#">Analytics </a>
              </li>
            </ul>
          </div>
          <div className="mb-9 text-center sm:mb-0 sm:text-left">
            <p className="mb-6 text-base font-bold text-white">Resources</p>
            <ul className="flex flex-col gap-2">
              <li className="text-base text-gray-custom transition-all duration-300 hover:text-cyan-custom">
                <a href="#">Blog</a>
              </li>
              <li className="text-base text-gray-custom transition-all duration-300 hover:text-cyan-custom">
                <a href="#">Developers</a>
              </li>
              <li className="text-base text-gray-custom transition-all duration-300 hover:text-cyan-custom">
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="mb-9 text-center sm:mb-0 sm:text-left">
            <p className="mb-6 text-base font-bold text-white">Company</p>
            <ul className="flex flex-col gap-2">
              <li className="text-base text-gray-custom transition-all duration-300 hover:text-cyan-custom">
                <a href="#">About</a>
              </li>
              <li className="text-base text-gray-custom transition-all duration-300 hover:text-cyan-custom">
                <a href="#">Our Team</a>
              </li>
              <li className="text-base text-gray-custom transition-all duration-300 hover:text-cyan-custom">
                <a href="#">Careers</a>
              </li>
              <li className="text-base text-gray-custom transition-all duration-300 hover:text-cyan-custom">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
