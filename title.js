import React from "react";
import { Play } from "lucide-react";

const TitleScreen = ({ onStartGame }) => {
  return (
    <div className="relative w-full h-screen bg-blue-950 overflow-hidden font-sans">
      {/* --- PHẦN CSS ANIMATION (Nhúng trực tiếp để chạy ngay) --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(-1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes rise {
          0% { bottom: -100px; transform: translateX(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { bottom: 100%; transform: translateX(-20px); opacity: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        
        .bubble {
          position: absolute;
          bottom: -100px;
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: rise 15s infinite ease-in;
        }
      `}</style>

      {/* --- ẢNH NỀN --- */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)", // Làm mờ nhẹ nền để nổi bật chữ
        }}
      />

      {/* --- HIỆU ỨNG BONG BÓNG NỀN (Trang trí) --- */}
      {/* Tạo random bong bóng bay lên */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            animationDuration: `${10 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* --- NỘI DUNG CHÍNH (TITLE) --- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* TIÊU ĐỀ CHÍNH - Hiệu ứng trôi nổi */}
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-float mb-4 tracking-wider">
          Little Mermaid
        </h1>

        {/* TÊN PHỤ - Hiệu ứng trôi nổi chậm hơn (tạo cảm giác đa chiều) */}
        <p className="text-xl md:text-3xl text-cyan-100 font-light tracking-[0.2em] opacity-90 animate-float-delayed mb-12 drop-shadow-md">
          Thuong "Ariel" Pham
        </p>

        {/* NÚT START GAME - Nổi bật giữa màn hình */}
        <button
          onClick={onStartGame}
          className="group relative px-8 py-4 bg-cyan-500/20 hover:bg-cyan-500/40 backdrop-blur-md border border-cyan-400/50 rounded-full transition-all duration-300 transform hover:scale-110 shadow-[0_0_30px_rgba(6,182,212,0.4)]"
        >
          <div className="flex items-center space-x-3">
            <Play
              fill="currentColor"
              className="w-6 h-6 text-cyan-100 group-hover:text-white transition-colors"
            />
            <span className="text-xl font-bold text-cyan-100 group-hover:text-white uppercase tracking-widest">
              Start Game
            </span>
          </div>

          {/* Vòng tròn lan tỏa khi hover */}
          <div className="absolute inset-0 rounded-full border border-cyan-400 opacity-0 group-hover:animate-ping"></div>
        </button>
      </div>
    </div>
  );
};

export default TitleScreen;
