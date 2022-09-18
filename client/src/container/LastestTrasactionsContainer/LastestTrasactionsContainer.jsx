import React, { useContext } from "react";
import { Table } from "../../components";
import { TransactionContext } from "../../context/TransactionContext";
import { DummyData } from "../../constants";
const LastestTrasactionsContainer = () => {
  const { transactions, currentAccount } =
    useContext(TransactionContext);


  const data=[...DummyData, ...transactions].reverse()
  return (
    <>
      <div
        className="container-sm px-4 px-xs-5 px-sm-0 d-flex align-items-center justify-content-center home__about"
        id="about"
      >
        <div className="home__about_div">
          <h5 className="home__about_div_h5"> Lastest Trasactions </h5>
          <h1 className="home__about_div_h1">
            {!currentAccount
              ? "Please Connect Your Wallet"
              : "Qui ex nostrud fugiat esse adipisicing aute."}
          </h1>
          {currentAccount && <Table  data={data}/>}
        </div>
      </div>
    </>
  );
};

export default LastestTrasactionsContainer;
