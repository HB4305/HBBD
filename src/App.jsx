import React, { useState, useRef } from 'react';
import { Heart, Camera, Cake, Stars, Gift } from 'lucide-react';
import './App.css';

const ẢNH_1 = 'src\\assets\\a1.png';
const ẢNH_2 = 'src\\assets\\a2.png';
const ẢNH_3 = 'src\\assets\\a3.png';

const PhotoFrame = ({ defaultImage, label, rotation, className }) => {
  const [image, setImage] = useState(defaultImage || null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 ${rotation} ${className}`}
      onClick={() => fileInputRef.current.click()}
    >
      <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />

      {/* Khung ảnh: Responsive width (w-64 trên PC, w-56 trên Mobile) */}
      <div className="bg-white p-3 md:p-4 shadow-xl rounded-sm w-56 h-72 md:w-64 md:h-80 mx-auto border border-pink-100 flex flex-col hover:shadow-2xl transition-shadow">
        <div className="w-full flex-grow bg-pink-50 border-2 border-dashed border-pink-200 flex items-center justify-center overflow-hidden relative">
          {image ? (
            <img src={image} alt="Memory" className="w-full h-full object-cover" />
          ) : (
            <div className="text-center p-4 text-pink-300 flex flex-col items-center">
              <Camera size={32} className="mb-2 opacity-60" />
              <span className="text-xs font-medium">Chọn ảnh</span>
            </div>
          )}
        </div>
        <div className="mt-3 text-center font-handwriting text-2xl text-pink-500 truncate">
          {label}
        </div>
      </div>

      {/* Băng dính trang trí */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-pink-200/80 rotate-2 z-10 shadow-sm backdrop-blur-sm"></div>
    </div>
  );
};

function App() {
  return (
    <div className="w-screen h-screen bg-pink-50 text-gray-800 font-sans overflow-hidden relative flex flex-col">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap');
        .font-handwriting { font-family: 'Dancing Script', cursive; }
        body, html { margin: 0; padding: 0; }
      `}</style>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-5 left-5 text-pink-200 animate-pulse"><Heart size={40} fill="#fbcfe8" /></div>
        <div className="absolute top-20 right-5 text-pink-200 animate-bounce delay-1000"><Heart size={30} fill="#fbcfe8" /></div>
        <div className="absolute bottom-10 left-[-20px] text-pink-200 opacity-50"><Stars size={80} /></div>
      </div>

      <div className="w-full h-full max-w-none mx-auto px-0 py-0 relative z-10 flex flex-col items-center justify-center overflow-y-auto">

        {/* Header */}
        <div className="text-center mb-16 mt-8 md:mt-0">
          <div className="inline-block p-3 rounded-full bg-white shadow-md mb-4 animate-bounce">
            <Cake size={40} className="text-pink-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-pink-500 mb-2 drop-shadow-sm font-handwriting px-2">
            Happy Birthday!
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-8 mb-20 w-full px-4">

          <PhotoFrame
            defaultImage={ẢNH_1}
            label="Xinh đẹp"
            rotation="-rotate-2 md:-rotate-6 hover:rotate-0 hover:scale-105 hover:z-20"
          />

          <div className="relative top-8 md:top-0 md:-top-16 z-10">
            <PhotoFrame
              defaultImage={ẢNH_2}
              label="Hạnh phúc"
              rotation="rotate-1 md:scale-110 hover:rotate-0 hover:scale-110 hover:z-20"
            />
          </div>

          <PhotoFrame
            defaultImage={ẢNH_3}
            label="Tuổi mới"
            rotation="rotate-3 md:rotate-6 hover:rotate-0 hover:scale-105 hover:z-20"
          />

        </div>

        {/* Message Card */}
        <div className="w-full max-w-lg md:max-w-2xl bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl border border-pink-100 text-center relative mx-4 mb-8">

          <p className="text-base md:text-xl text-gray-600 leading-relaxed pt-2">
            "Mặc dù mới quen được mấy tiếng nhưng mà chúc em tuổi mới xinh đẹp hơn, hạnh phúc hơn và thành công hơn nhé!"
          </p>

          <div className="mt-6 flex justify-center gap-2">
            <Heart size={16} className="text-pink-400 fill-current animate-pulse" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;