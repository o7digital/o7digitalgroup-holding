"use client";

import React from "react";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  children,
}) {
  const alignmentClass = align === "left" ? "text-left" : "text-center";

  return (
    <div
      className={`section-title ${alignmentClass}`}
      data-sal="slide-up"
      data-sal-duration={700}
      data-sal-delay={100}
    >
      {eyebrow && (
        <h4 className="subtitle">
          <span className="theme-gradient">{eyebrow}</span>
        </h4>
      )}
      {title && <h2 className="title w-600 mb--20">{title}</h2>}
      {description && <p className="description b1">{description}</p>}
      {children}
    </div>
  );
}
