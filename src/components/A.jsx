import React from "react";
import IMAG from "../images/imagetwo";
const A = () => {
  return <div className="laptop:flex border border-slate-300 h-40 items-center laptop:justify-around rounded-lg 
  justify-center
  px-10
  tablet:flex tablet:flex-row-reverse tablet:flex-wrap 
  ">
   



  <div className="flex flex-row-reverse">
    <div>
    <a href="#" class="
    font-medium 
    text-blue-600 
    dark:text-blue-500 
    underline
    
    ">
      Таблица неопределенных  интегралов
  </a>  
</div>
<div>
<img className="rounded-lg
     h-8
    " src={IMAG.imgTwo} 
      alt="papka"  />
</div>
</div>


<div className="flex flex-row-reverse">
    <div>
    <a href="#" class="
    font-medium 
    text-blue-600 
    dark:text-blue-500 
    underline
    
    ">
    Термодинамика (формулы)
  </a>  
</div>
<div>
<img className="rounded-lg
      h-8
    " src={IMAG.imgTwo} 
      alt="papka"  />
</div>
</div>



<div className="flex flex-row-reverse">
    <div>
    <a href="#" class="
    font-medium 
    text-blue-600 
    dark:text-blue-500 
    underline
    
    ">
     Начальные терминоэлементы №1 (латинский язык)
  </a>  
</div>
<div>
<img className="rounded-lg
     h-8
    " src={IMAG.imgTwo} 
      alt="papka"  />
</div>
</div>


</div>

}



export default A;
