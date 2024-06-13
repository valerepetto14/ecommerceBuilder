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
        country={"th"}
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
      {props.touched && props.error && (
        <p style={{ color: "red" }}>{props.error}</p>
      )}
    </div>
  );
};

const PhoneInputCustom = (props: any) => {
  return (
    <Input
      isDisabled={props.isDisabled}
      req={true}
      helperText={""}
      error={false}
      isSelect={false}
      {...props.input}
      {...props.meta}
      {...props.custom}
    />
  );
};

export default PhoneInputCustom;
