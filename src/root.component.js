import React from "react";
import "./styles.scss";
import "./foundation-icons.scss";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted! <span className="fi-alert"></span>
    </section>
  );
}
