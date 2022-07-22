import React from "react";

const Image = ({ title, images, html_url }) => {
  return (
    <div className="py-10">
      <div className="rounded overflow-hidden shadow-lg max-w-sm">
        <a href={html_url}>
          <img src={images.normal} className="rounded-lg w-full" />
          <div className="px-6 py-4">
            <a href={html_url}>
              <div className="text-l font-bold mb-2">
                {title}
              </div>
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Image;
