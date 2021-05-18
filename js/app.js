// top cusdor
topbtn = document.getElementById("top-btn");
window.onscroll=function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop >100 || document.documentElement.scrollTop>100){
        topbtn.style.display="block";
    }else{
        topbtn.style.display="none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
}
// top cursor


// https://api.covid19api.com/summary
// https://api.covid19india.org/data.json
// loader
let preloader = document.getElementById('loader');
          function loading() {
            preloader.style.display = "none";
          }

//   smooth scrool
