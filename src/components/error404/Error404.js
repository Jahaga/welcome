import React from "react";
import Error404Img from "../../assets/404.jpg";

function Error404() {
  return (
    <div className="Error404">
      <h5>This is where I'd put another page.</h5>
      <br />
      <img src={Error404Img} alt="Feelsbadman" />
      <br />
      <h5>
        <em>IF I HAD ONE!!!</em>
      </h5>
    </div>
  );
}

export default Error404;
