import React from "react";
function RightSection({
  imageUrl,
  description,
  problemname
}) {
  return (
    <div className="container  p-5">
      <div className="row">
        <div className="col-4 ">
        <h1 className='mb-5 text-muted'>{problemname}</h1>
         {description}
        </div>
        <div className="col-1"></div>
        <div className="col-7 p-1">
          <img src={imageUrl}  style={{
              width: "90%",
              height: "90%",
              objectFit: "cover",
              borderRadius:"2%"
            }}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
