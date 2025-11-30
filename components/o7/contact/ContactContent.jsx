"use client";

import React, { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import { o7ContactInfo } from "@/data/o7";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="rainbow-contact-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb--40">
            <SectionHeader
              eyebrow="Contact"
              title={o7ContactInfo.title}
              description={o7ContactInfo.description}
            />
          </div>
        </div>
        <div className="row row--15">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="rainbow-address">
              <div className="icon">
                <i className="feather-mail" />
              </div>
              <div className="inner">
                <h4 className="title">Email placeholder</h4>
                <p>
                  <a href="#">{o7ContactInfo.email}</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="rainbow-address">
              <div className="icon">
                <i className="feather-phone-call" />
              </div>
              <div className="inner">
                <h4 className="title">Phone placeholder</h4>
                <p>
                  <a href="#">{o7ContactInfo.phone}</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="rainbow-address">
              <div className="icon">
                <i className="feather-map-pin" />
              </div>
              <div className="inner">
                <h4 className="title">Adresse placeholder</h4>
                <p className="mb--0">{o7ContactInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt--40 row--15">
          <div className="col-lg-8 offset-lg-2">
            <form
              className="contact-form-1 rainbow-dynamic-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="contact-name"
                  id="contact-name"
                  placeholder="Nom placeholder"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="contact-email"
                  name="contact-email"
                  placeholder="Email placeholder"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="contact-phone"
                  id="contact-phone"
                  placeholder="Téléphone placeholder"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="contact-message"
                  id="contact-message"
                  placeholder="Message placeholder"
                  required
                  defaultValue=""
                />
              </div>
              <div className="form-group">
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="btn-default btn-large rainbow-btn"
                >
                  <span>Envoyer (placeholder)</span>
                </button>
              </div>
              {submitted && (
                <div className="form-group">
                  <p className="success-message mb--0">
                    Message placeholder envoyé (non connecté).
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
