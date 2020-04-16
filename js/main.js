function openServiceDescription(obj){      
  let id = obj.id;
  let container = document.getElementById('ta-' + id[id.length-1]);
  let containers = document.getElementsByClassName('service__wrapper_visible');
  let buttons = document.getElementsByClassName('btn__service');

  
  if(containers.length > 0){
    for (let i = 0; i < containers.length; i++) {
      containers[i].classList.remove('service__wrapper_visible');      
    }        
  }
  if(buttons.length > 0){
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('arrow_open');      
    }
  }

  obj.classList.toggle('arrow_open');   
  container.classList.toggle('service__wrapper_visible'); 
}
