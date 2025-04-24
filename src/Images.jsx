import React from "react";

function Images() {
  return (
    <div>
      <div style={{ marginTop: "1rem" }}>
        <img
          src="https://examplefile.com/image/jpg/20-mb-jpg"
          alt="img1"
          width={500}
          height={500}
        />
        <img src="/20mb2.jpg" alt="img2" width={500} height={500} />
        <img src="/20mb3.jpg" alt="img3" width={500} height={500} />
      </div>
    </div>
  );
}

export default Images;
