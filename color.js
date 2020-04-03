var Links = {
      setColor (color)
       // {var kk= document.querySelectorAll('a');
       // i = 0;
       // while(i < kk.length)
       // {kk[i].style.color= color;
       //  i = i + 1;}
           {$('a').css('color', color);}
            }


 var Body = {
       setColor: function (color)
            {
              // {document.querySelector('body').style.color=color;},
              $('body').css('color', color);},

       setBackgroundColor : function (color)
             {
              // {document.querySelector('body').style.backgroundColor=color;}
               $('body').css('backgroundColor', color);
            }}



  function nightdayHandler(here)
    {

    if(here.value === 'night')
      {Body.setBackgroundColor('black');
      Body.setColor('white');
      here.value='day';
      Links.setColor('powderblue');
      }

      else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        here.value='night';
        Links.setColor('blue');
        }

      }
