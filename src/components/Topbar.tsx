import React from "react";
import { Link } from "react-router-dom";
import Account from "./Account";
import Column from "./General/Column";
import Flex from "./General/Flex";
import Logo from "./Logo";
import Search from "./Search";

const Topbar: React.FC = () => {
  return (
    <Flex
      title="topbar"
      className="fixed top-0 left-0 w-full z-20 shadow-theme items-center justify-center"
      style={{
        height: 90,
        backdropFilter: `blur(20px)`,
        background: `rgba(255,255,255,.5)`,
      }}
    >
      <div className="container">
        <Flex className="justify-between items-center">
          <Column>
            <Link to="/">
              <Logo />
            </Link>
          </Column>

          <Column className="w-1/3">
            <Search />
          </Column>

          <Column>
            <Account />
          </Column>
        </Flex>
      </div>
    </Flex>
  );
};

export default Topbar;
