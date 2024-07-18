import React from "react";

const Footer = () => {
return <footer class="bg-white-100

">
  
  <div class="
    relative mx-auto 
    max-w-screen-xl
    px-4 
    py-1 
    
    tablet:px-6 
    laptop:px-8 
    desktop:pt-24">
      <hr class="hr-line"/>
  <div class="tablet:flex tablet:items-end tablet:justify-around
  laptop:flex laptop:items-end laptop:justify-around
  ">
  <div>
    <p class="
    mx-auto 
    mt-6 
    
    text-center 
    leading-relaxed 
    text-gray-500 
    tablet:text-center
    laptop: text-left
    desktop: text-left
    font-roboto">
      Поделиться своими ответами: 
      телеграм 
  <span className="text-green-700"> @znznrubot
  </span> | почта 
  <span className="text-green-700"> info@znzn.ru
  </span>
  </p>
</div>
<div className="laptop:pl-32">
  <ul
  class="
    mt-12 
    flex 
  
    flex-wrap
    justify-center
    gap-6 
    laptop:gap-8 
    laptop:mt-0 
    laptop:justify-end 
    laptop:gap-12">
  <li>
  <a class="
    text-gray-700 
    transition 
    hover:text-green-700/75
    font-roboto" 
    href="#">
    Обратная связь
  </a>
  </li>
  </ul>
  </div>
  </div>
  <hr class="hr-line"/>
  <div class="
   h-full flex flex-row justify-around items-center">
     <button class="
    
    text-4xl
    font-roboto
    text-green-dark">
  <span className="
     text-lg
    text-green-700">
     ZNZN
  </span>
</button>

<div><p class="
  font-normal
  text-gray-600
  text-sm
  ">
   © 2024 ZNZN
  </p></div>

  <button class="
    
    text-4xl
    font-roboto
    text-green-dark">
       <span className="
     text-lg
     bg-green-400
   0">SK
  </span>
    <span className="
    text-lg
    text-black-700">
      
        Участник
  </span>
  </button>
  </div>
  </div>
      </footer>
}

export default Footer;
