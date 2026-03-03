import React from "react";

const GalleryImage = () => {
  const images = [
    "/Image1.jpeg",
    "/Image2.jpeg",
    "/Video1.mp4",
    "/Image4.jpeg",
    "/Video2.mp4",
    "/Video3.mp4",
    "/Video4.mp4",
    "/award2.jpeg",
  ];

  return (
    <div className="p-6 bg-white text-black">
      <h2 className="text-2xl font-bold text-center mb-6">
        Image & Video Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((item, index) => {
          const isVideo = item.endsWith(".mp4");

          return (
            <div
              key={index}
              className="group overflow-hidden rounded-xl shadow-lg bg-gray-100"
            >
              {/* Fixed aspect ratio container */}
              <div className="relative w-full aspect-square">
                {isVideo ? (
                  <video
                    src={item}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item}
                    alt={`Media ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryImage;
