import React from 'react';

const Header = () => {
return <header class="">
  <div class="mx-auto max-w-screen-dekstop 
    px-4
    mt-3 
    tablet:px-6 
    laptop:px-8">
  <div class="
    flex 
    h-16
    items-center 
    justify-between">
  <div class="
    flex-1 
    md:flex
    md:items-center 
    md:gap-12">
      <a class="block text-teal-600" 
         href="#">
      <span class="sr-only">
         Home
      </span>

<button class="flex
p-4
font-extrabold
  text-4xl 
  font-roboto
  text-green-dark">
<span className="
text-green-600
text-xl
">ZNZN |
</span> 
<svg class="
  h-5 
  w-8 
  mt-1
  text-green-600
   hover:bg-green-100 
  "
    viewBox="0 0 24 24"  
    fill="none" 
     stroke="currentColor" 
      stroke-width="2"
        stroke-linecap="round"  
        stroke-linejoin="round">  
        <polyline points="20 12 20 22 4 22 4 12" /> 
         <rect x="2" y="7" width="20" height="5" /> 
          <line x1="12" y1="22" x2="12" y2="7" /> 
           <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /> 
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
</button>
</a>
  </div>
  
<div class="
  laptop:flex 
  laptop:items-center 
  laptop:gap-12">
<nav aria-label="Global" class="tablet:hidden">
  <ul class="flex items-center 
    gap-6 
    text-tablet">
<svg class="
  h-6 
  w-6 
  text-gray-500
  hover:text-green-900
  " 
  fill="none" 
  viewBox="0 0 24 24"
  stroke="currentColor">
<path stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
       d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
</svg>
  
<svg class="
  h-6 
  w-6
  text-gray-500
  hover:text-green-900
  " 
  width="24"
  height="24" 
  viewBox="0 0 24 24" 
  stroke-width="2" stroke="currentColor" 
  fill="none" stroke-linecap="round" 
  stroke-linejoin="round">  
  
  <path stroke="none" d="M0 0h24v24H0z"/>  
  <circle cx="6" cy="17" r="3" /> 
  <circle cx="16" cy="17" r="3" />  
  <polyline points="9 17 9 4 19 4 19 17" />  
  <line x1="9" y1="8" x2="19" y2="8" />
</svg>

<svg class="
  h-6 
  w-6
  text-gray-500
  hover:text-green-900
  "  
  fill="none" 
  viewBox="0 0 24 24" 
  stroke="currentColor">
<path stroke-linecap="round" 
  stroke-linejoin="round" 
  stroke-width="2" 
  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
</svg>

<li>              
  <a href="#" className="font-roboto
   no-underline 
   font-light
   hover:underline ...">
    Предметы
  </a>
</li>

<li>
  <a href="#" className="
  font-roboto 
  font-light
  no-underline 
  hover:underline ...">
    Флэш-карты
  </a>
</li>
</ul>
</nav>

<div class="
  flex items-center
  gap-4">
<div class="
  tablet:flex 
  tablet:gap-4">
<div class="hidden
  tablet:flex">
<button className="
  border border-green-700
  h-10
  border-lime-600
  hover:bg-green-50
  text-green-700
  font-roboto
  rounded-lg
  text-sm
  px-10 rounded">
    Вход
</button>
</div>
</div>

<div class="laptop:hidden">
  <button class="
    rounded 
    bg-gray-100 
    p-2
    text-gray-600 
    transition
    hover:text-gray-600/75">
  <svg className=' hover:bg-green-200'
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>

</button>
</div>
</div>
</div>
<button className="
  border border-green-700
  h-10
  border-lime-600
  hover:bg-green-50
  text-green-700
  font-roboto
  rounded-lg
  text-sm
  px-10 rounded
  tablet:hidden">
    Вход
</button>
</div>

<hr className="hr-lime"/>
</div>

</header>
}

export default Header;
