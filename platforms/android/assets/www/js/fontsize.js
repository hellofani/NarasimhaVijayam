// JavaScript Document
  $(document).ready(function() { 
  $('#incfont').click(function(){    
        curSize= parseInt($('#contaner').css('font-size')) + 2;
  if(curSize<=40)
        $('#contaner').css('font-size', curSize);
        });  
  $('#decfont').click(function(){    
        curSize= parseInt($('#contaner').css('font-size')) - 2;
  if(curSize>=8)
        $('#contaner').css('font-size', curSize);
        }); 
 });