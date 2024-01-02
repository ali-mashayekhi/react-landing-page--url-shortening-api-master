import logo from "../assets/logo-footer.svg";
import instagramIcom from "../assets/icon-instagram.svg";
import printerestIcon from "../assets/icon-pinterest.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";

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
              <li className="text-base text-gray-custom">
                <a href="#">Link Shortening</a>
              </li>
              <li className="text-base text-gray-custom">
                <a href="#">Branded Links</a>
              </li>
              <li className="text-base text-gray-custom">
                <a href="#">Analytics </a>
              </li>
            </ul>
          </div>
          <div className="mb-9 text-center sm:mb-0 sm:text-left">
            <p className="mb-6 text-base font-bold text-white">Resources</p>
            <ul className="flex flex-col gap-2">
              <li className="text-base text-gray-custom">
                <a href="#">Blog</a>
              </li>
              <li className="text-base text-gray-custom">
                <a href="#">Developers</a>
              </li>
              <li className="text-base text-gray-custom">
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="mb-9 text-center sm:mb-0 sm:text-left">
            <p className="mb-6 text-base font-bold text-white">Company</p>
            <ul className="flex flex-col gap-2">
              <li className="text-base text-gray-custom">
                <a href="#">About</a>
              </li>
              <li className="text-base text-gray-custom">
                <a href="#">Our Team</a>
              </li>
              <li className="text-base text-gray-custom">
                <a href="#">Careers</a>
              </li>
              <li className="text-base text-gray-custom">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-6 sm:items-start sm:justify-end">
            <img src={facebookIcon} alt="twitter icon" />
            <img src={twitterIcon} alt="facebook icon" />
            <img src={printerestIcon} alt="printerest icon" />
            <img src={instagramIcom} alt="instagram icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
