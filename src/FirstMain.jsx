import React from "react";
import IMAGES from "./images/image";

const FirstMain = () => {

return (


<div className="laptop:grid laptop:grid-cols-4 laptop:grid-rows-1 laptop:gap-4
tablet:flex tablet:flex-col
">
        <div className="col-start-2">
        <div className="border border-slate-300
rounded-lg  
">
  <img className="rounded-lg
" src={IMAGES.imgOne} 
  alt="znania"  />
</div>


        </div>
    <div className="col-start-3">


    <div className="
  flex flex-col 
  rounded-2xl 
  w-80
  bg-[#ffffff]
  shadow-xl
  border-2 
  border border-slate-300
  m-auto
  ">
<div className="
  flex 
  flex-col 
  p-2">
<div className="
  text-2xl
  font-bold 
  text-[#374151]
  pb-6
  font-roboto">
    Фоновый звук
</div>

<div className="
  text-lg 
  text-[#374151]">
</div>

<div className="
  flex justify-end 
  pt-6">
<button className="
  bg-[#ffffff]
  text-[#0f0f0f]
  w-full
  font-bold
  text-2xl 
  font-roboto
  p-3 
  rounded-lg 
  hover:bg-blue-200
  active:scale-95 
  transition-transform
  transform
  border-2
  border border-slate-300">
    Дождь
  </button>
</div>

  <div className="
    flex justify-end
    pt-6">        
  <button className="
    bg-[#ffffff]
    text-[#0f0f0f]
    w-full 
    font-roboto 
    text-2xl 
    font-roboto
    p-3 
    rounded-lg 
    hover:bg-blue-300
    active:scale-95
    transition-transform 
    transform
    border-2 
    border border-slate-300">
      Море
  </button>
</div>

<div class="
  flex justify-end 
  pt-6">
  <button class="
    bg-[#ffffff]
    text-[#0f0f0f] 
    w-full
    font-bold 
    text-2xl 
    font-roboto
    p-3 
    rounded-lg
    hover:bg-green-200 
    active:scale-95 
    transition-transform
    transform
    border-2
    border border-slate-300">
      Лес
  </button>
</div>

<div class="flex justify-end pt-6">
  <button class="
    bg-[#ffffff]
    text-[#0f0f0f]
    w-full
    font-bold 
    text-2xl 
    font-roboto
    p-3 
    rounded-lg 
    hover:bg-gray-400 
    active:scale-95 
    transition-transform 
    transform
    border-2
    border border-slate-300">
      Шум
    </button>
</div>
</div>
</div>
    </div>

    <div class="flex flex-wrap">
  <div class="w-1/3 ml-auto h-12"></div>
  <div class="w-1/3 mr-auto h-12"></div>
</div>


</div>


)
}

export default FirstMain;
