import './App.css';
import ImageSlider from 'react-3d-slider';

function App() {
  const images =[
    {id:1, path:'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649'},
    {id:2, path:'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630'},
    {id:3, path:'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'},
    {id:4, path:'https://img.freepik.com/free-photo/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.jpg'},
    {id:5, path:'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg'},
  ]

  const handleImageClick = (image) => {
    console.log(image);
  };

  return (
    <div className="App">
      <h1>3D Image Slider</h1>
      <ImageSlider
        images={images}
        width={400}
        height={300}
        autoRotateInterval={5000}
        centerScale={1.2}
        sideScale={0.8}
        outerScale={0.6}
        centerBlur={0}
        sideBlur={2}
        outerBlur={4}
        onImageClick={handleImageClick}
      />
    </div>
  );
}

export default App;
