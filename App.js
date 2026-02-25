import React, { useState } from "react";
import {
  Play,
  Trophy,
  X,
  HelpCircle,
  Anchor,
  Heart,
  Skull,
  Star,
  Gem,
} from "lucide-react";

// --- CẤU HÌNH DỮ LIỆU ---
// Tìm đến đoạn này ở đầu file App.js và thay link mới vào
const TITLE_BG_URL = "LINK_ẢNH_MỚI_CỦA_BẠN";
const PUZZLE_IMAGE_URL = "LINK_ẢNH_CÂU_ĐỐ_MỚI";
const WIN_BG_URL = "LINK_ẢNH_KHI_THẮNG";
const LOST_BG_URL = "LINK_ẢNH_KHI_THUA";

const QUESTIONS_DATA = [
  {
    id: 0,
    question: "Ai đáng yêu nhất?",
    options: ["Thanh Uyên", "Nguyên Anh", "Uyển Như", "Thương Phạm"],
    correct: "Thương Phạm",
    reward: "Cá x1",
  },
  {
    id: 1,
    question:
      "Một cái bể rộng có sức chứa 3000 lít và không có nước. Cùng một lúc, người ta mở cho hai cái vòi chảy vào. Vòi thứ nhất mỗi phút chảy vào bể được 60 lít. Vòi thứ hai mỗi phút chảy vào bể được 40 lít. Hỏi sau bao lâu thì bể sẽ đầy?",
    options: ["100", "80", "120", "60"],
    correct: "100",
    reward: "Phụ kiện bể cá x1",
  },
  {
    id: 2,
    question: "Làm thế nào để biết bây giờ là mấy giờ?",
    options: [
      "Xem đồng hồ",
      "Xem điện thoại",
      "Hỏi người yêu",
      "Hỏi người yêu (đang đeo đồng hồ casio được tặng)",
    ],
    correct: "Hỏi người yêu (đang đeo đồng hồ casio được tặng)",
    reward: "Sinh vật x2",
  },
  {
    id: 3,
    question: "Cá mập có xương không?",
    options: ["Có", "Không (Chỉ có sụn)", "Chỉ có ở vây", "Chỉ có ở hàm"],
    correct: "Không (Chỉ có sụn)",
    reward: "Phụ kiện bể cá x1",
  },
  {
    id: 4,
    question: "Nước ép nào ngon nhất?",
    options: ["Cam", "Chuối", "Xoài", "Táo"],
    correct: "Xoài",
    reward: "Phụ kiện bể cá x1",
  },
  {
    id: 5,
    question: "Anh dỗi em thì em sẽ làm gì?",
    options: ["Dỗi ngược lại", "Tức giận", "Kệ", "Dỗ"],
    correct: "Dỗi ngược lại",
    reward: "Phụ kiện bể cá x1",
  },
  {
    id: 6,
    question: "Cách nhanh nhất để làm anh vui?",
    options: ["Đưa đi chơi", "Hẹ Hẹ", "Cho ăn đấm", "Cù"],
    correct: "Hẹ Hẹ",
    reward: "Phụ kiện bể cá x1",
  },
  {
    id: 7,
    question: "Love language của anh là?",
    options: ["Cù", "Liếm", "Nói", "Sờ kin síp"],
    correct: "Sờ kin síp",
    reward: "Phụ kiện bể cá x1",
  },
  {
    id: 8,
    question: "Nếu anh và đồ ăn vặt Trung Quốc rơi xuống nước em sẽ cứu ai?",
    options: ["Anh", "đồ ăn vặt Trung Quốc", "Chịu", "Lướt tiktok"],
    correct: "Anh",
    reward: "Phụ kiện bể cá x1",
  },
  {
    id: 9,
    question: "Loài chim nào dành phần lớn cuộc đời bay trên biển?",
    options: ["Hải Âu", "Chim Cánh Cụt", "Vịt Trời", "Bồ Câu"],
    correct: "Hải Âu",
    reward: "Sinh vật x2",
  },
  {
    id: 10,
    question: "Em ghét gì ở anh nhất?",
    options: ["Ỉa nhiều", "Ngủ nhiều", "Không ghét <3", "Trẩu"],
    correct: "Không ghét <3",
    reward: "Sinh vật x2",
  },
  {
    id: 11,
    question: "Yêu em bie ThuongFam nhất",
    options: ["Yêu anh", "Yêu anh", "Yêu anh", "Yêu anh"],
    correct: "Yêu anh",
    reward: "Sinh vật x2",
  },
];

