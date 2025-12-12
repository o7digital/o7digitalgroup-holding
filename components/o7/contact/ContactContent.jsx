"use client";

import React, { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import { o7ContactInfo } from "@/data/o7";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const phoneValue = o7ContactInfo.phone?.trim();
  const phoneLink = phoneValue
    ? `tel:${phoneValue.replace(/\s+/g, "")}`
    : null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(
          data?.message ||
            "Le formulaire n'a pas pu être envoyé pour le moment."
        );
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
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
                <h4 className="title">Email</h4>
                <p>
                  <a href={`mailto:${o7ContactInfo.email}`}>
                    {o7ContactInfo.email}
                  </a>
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
                <h4 className="title">Téléphone</h4>
                {phoneLink ? (
                  <p>
                    <a href={phoneLink}>{phoneValue}</a>
                  </p>
                ) : (
                  <p className="mb--0">Disponible sur demande</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="rainbow-address">
              <div className="icon">
                <i className="feather-calendar" />
              </div>
              <div className="inner">
                <h4 className="title">Prendre rendez-vous</h4>
                <p className="mb--0">
                  <a href="#contact-form">Planifier un échange</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt--40 row--15">
          <div className="col-lg-8 offset-lg-2">
            <form
              className="contact-form-1 rainbow-dynamic-form"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  placeholder="Nom complet"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="Email professionnel"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  id="contact-phone"
                  placeholder="Téléphone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="contact-message"
                  placeholder="Votre message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>
              <div className="form-group">
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="btn-default btn-large rainbow-btn"
                  disabled={status === "loading"}
                >
                  <span>{status === "loading" ? "Envoi..." : "Envoyer"}</span>
                </button>
              </div>
              {status === "success" && (
                <div className="form-group">
                  <p className="success-message mb--0">
                    Merci, votre message a bien été envoyé.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="form-group">
                  <p className="error-message mb--0">
                    {errorMessage || "Une erreur est survenue, merci de réessayer."}
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
