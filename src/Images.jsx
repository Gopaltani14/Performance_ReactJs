import React from "react";

function Images() {
  return (
    <div>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <img src="/20mb1.jpg" alt="img1" width={300} height={300} />
        <img src="/20mb2.jpg" alt="img2" width={300} height={300} />
        <img src="/20mb3.jpg" alt="img3" width={300} height={300} />
      </div>
    </div>
  );
}

export default Images;