const COMPLIMENTS = [
  "Tuyệt vời!",
  "Quá đỉnh luôn!",
  "Bạn thật thông minh!",
  "Chính xác!",
  "Đắc Phát rất tự hào về bạn!",
];

// --- MÀN HÌNH CHÀO ---
const TitleScreen = ({ onStart }) => (
  <div className="relative w-full h-screen bg-blue-950 overflow-hidden text-white flex flex-col items-center justify-center">
    <div
      className="absolute inset-0 z-0 bg-cover bg-center opacity-40 blur-sm scale-105"
      style={{ backgroundImage: `url('${TITLE_BG_URL}')` }}
    />
    <div className="relative z-10 text-center px-4">
      <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 to-blue-500 mb-4 drop-shadow-2xl">
        Little Mermaid
      </h1>
      <p className="text-2xl md:text-4xl text-cyan-200 font-medium mb-16 italic opacity-80">
        Thuong "Ariel" Pham
      </p>
      <button
        onClick={onStart}
        className="px-12 py-5 bg-cyan-500 text-white font-black text-2xl rounded-full shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-110 transition-transform uppercase"
      >
        START GAME
      </button>
    </div>
  </div>
);

// --- MÀN HÌNH CHƠI ---
const GameScreen = ({ onBackToTitle }) => {
  const [unlockedPieces, setUnlockedPieces] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [rewardData, setRewardData] = useState(null);
  const [lives, setLives] = useState(4);
  const [status, setStatus] = useState("playing");

  const handlePieceClick = (q) => {
    if (!unlockedPieces.includes(q.id) && status === "playing")
      setActiveQuestion(q);
  };

  const handleAnswer = (option) => {
    if (option === activeQuestion.correct) {
      const nextUnlocked = [...unlockedPieces, activeQuestion.id];
      setUnlockedPieces(nextUnlocked);
      setRewardData({
        msg: COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)],
        item: activeQuestion.reward,
      });
      setActiveQuestion(null);
      if (nextUnlocked.length === QUESTIONS_DATA.length) setStatus("won");
    } else {
      const nextLives = lives - 1;
      setLives(nextLives);
      setActiveQuestion(null);
      if (nextLives <= 0) setStatus("lost");
    }
  };

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
      {/* HIỂN THỊ MẠNG */}
      <div className="absolute top-8 right-8 flex gap-3 bg-black/40 p-4 rounded-2xl border border-white/10 z-50">
        {[...Array(4)].map((_, i) => (
          <Heart
            key={i}
            size={32}
            fill={i < lives ? "#ff2d55" : "transparent"}
            className={i < lives ? "text-red-500" : "text-gray-600"}
          />
        ))}
      </div>

      <button
        onClick={onBackToTitle}
        className="absolute top-8 left-8 flex items-center gap-2 text-cyan-400 font-bold hover:text-white z-50"
      >
        <Anchor size={24} /> TRỞ VỀ
      </button>

      {/* TIẾN ĐỘ */}
      <div className="text-center mb-8 z-10">
        <h2 className="text-4xl font-black text-cyan-400 uppercase tracking-tighter">
          Khám Phá Đại Dương
        </h2>
        <p className="text-blue-300 font-bold tracking-widest mt-2">
          TIẾN ĐỘ: {unlockedPieces.length} / 12
        </p>
      </div>

      {/* LƯỚI GHÉP HÌNH */}
      <div
        className="relative w-full max-w-4xl aspect-[4/3] rounded-3xl overflow-hidden border-8 border-cyan-900 shadow-2xl z-10"
        style={{
          backgroundImage: `url('${PUZZLE_IMAGE_URL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 w-full h-full">
          {QUESTIONS_DATA.map((q) => (
            <div
              key={q.id}
              onClick={() => handlePieceClick(q)}
              className={`border border-blue-950/20 flex items-center justify-center cursor-pointer transition-all duration-700
                ${
                  unlockedPieces.includes(q.id)
                    ? "bg-transparent opacity-0 pointer-events-none"
                    : "bg-blue-900/98 hover:bg-cyan-800"
                }`}
            >
              {!unlockedPieces.includes(q.id) && (
                <HelpCircle size={40} className="text-cyan-500/30" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* POPUP CÂU HỎI */}
      {activeQuestion && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-6">
          <div className="bg-gradient-to-b from-blue-900 to-black w-full max-w-lg rounded-[2rem] p-10 border border-cyan-400/30 shadow-2xl">
            <h3 className="text-cyan-400 font-bold text-sm tracking-widest uppercase mb-4 text-center italic">
              Câu hỏi từ biển sâu
            </h3>
            <p className="text-2xl font-bold mb-10 text-center leading-relaxed text-white">
              {activeQuestion.question}
            </p>
            <div className="grid gap-4">
              {activeQuestion.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt)}
                  className="w-full py-4 px-6 text-center rounded-2xl bg-white/5 border border-white/10 hover:bg-cyan-600 hover:scale-[1.02] transition-all text-xl font-medium"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* POPUP PHẦN THƯỞNG */}
      {rewardData && (
        <div className="fixed inset-0 bg-cyan-900/60 backdrop-blur-sm flex items-center justify-center z-[110] p-6 animate-in fade-in zoom-in">
          <div className="bg-white text-blue-900 rounded-[2.5rem] p-10 max-w-xs w-full text-center relative shadow-2xl">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-yellow-400 p-4 rounded-full rotate-12">
              <Star size={48} className="text-white fill-white" />
            </div>
            <h4 className="text-3xl font-black mb-2 mt-4 text-cyan-600 tracking-tighter">
              {rewardData.msg}
            </h4>
            <div className="my-6 flex flex-col items-center">
              <Gem size={60} className="text-blue-500 animate-bounce mb-2" />
              <p className="text-gray-500 font-bold uppercase text-xs">
                Bạn nhận được:
              </p>
              <p className="text-xl font-black text-blue-900 uppercase underline decoration-cyan-400 decoration-4">
                {rewardData.item}
              </p>
            </div>
            <button
              onClick={() => setRewardData(null)}
              className="w-full py-4 bg-blue-900 text-white font-black rounded-2xl hover:bg-blue-800 transition-colors uppercase"
            >
              Tiếp tục
            </button>
          </div>
        </div>
      )}

      {/* MÀN HÌNH CHIẾN THẮNG CÓ BACKGROUND */}
      {status === "won" && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center text-center p-6 animate-in slide-in-from-bottom duration-700">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${WIN_BG_URL}')` }}
          />
          <div className="absolute inset-0 bg-cyan-950/80 backdrop-blur-sm z-1" />

          <div className="relative z-10 flex flex-col items-center">
            <Trophy
              size={120}
              className="text-yellow-400 mb-8 animate-bounce drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]"
            />
            <h2 className="text-7xl font-black mb-6 text-white tracking-tighter uppercase">
              Hoàn Thành!
            </h2>
            <p className="text-2xl text-cyan-100 mb-12 max-w-md font-medium italic drop-shadow-md">
              "Bạn đã thu thập đủ báu vật và giải mã được bí ẩn của đại dương!
              Phần thưởng của bạn là bể cá x1"
            </p>
            <button
              onClick={onBackToTitle}
              className="px-12 py-5 bg-yellow-400 text-blue-900 font-black rounded-full text-2xl hover:scale-110 transition-transform shadow-xl uppercase"
            >
              CHƠI LẠI
            </button>
          </div>
        </div>
      )}

      {/* MÀN HÌNH THẤT BẠI CÓ BACKGROUND */}
      {status === "lost" && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${LOST_BG_URL}')` }}
          />
          <div className="absolute inset-0 bg-red-950/90 backdrop-blur-md z-1" />

          <div className="relative z-10 flex flex-col items-center">
            <Skull size={120} className="text-white mb-8 animate-pulse" />
            <h2 className="text-7xl font-black mb-6 text-white uppercase tracking-tighter">
              Hết Mạng!
            </h2>
            <p className="text-2xl text-red-200 mb-12 font-medium drop-shadow-md">
              Đại dương quá khắc nghiệt, hãy thử lại nhé!
            </p>
            <button
              onClick={onBackToTitle}
              className="px-12 py-5 bg-white text-red-900 font-black rounded-full text-2xl hover:scale-110 transition-transform uppercase shadow-2xl"
            >
              QUAY LẠI MENU
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [screen, setScreen] = useState("title");
  return (
    <div className="bg-black min-h-screen selection:bg-cyan-500 selection:text-white">
      {screen === "title" ? (
        <TitleScreen onStart={() => setScreen("game")} />
      ) : (
        <GameScreen onBackToTitle={() => setScreen("title")} />
      )}
    </div>
  );
}
