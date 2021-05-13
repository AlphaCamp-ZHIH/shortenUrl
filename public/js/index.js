const urlArea = document.querySelector('#urlArea');
const btn = document.querySelector('button');
btn.addEventListener('click',(event)=>{
event.preventDefault();
  urlArea.select();
  document.execCommand('copy')

});