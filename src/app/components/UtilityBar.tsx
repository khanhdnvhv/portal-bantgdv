import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Clock,
  Thermometer,
  Droplets,
  Wind,
  CloudRain,
  MapPin,
  Sun,
} from "lucide-react";

const weatherData = {
  temperature: 28,
  humidity: 72,
  airQuality: { aqi: 85, label: "Trung bình" },
  rainChance: 35,
  location: "Hà Nội",
};

function formatDate() {
  const days = [
    "Chủ nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const now = new Date();
  const day = days[now.getDay()];
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();
  return `${day}, ${dd}/${mm}/${yyyy}`;
}

function formatTime() {
  const now = new Date();
  return now.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function getAqiInfo(aqi: number) {
  if (aqi <= 50) return { color: "#16a34a", bg: "rgba(22,163,74,0.1)", label: "Tốt" };
  if (aqi <= 100) return { color: "#ca8a04", bg: "rgba(202,138,4,0.1)", label: "Trung bình" };
  if (aqi <= 150) return { color: "#ea580c", bg: "rgba(234,88,12,0.1)", label: "Kém" };
  return { color: "#dc2626", bg: "rgba(220,38,38,0.1)", label: "Xấu" };
}

function Divider() {
  return <div className="w-px h-[18px] bg-gradient-to-b from-transparent via-[#d4d4d8] to-transparent" />;
}

function WeatherChip({
  icon,
  value,
  unit,
  accentColor,
  accentBg,
}: {
  icon: React.ReactNode;
  value: string;
  unit?: string;
  accentColor?: string;
  accentBg?: string;
}) {
  return (
    <div
      className="flex items-center gap-[5px] px-[8px] py-[3px] rounded-full transition-all duration-200 hover:scale-105 cursor-default"
      style={{ backgroundColor: accentBg || "rgba(219,7,19,0.06)" }}
    >
      <span className="flex items-center" style={{ color: accentColor || "#db0713" }}>
        {icon}
      </span>
      <span
        className="text-[12px] font-semibold font-['Inter',sans-serif] tracking-tight"
        style={{ color: accentColor || "#101828" }}
      >
        {value}
      </span>
      {unit && (
        <span className="text-[11px] text-[#71717a] font-['Inter',sans-serif]">{unit}</span>
      )}
    </div>
  );
}

export function UtilityBar() {
  const [time, setTime] = useState(formatTime);
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formatTime());
      setShowColon((v) => !v);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const w = weatherData;
  const aqiInfo = getAqiInfo(w.airQuality.aqi);

  return (
    <div className="w-full flex justify-center bg-gradient-to-r from-[#fefefe] via-[#f8f8fa] to-[#fefefe] border-b border-[#e8e8ec] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="w-full max-w-[1360px] px-[12px] md:px-[20px] flex items-center justify-between h-[38px]">
        {/* Left: Location, Date & Time */}
        <div className="flex items-center gap-[6px] md:gap-[10px]">
          {/* Location badge */}
          <div className="flex items-center gap-[4px] bg-[#db0713] text-white px-[8px] py-[2px] rounded-full">
            <MapPin size={11} strokeWidth={2.5} />
            <span className="text-[11px] font-semibold font-['Inter',sans-serif] tracking-wide uppercase">
              {w.location}
            </span>
          </div>

          <Divider />

          {/* Date */}
          <div className="hidden sm:flex items-center gap-[5px]">
            <Calendar size={13} className="text-[#a1a1aa]" />
            <span className="text-[13px] font-medium text-[#3f3f46] font-['Inter',sans-serif]">
              {formatDate()}
            </span>
          </div>

          <div className="hidden sm:block"><Divider /></div>

          {/* Time with blinking colon */}
          <div className="flex items-center gap-[5px]">
            <Clock size={13} className="text-[#db0713]" />
            <span className="text-[13px] font-semibold text-[#db0713] font-['Inter',sans-serif] tabular-nums min-w-[62px]">
              {time}
            </span>
          </div>
        </div>

        {/* Right: Weather info chips - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-[6px]">
          {/* Sun icon for aesthetic */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center mr-[2px]"
          >
            <Sun size={14} className="text-[#f59e0b]" />
          </motion.div>

          <WeatherChip
            icon={<Thermometer size={12} strokeWidth={2.5} />}
            value={`${w.temperature}°C`}
            accentColor="#db0713"
            accentBg="rgba(219,7,19,0.06)"
          />

          <WeatherChip
            icon={<Droplets size={12} strokeWidth={2.5} />}
            value={`${w.humidity}%`}
            unit="độ ẩm"
            accentColor="#0284c7"
            accentBg="rgba(2,132,199,0.06)"
          />

          <div
            className="flex items-center gap-[5px] px-[8px] py-[3px] rounded-full transition-all duration-200 hover:scale-105 cursor-default"
            style={{ backgroundColor: aqiInfo.bg }}
          >
            <Wind size={12} strokeWidth={2.5} style={{ color: aqiInfo.color }} />
            <span
              className="text-[12px] font-semibold font-['Inter',sans-serif]"
              style={{ color: aqiInfo.color }}
            >
              AQI {w.airQuality.aqi}
            </span>
            <span
              className="text-[10px] px-[4px] py-[1px] rounded-full font-medium font-['Inter',sans-serif]"
              style={{
                backgroundColor: aqiInfo.color,
                color: "#fff",
              }}
            >
              {aqiInfo.label}
            </span>
          </div>

          <WeatherChip
            icon={<CloudRain size={12} strokeWidth={2.5} />}
            value={`${w.rainChance}%`}
            unit="mưa"
            accentColor="#7c3aed"
            accentBg="rgba(124,58,237,0.06)"
          />
        </div>
      </div>
    </div>
  );
}