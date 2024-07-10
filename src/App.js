import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import ImageSlider from 'react-3d-slider';

const images = [
  { id: 1, path: 'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649' },
  { id: 2, path: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630' },
  { id: 3, path: 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg' },
  { id: 4, path: 'https://img.freepik.com/free-photo/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.jpg' },
  { id: 5, path: 'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg' },
  { id: 6, path: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg' },
]

function App() {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);
  const [timeInterval, setTimeInterval] = useState(5);
  const [allImages, setAllImages] = useState(images);
  const [url, setUrl] = useState("")

  const handleImageClick = (image) => {
    console.log(image);
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className='col-span-1 bg-red-50 p-4'>
        <div className='space-y-4'>
          <div className='flex items-center'>
            <label className='w-1/3'>Width: </label>
            <input 
              className='w-2/3 p-2 border rounded' 
              value={width} 
              onChange={(e) => setWidth(e.target.value)} 
            />
          </div>
          <div className='flex items-center'>
            <label className='w-1/3'>Height: </label>
            <input 
              className='w-2/3 p-2 border rounded' 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
            />
          </div>
          <div className='flex items-center'>
            <label className='w-1/3'>Time Interval: </label>
            <input 
              className='w-2/3 p-2 border rounded' 
              value={timeInterval} 
              onChange={(e) => setTimeInterval(e.target.value)} 
            />
          </div>
          <div className='flex items-center'>
            <label className='w-1/3'>Add image url: </label>
            <input 
              className='w-2/3 p-2 border rounded' 
              value={url} 
              onChange={(e) => setUrl(e.target.value)} 
            />
          </div>
          <button 
            className='w-full py-2 mt-4 bg-blue-500 text-white rounded' 
            onClick={() => {
              if (url) setAllImages([...allImages, { id: Math.floor(Math.random() * 1000), path: url }])
              setUrl("");
            }}
          >
            Add
          </button>
        </div>
      </div>

      <div className='col-span-4 flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold mb-4'>3D Image Slider</h1>
        <ImageSlider
          images={allImages}
          width={width}
          height={height}
          autoRotateInterval={(timeInterval || 1) * 1000}
          centerScale={1.2}
          sideScale={5}
          outerScale={0.6}
          centerBlur={0}
          sideBlur={2}
          outerBlur={4}
          onImageClick={handleImageClick}
        />
      </div>
    </div>
  );
}

export default App;
