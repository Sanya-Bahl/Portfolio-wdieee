// document.querySelectorAll is a query selector which grabs the elements by its id
var progress=document.querySelectorAll(".progress-bar") 
var i;
var counter=document.querySelectorAll(".counter") 
for(i=0; i<progress.length; i++)
{
    // getAttribute is used to grab custom data(data attribute) present in html
// parseFloat() converts this data of "string" type to "number" type


/* setInterval() calls function 'myProgress' after every interval of 10 ms to update 
the width of the 'progress-bar' */
// var positionInfo;
// var counter=document.querySelectorAll(".counter")

(function count(i) {
    
    
        setInterval(function() {
            positionInfo=progress[i].getBoundingClientRect()
            var pro=parseFloat(parseFloat(progress[i].getAttribute('data-percent')));
          if(pro==positionInfo.width)
          clearInterval();
          else
          {
            progress[i].style.width=`${positionInfo.width+1}px`
            positionInfo=progress[i].getBoundingClientRect()
            console.log(positionInfo.width)
            counter[i].innerHTML=`${Math.floor(positionInfo.width)}%`
          }
        
        },10)
})(i);


 
}
