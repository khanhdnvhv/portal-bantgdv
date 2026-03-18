import { motion } from "motion/react";

export function HoChiMinhBanner() {
  return (
    <motion.div
      className="relative shrink-0 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex justify-center px-4" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Fieldset-style container */}
        <div className="relative w-full pt-[9px]">
          {/* Legend label */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-10 px-5 bg-white"
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ><span
              className="font-['Inter',sans-serif] text-[#737373] text-[16px] tracking-[2px] whitespace-nowrap"
              style={{ fontWeight: 400 }}
            >PHƯƠNG CHÂM CỐT LÕI</span></motion.div>

          {/* Border box */}
          <div className="border border-[#b91c1c]/30 relative">
            <div className="flex flex-col items-center justify-center text-center px-6 py-10">
              {/* Quote text */}
              <motion.p
                className="font-['Playfair_Display',sans-serif] italic text-[18px] sm:text-[22px] md:text-[28px] text-[#222]"
                style={{
                  fontWeight: 700,
                  lineHeight: "1.5",
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {"\""}Tuyên truyền là đem một việc gì nói cho dân hiểu, dân nhớ, dân theo, dân làm.{"\""}
              </motion.p>

              {/* Attribution */}
              <motion.p
                className="mt-4 font-['Playfair_Display',sans-serif] text-[18px] text-[#222]"
                style={{ fontWeight: 700 }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >—Hồ Chí Minh</motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}