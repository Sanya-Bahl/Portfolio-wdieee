//https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/

//If the element is in the viewport, the function returns true. Otherwise, it returns false
function isInViewport(el) {

  const rect = el.getBoundingClientRect();
  return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) ||
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );

}

//We declare the element we want to check is in viewport (in this case the div="skillbar")
const skills = document.querySelector('.skillbar');

var proceed = 1;

document.addEventListener('scroll', function () {
  
  // If 'skills' is showing in our current view, then go ahead to load the progress bar
  if (isInViewport(skills) && proceed)
  {
    // Main code for progress bar: 

    // document.querySelectorAll is a query selector which grabs the elements by its id
    var progress=document.querySelectorAll(".progress-bar") ;
    var i;
    var counter=document.querySelectorAll(".counter") ;
    
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
                positionInfo = progress[i].getBoundingClientRect();
                var pro=parseFloat(parseFloat(progress[i].getAttribute('data-percent')));
                
                if(pro==positionInfo.width)
                  clearInterval();
                else
                {
                  progress[i].style.width=`${positionInfo.width+1}px`;
                  positionInfo=progress[i].getBoundingClientRect();
                  counter[i].innerHTML=`${Math.floor(positionInfo.width)}%`;
                }
              
              },10)
      })(i);

    }
    // Code for progess bar ends here

    //To prevent the function from running again, it stops when we find 'skills'
    proceed = 0;
  }
});