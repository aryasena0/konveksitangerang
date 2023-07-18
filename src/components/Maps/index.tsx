import React from "react";

const Maps = ({
  url,
  width,
  height,
}: {
  url: string;
  width: string;
  height: string;
}) => {
  return (
    <div className="mx-auto w-full py-40 text-center md:max-w-2xl lg:max-w-7xl">
      <iframe
        className="rounded-md"
        width={width}
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`${url}`}
      ></iframe>
    </div>
  );
};

export default Maps;
