import React from "react";

const About = () => {

 return <div class="
  grid grid-cols-1 
  gap-4 
  laptop:grid-cols-2 
  laptop:gap-8
   p-20
   my-8
   ">

 <div class="
  h-50 
  bg-white
  shadow-[0px_6px_0px_0px_#DAE7E1]
  font-roboto
  p-5 
  rounded-lg
  truncate">
    <span className="text-green-700">О проекте
    </span><br/>
     <br/>
    <span className="text-green-700">ZNZN.RU
    </span> — образовательная песочница: флэш-карты для запоминания, полезные виджеты для учебы и преподавания,
    академические предметы в формате вопрос-ответ.
    Перед публикацией каждый вопрос проверяет действующий преподаватель.
 </div>

 <div class="
    h-32 
    rounded-lg
    bg-white
    shadow-[0px_6px_0px_0px_#DAE7E1]
    font-roboto
    p-8
    truncate ">
    <span className="text-green-700">Зачем дополнять вопрос?
     </span><br/>
     <br/>
     
    Мы хотим, чтобы контент актуализировался силами сообщества. 
   В конце каждого вопроса есть кнопка «дополнить вопрос».
   После модерации вопрос будет обновлен.
 </div>

<div class="
  h-64
  rounded-lg
  bg-white
  shadow-[0px_6px_0px_0px_#DAE7E1]
  font-roboto
  p-8
  truncate">
    <span className="text-green-700">Как стать автором на платформе? </span><br/>
  <br/> 
  Мы приглашаем преподавателей стать авторами на платформе.
  Формат 
  <br/> предполагает выделение под вас отдельного предмета в соответствующей 
  <br/> вкладке <span className="text-green-700">предметы</span>,
   который мы будем наполнять с указанием авторства
   и <br/> разрабатывать под него флэш-карты. 
  Все это вы сможете использовать в 
  <br/> образовательном процессе.
  Напишите нам в телеграм-бот<span className="text-green-700">@znznrubot</span> или на почтy <span className="text-green-700">info@znzn.ru.</span>
</div>

<div class="
  h-32 
  rounded-lg
  bg-white
  shadow-[0px_6px_0px_0px_#DAE7E1]
  font-roboto
   p-8 
   truncate">
   <span className="text-green-700"> Авторские права <br/>
   </span> 
   <br/>
   Все вопросы проверяются преподавателями только на правильность. 
   Если вы являетесь автором содержания вопроса, напишите на почту 
   <span className="text-green-700">
    info@znzn.ru
   </span>
   – мы укажем авторство или удалим вопрос.
 </div>

<div class="
  h-32
  rounded-lg
  bg-white
  shadow-[0px_6px_0px_0px_#DAE7E1]
  font-roboto 
  p-8 
  truncate">
   <span className="text-green-700">Сотрудничество
   </span> <br/>
    <br/>
По вопросам сотрудничества обращайтесь на почту 
 <span className="text-green-700"> info@znzn.ru 
 </span> или в бот телеграм @znznrubot.
 </div>
 
</div>
}

export default About;
