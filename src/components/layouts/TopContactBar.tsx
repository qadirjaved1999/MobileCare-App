"use client";

export default function TopContactBar() {
  return (
    <div className="bg-black text-gray-400 text-[13px] px-10">
      <div className="container-xl py-1 flex items-center justify-between">
        <div className="opacity-90">Pomoc & kontakt</div>
        <div className="flex justify-center items-center gap-6">
          <div className="font-medium">Rastislavova 68, Košice</div>
          <div className="font-medium">+421 919 215 491</div>
        </div>
      </div>
    </div>
  );
}
