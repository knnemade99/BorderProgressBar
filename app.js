function draw(val) {
  const rect = document.querySelector(".progress-rect");
  const loading = document.querySelector(".loading");
  
  const circumference = rect.getTotalLength();
  
  rect.style.strokeDashoffset = circumference - (val / 100) * circumference;
  loading.innerHTML = val + "%";
}

function ch(val){
  var c = 0;
  const interval = setInterval((val)=>{
    draw(c);
    if(c<val)
      c+=1;
    else{
      clearInterval(interval);
    }
  },30, val)
}
  
