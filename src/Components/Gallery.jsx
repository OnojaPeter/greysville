import { useState, useEffect } from "react";

const Gallery = ({images}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading time
      const timer = setTimeout(() => setLoading(false), 500); // Adjust time as needed
      return () => clearTimeout(timer);
    }, [images]);
  return (
    <section>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-full h-[400px] bg-gray-300 animate-pulse"
                ></div>
              ))
          : images.map((img, index) => (
              <div key={index}>
                <img
                  className="w-full h-[400px] object-cover rounded-lg"
                  src={`/images/${img}`}
                  alt={`Gallery Image ${index}`}
                />
              </div>
            ))}
      </div>
    </section>
  )
}

export default Gallery