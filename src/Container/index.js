import React, { useState } from "react";
import InputField from "../Components/InputField";
import ContainerStyles from "./styled";
import Converter from "../LotinKiril";
import { CgArrowsExchangeAlt } from "react-icons/cg";
const transliterator = new Converter();
const Container = () => {
  const [uz, setUZ] = useState("");
  const [uzK, setUZK] = useState("");
  const [bool, setBool] = useState(true);
  return (
    <ContainerStyles>
      <h2 className="mb-3">{bool ? "Lotin - Кирил" : "Кирил - Lotin"}</h2>
      <div className="card shadow w-75">
        <div className="card-header text-center">
          <button
            className="btn btn-outline-info fw-bold"
            onClick={() => setBool(!bool)}
          >
            <CgArrowsExchangeAlt />
          </button>
        </div>
        <div className="card-content w-100 container">
          {bool ? (
            <div className="row pb-4">
              {" "}
              <div className="col-md-6 col-sm-12">
                <InputField
                  input={uz}
                  changeCallback={(e) => {
                    setUZ(e.target.value);
                    setUZK(transliterator.toCyrillic(e.target.value));
                  }}
                  hint={"Lotin matnini kiriting"}
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <InputField
                  input={uzK}
                  changeCallback={(e) => {
                    setUZK(e.target.value);
                    setUZ(transliterator.toLatin(e.target.value));
                  }}
                  hint={"Кирил матнини киритинг"}
                />
              </div>{" "}
            </div>
          ) : (
            <div className="row pb-4">
              <div className="col-md-6 col-sm-12">
                <InputField
                  input={uzK}
                  changeCallback={(e) => {
                    setUZK(e.target.value);
                    setUZ(transliterator.toLatin(e.target.value));
                  }}
                  hint={"Кирил матнини киритинг"}
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <InputField
                  input={uz}
                  changeCallback={(e) => {
                    setUZ(e.target.value);
                    setUZK(transliterator.toCyrillic(e.target.value));
                  }}
                  hint={"Lotin matnini kiriting"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </ContainerStyles>
  );
};

export default Container;
