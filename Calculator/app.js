const keys = document.querySelector('.calc-keys')
const display = document.getElementById('display')

 

keys.addEventListener('click' ,(event) => {
    let target = event.target;
        if(!target.matches('button')){
        return false; 
    }
  if(target.classList.contains('equal')){
   try{
    let result = eval(display.value)
    display.value= result;
   }catch(e){
        if(e instanceof SyntaxError){
            alert('hey its not allowed')
            display.value = ''
        }
   }

  
    
  }else if(target.classList.contains('all-clear')){
      display.value =''
  }else{
      display.value += target.value
  }
})