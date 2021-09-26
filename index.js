function scuberGreetingForFeet(num){
  // Write your code here!
  if(num < 400 || num === 400)
  {
      return 'This one is on me!'
  }
  else if(num > 2000)
  {
      return 'I will gladly take your thirty bucks.'
  }
  else if(num > 2500)
  {
      return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  
  if(city === 'NYC')
  {
      return "Ok, sounds good."
  }
  else 
  {
      return "No go."
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
 /* if(tip === 'generous')
  {
      return 'Thank you so much.'
  }
  else if(tip === 'not as generous')
  {
      return "Thank you."
  }
  else if(tip === 'thanks for everything')
  {
      return 'Bye.'
  }
*/
  switch(tip){
    case 'generous': 
        tip = 'Thank you so much.'
        break;
    case 'not as generous': 
        tip = 'Thank you.'
        break;
    case 'thanks for everything': 
        tip = 'Bye.'
        break;
    

  }
  return tip;
}

