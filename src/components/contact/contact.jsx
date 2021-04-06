import React, { useState, useRef, useEffect } from "react";
import "./contact.scss";
import SocialNetworks from "../footer/social-networks";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Map from "./map";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Contact() {
  const [fullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [, forceUpdate] = useState();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const simpleValidator = useRef(new SimpleReactValidator({ locale: "sr" }));

  SimpleReactValidator.addLocale("sr", {
    accepted: "Polje :attribute mora biti prihvaćeno.",
    after: "Polje :attribute mora biti nakon :date.",
    after_or_equal: "Polje :attribute mora biti nakon ili na :date.",
    alpha: "Polje :attribute može sadržati samo slova.",
    alpha_space: "Polje :attribute može sadržati samo slova i razmake.",
    alpha_num: "Polje :attribute može sadržati samo slova i brojeve.",
    alpha_num_space:
      "Polje :attribute može sadržati samo slova, brojeve i razmake.",
    alpha_num_dash:
      "Polje :attribute može sadržati samo slova, brojeve i crte.",
    alpha_num_dash_space:
      "Polje :attribute može sadržati samo slova, brojeve, crte i razmake.",
    array: "Polje :attribute mora biti niz.",
    before: "Polje :attribute mora biti pre :date.",
    before_or_equal: "Polje :attribute mora biti pre ili na :date.",
    between: "Polje :attribute mora biti između :min i :max:type.",
    boolean: "Polje :attribute mora biti istinitosna vrednost.",
    card_exp: "Polje :attribute mora biti validan datum isteka.",
    card_num: "Polje :attribute mora biti validan broj kreditne kartice.",
    currency: "Polje :attribute mora biti validna valuta.",
    date: "Polje :attribute mora biti datum.",
    date_equals: "Polje :attribute mora biti na :date.",
    email: "Polje :attribute mora biti validna email adresa.",
    in: "Izabrano polje :attribute mora biti :values.",
    integer: "Polje :attribute mora biti ceo broj.",
    // max: "Polje :attribute ne sme biti veće od :max:type.",
    // min: "Polje :attribute mora biti veće od :min:type.",
    max: "Polje :attribute ne sme biti veće od :max karaktera.",
    min: "Polje :attribute mora biti veće od :min karaktera.",
    not_in: "Izabrano polje :attribute ne sme biti :values.",
    not_regex: "Polje :attribute ne sme biti u određenom formatu.",
    numeric: "Polje :attribute mora biti broj.",
    phone: "Polje :attribute mora biti validan broj telefona.",
    regex: "Polje :attribute mora biti u određenom formatu.",
    required: "Polje :attribute je obavezno.",
    size: "Polje :attribute mora biti :size:type.",
    string: "Polje :attribute mora biti niska.",
    typeof: "Polje :attribute nije ispravan tip :type.",
    url: "Polje :attribute mora biti URL.",
  });

  const postDataHandler = (e) => {
    e.preventDefault();

    if (
      Object.values(simpleValidator.current.errorMessages).every(
        (x) => x === null || x === ""
      )
    ) {
      axios
        .post("http://localhost:3001/messages", {
          full_name: fullName,
          email: Email,
          message: Message,
        })
        .then(() => {
          emptyForm();
          setIsOpen(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log(simpleValidator.current.errorMessages.email);
      simpleValidator.current.showMessages();
      forceUpdate(1);
      setDisabled(true);
    }
  };

  const emptyForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    if (
      Object.values(simpleValidator.current.errorMessages).every(
        (x) => x === null || x === ""
      )
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [Message, Email, fullName]);

  useEffect(() => {
    setTimeout(() => {
      setDisabled(false);
    }, 100);
  }, []);

  return (
    <div>
      <div className="heading-small">
        <h2 data-aos="flip-left" data-aos-duration="1000" data-aos-once="true">
          <span>Kontaktiraj</span> nas
        </h2>
      </div>
      <div className="contact-wrap">
        <div className="contact-info">
          <a
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-once="true"
            className="contact-link"
            href="mailto:zecanka@email.com"
          >
            <FaEnvelope></FaEnvelope>
            <span>zecanka@email.com</span>
          </a>
          <a
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-once="true"
            className="contact-link"
            href="tel:+38267111222"
          >
            <FaPhoneAlt></FaPhoneAlt>
            <span>+382 67 111 222</span>
          </a>
          <div
            className="social-wrap"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div>
              <SocialNetworks></SocialNetworks>
            </div>
          </div>
        </div>
        <div
          className="contact-form"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <form onSubmit={postDataHandler}>
            <div className="form-wrap">
              <label htmlFor="name">Ime i prezime</label>
              <input
                type="text"
                name="name"
                id="name"
                value={fullName}
                placeholder="Unesite ime i prezime"
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() =>
                  simpleValidator.current.showMessageFor("ime i prezime")
                }
              />
              {simpleValidator.current.message(
                "ime i prezime",
                fullName,
                "required|alpha_space"
              )}
            </div>
            <div className="form-wrap">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={Email}
                placeholder="Unesite email"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => simpleValidator.current.showMessageFor("email")}
              />
              {simpleValidator.current.message(
                "email",
                Email,
                "required|email"
              )}
            </div>
            <div className="form-wrap">
              <label htmlFor="message">Poruka</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="7"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Unesite poruku"
                onFocus={() => simpleValidator.current.showMessageFor("poruka")}
              ></textarea>
              {simpleValidator.current.message(
                "poruka",
                Message,
                "required|min:10|max:1000"
              )}
            </div>
            <div className="form-wrap">
              <input
                type="submit"
                value="Pošalji"
                className="btn-red"
                disabled={disabled}
              />
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Poruka je uspješno poslata!</h2>
        <button onClick={closeModal} className="btn-red">
          OK!
        </button>
      </Modal>
      <Map></Map>
    </div>
  );
}

export default Contact;
