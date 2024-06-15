"use client";
import React from "react";
// import MuiPhoneNumber from 'material-ui-phone-number'
import PhoneInput from "react-phone-input-2";
import "./style.css";

const Input = (props: any) => {
  return (
    <div>
      <PhoneInput
        disabled={props.isDisabled}
        specialLabel={""}
        country={"mx"}
        inputStyle={{
          color: props.isDisabled ? "grey" : "black",
          backgroundColor: props.isDisabled ? "#f5f5f5" : "white",
          opacity: props.isDisabled ? 0.2 : 1,
          borderColor: props.error ? "red" : "grey",
          width: "100%",
          height: "53px",
          borderRadius: "10px",
        }}
        {...props}
      />
      {props.errorMessage && (
        <p className="text-red-600 text-xs mt-2">{props.errorMessage}</p>
      )}
    </div>
  );
};

const PhoneInputCustom = (props: any) => {
  console.log(props);
  return (
    <Input
      isDisabled={props.isDisabled}
      req={true}
      helperText={""}
      error={false}
      isSelect={false}
      errorMessage={props.errorMessage}
      {...props}
    />
  );
};

export default PhoneInputCustom;
