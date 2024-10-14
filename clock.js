const hrs=document.querySelector('#hrs');
const min=document.querySelector('#min');
const sec=document.querySelector('#sec');

setInterval(()=>{
    let currtime=new Date()
    hrs.innerHTML=currtime.getHours();
    min.innerHTML=currtime.getMinutes();
    sec.innerHTML=currtime.getSeconds();
    
},1000)


