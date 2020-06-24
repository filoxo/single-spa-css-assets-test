import React from "react";
import "./styles.css";
import "./foundation-icons.css";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted! <span className="fi-alert"></span>
    </section>
  );
}
