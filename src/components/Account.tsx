import React, { useEffect, useState } from "react";

import api from "../api/_api";
import Flex from "./General/Flex";

const Account = () => {
  const [account, setAccount] = useState<any>(null);

  const avatarUrl: string = `https://images.unsplash.com/photo-1478427094460-4c8d412903e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2852&q=80`;

  useEffect(() => {
    const getAccount = async () => {
      const result = await api.account.get();

      setAccount(result["_embedded"]);
    };

    getAccount();
  }, []);

  if (account === null) {
    return <React.Fragment>laden...</React.Fragment>;
  }

  return (
    <Flex className="justify-end items-center space-x-4">
      <div
        className="rounded-full object-cover object-center bg-light"
        style={{ width: 50, height: 50 }}
      ></div>
      {/* <img
        src={avatarUrl}
        className="rounded-full object-cover object-center"
        style={{ width: 50, height: 50 }}
      ></img> */}
      <div>
        <div className="font-bold">{account.account[0].name}</div>
        <div className="opacity-60">Owner</div>
      </div>
    </Flex>
  );
};

export default Account;
