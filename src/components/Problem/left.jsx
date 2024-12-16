import React from "react";
function LeftSection({ imageUrl, description, problemname }) {
  return (
    <div className="container  p-5">
      <div className="row">
        <div className="col-8 p-3">
          <img
            src={imageUrl}
            style={{
              width: "90%",
              height: "90%",
              objectFit: "cover",
              borderRadius:"2%"
            }}
          />
        </div>
        <div className="col-4">
          <h1 className="mb-4 text-muted">{problemname}</h1>
          {description}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
