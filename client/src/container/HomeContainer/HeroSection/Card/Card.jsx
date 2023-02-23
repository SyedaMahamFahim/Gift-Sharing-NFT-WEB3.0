import React, { useContext } from "react";
import { FormInput, Button } from "../../../../components";
import { InputsDetails } from "../../../../constants";
import { TransactionContext } from "../../../../context/TransactionContext";

const Card = () => {
  const {
    formData,
    handleChange,
    sendTransaction,
    isLoading,
    connectWallet,
    currentAccount,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    if (addressTo && amount && keyword && message) {
      console.log(formData);
      sendTransaction();
    } else {
      alert("Please fill all the fields");
    }

    // EmptyingAllInputs();
    e.preventDefault();
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">
            Send Random Text To Your Crypto Partner
          </h5>
          <hr />
          <form onSubmit={(e) => handleSubmit(e)}>
            {InputsDetails.map((val, index) => {
              return (
                <FormInput
                  key={index}
                  inputLabel={val.label}
                  inputType={val.type}
                  inputPlaceholder={val.placeholder}
                  inputId={val.id}
                  inputName={val.name}
                  handleChange={handleChange}
                />
              );
            })}
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : currentAccount ? (
              <Button text={"Send Now"} isSubmit={true} />
            ) : (
              <button
                style={{
                  padding: "10px 20px",
                  border: "none",
                  backgroundColor: "rgb(45, 115, 255)",
                  color: "white",
                  borderRadius: "14px",
                  fontWeight: "bold",
                }}
                type="button"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Card;
