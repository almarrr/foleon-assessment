import Flex from "../General/Flex";

import Logo from "./../Logo";

const Footer = () => {
  return (
    <section className="shadow-theme bg-white py-24">
      <div className="container">
        <Flex className="justify-between items-center">
          <div>
            <div className="opacity-50 font-bold uppercase text-size-14 pb-4">
              Powered by
            </div>
            <a href="https://foleon.com" rel="noreferrer" target="_blank">
              <Logo />
            </a>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            className="block hover:underline"
            href="https://acc.almarrr.nl"
          >
            <span className="font-bold">Developed by Almar Groenewald</span>
          </a>
        </Flex>
      </div>
    </section>
  );
};

export default Footer;
