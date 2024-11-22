import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import Gallery from '../Components/Gallery'

const designImages = [
  'img_1.webp',
  'img_2.webp',
  'img_3.webp',
  'img_4.webp',
  'img_10.webp'
]

const academyImages = [
  'img_5.webp',
  'img_6.webp',
  'img_7.webp',
  'img_8.webp',
  'img_9.webp',
  'img_11.webp'
]
const GalleryPage = () => {
  const { type } = useParams() // Get current URL path
  const navigate = useNavigate();
  const [images, setImages] = useState(academyImages)

  useEffect(() => {
    if (type === 'design') {
      setImages(designImages);
    } else if (type === 'academy') {
      setImages(academyImages);
    } else {
      setImages(academyImages)
    }
  }, [type]);

  const handleFilterClick = (filterType) => {
    navigate(`/gallery/${filterType}`); // Update URL
  };

  return (
    <section className='flex justify-center'>
      <div className='max-w-[1440px] mx-auto px-4 w-full space-y-10 py-10'>

        <div className="flex space-x-4 text-white">
          <button
            onClick={() => handleFilterClick('design')}
            className={`flex items-center space-x-2 px-4 py-2 rounded ${
              type === 'design' ? 'bg-blue-500' : 'bg-blue-800 hover:bg-blue-800'
            }`}
          >
            <FaFilter  /> <span>Design</span>
          </button>
          <button
            onClick={() => handleFilterClick('academy')}
            className={`flex items-center space-x-2 px-4 py-2 rounded ${
              type === 'academy'
                ? 'bg-green-500'
                : 'bg-green-800 hover:bg-green-800'
            }`}
          >
            <FaFilter /> <span>Academy</span>
          </button>
        </div>
        
        <Gallery images={images} />
        
      </div>
    </section>
  )
}

export default GalleryPage