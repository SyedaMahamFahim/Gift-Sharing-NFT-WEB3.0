import React,{ useContext } from "react";
import { motion } from "framer-motion";
import Card from "./Card/Card";
import "./hero-section.css";
import { TransactionContext } from "../../../context/TransactionContext";

const HeroSection = () => {
  const  {connectWallet,currentAccount}  = useContext(TransactionContext);

  return (
    <>
      <div className="ng-tns-c3-1 ng-star-inserted">
        <div
          className="container d-flex align-items-center justify-content-center ng-tns-c3-1"
          style={{ marginTop: "100px" }}
        >
          <div className="row d-flex  gap-5 gap-xl-0 flex-xl-row ng-tns-c3-1">
            <div className="col-xl-6 gap-3 d-flex flex-column justify-content-center align-items-xl-start ng-tns-c3-1">
              <motion.h1
                whileInView={{ y: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                className="fw-bold"
                style={{ fontSize: "60px" }}
              >
                Incididunt sint aliquip Collection
              </motion.h1>

              <motion.p
                className="fs-5"
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
              >
                {" "}
                Duis reprehenderit labore nulla mollit non consectetur quis aute
                eu amet sint.{" "}
              </motion.p>
              {
                !currentAccount && <motion.button
                className="herosection-btn"
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                onClick={connectWallet}
              >
                {" "}
                Connect Wallet{" "}
              </motion.button>
              }
              
              {/**/}
            </div>
            <motion.div
              className="col-xl-6 flex justify-content-center ng-tns-c3-1"
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <Card />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
