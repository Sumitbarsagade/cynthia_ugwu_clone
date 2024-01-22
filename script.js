const scroll = new LocomotiveScroll({
    el: document.querySelector('#main-container'),

    smooth: true
});

var timeout;
function bulgeCircle() {
    //define default scale value
    var xscale = 1;
    var yscale = 1;
    
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout)  
        
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)

        xprev = dets.clientX;
        yprev = dets.clientY;

        movecursor(xscale, yscale);

        timeout = setInterval(function()  {
            document.querySelector('#moving_circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`
        }, 100);




    })

}

bulgeCircle();
function movecursor(xscale,yscale) {



    window.addEventListener("mousemove", function (dets){
        document.querySelector('#moving_circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`
    })
}

movecursor();
 


function linkclick() {

    
}

linkclick()

function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from("#navbar",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
         ease:Expo.easeInOut
    })
    .to(".bounding_ele", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger:.2
    })
    .from(".links_section",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay:-1,
         ease:Expo.easeInOut
    })
    
}


// function moveimage1() {
    
//     var elem = document.querySelectorAll("#product_1")[0]
//     console.log(elem)
//     var rotate = 0;
//     var diffrot = 0;
     
//     elem.addEventListener("mouseleave", function (dets) {
        
//         gsap.to(elem.querySelector("img"), {
//             opacity: 0,
            
//             ease: Power3,
            
//         })
//         gsap.to(elem.querySelector(".product_name"), {
//             x: '-6',
//             opacity:.8,
//             ease: Power3,
          
//         })
        

//     })

//     elem.addEventListener("mousemove", function (dets) {


//         document.querySelector('#moving_circle').style.display = "none";
         
//         var diff = dets.clientY - elem.getBoundingClientRect().top ;
//         diffrot = rotate- dets.clientX;
//         rotate = dets.clientX;
         
//         gsap.to(elem.querySelector("img"), {
//             opacity: 1,
//             ease: Power3,
//             top: diff,
//             left: dets.clientX,
          
//             rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//         })

//         gsap.to(elem.querySelector(".product_name"), {
//             x: '20',
//             opacity:.6,
//             ease: Power3,
//            transform: 'translateX(-20)',   
//         })




//     })

// }
// function moveimage2() {
    
//     var elem1 = document.querySelectorAll("#product_2")[0]
    
//     var rotate = 0;
//     var diffrot = 0;

//     elem1.addEventListener("mouseleave", function (dets) {
        
//         gsap.to(elem1.querySelector("img"), {
//             opacity: 0,
//             ease: Power1,
            
            
//         })

//         gsap.to(elem1.querySelector(".product_name"), {
//             x: '-6',
//             opacity:.8,
//             ease: Power3,
          
//         })
//     })

//     elem1.addEventListener("mousemove", function (dets) {
        
        
//         var diff = dets.clientY - elem1.getBoundingClientRect().top ;
        
    
//         diffrot =  dets.clientX-rotate;  
//         rotate = dets.clientX;
//         gsap.to(elem1.querySelector("img"), {
//             opacity: 1,
//             ease: Power1,
//             top: diff + 100,
//             left: dets.clientX,
            
//             rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//         });

//         gsap.to(elem1.querySelector(".product_name"), {
//             x: '20',
//             opacity:.6,
//             ease: Power3,
//            transform: 'translateX(-20)',   
//         })
//     })

// }


// function moveimage3() {
    
//     var elem = document.querySelectorAll("#product_3")[0]

//     var rotate = 0;
//     var diffrot = 0;
     
//     elem.addEventListener("mouseleave", function (dets) {
        
//         gsap.to(elem.querySelector("img"), {
//             opacity: 0,
//             ease: Power3,
            
            
//         })

//         gsap.to(elem.querySelector(".product_name"), {
//             x: '-6',
//             opacity:.8,
//             ease: Power3,
          
//         })
//     })

//     elem.addEventListener("mousemove", function (dets) {
        
        
//         var diff = dets.clientY - elem.getBoundingClientRect().top ;
        
        
//         diffrot =  dets.clientX-rotate;  
//         rotate = dets.clientX;
//         gsap.to(elem.querySelector("img"), {
//             opacity: 1,
//             ease: Power3,
//             top: diff+ 250,
//             left: dets.clientX,
          

//             rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//         });

//         gsap.to(elem.querySelector(".product_name"), {
//             x: '20',
//             opacity:.6,
//             ease: Power3,
//            transform: 'translateX(-20)',   
//         })
//     })

// }

// moveimage1()
// moveimage2()
// moveimage3()

// document.querySelectorAll(".product").forEach(function (elem) {  
//     var rotate = 0;
//     var diffrot = 0;
//      console.log(elem)
//     elem.addEventListener("mouseleave", function (dets) {
        
//         gsap.to(elem.querySelector("img"), {
//             opacity: 0,
//             ease: Power3,
            
//         })
//     })


//     elem.addEventListener("mousemove", function (dets) {
        
        
//         var diff = dets.clientY - elem.getBoundingClientRect().top ;
        
//         console.log(diff)
//         diffrot =  dets.clientX-rotate;  
//         rotate = dets.clientX;
//         gsap.to(elem.querySelector("img"), {
//             opacity: 1,
//             ease: Power3,
//             top: diff,
//             left: dets.clientX,
//             rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//         });
//     })

// })




firstPageAnim()




document.querySelectorAll(".links").forEach(function (element) {
   
    element.addEventListener("mouseleave", function (dets) {
          
        gsap.to(element.querySelector(".arrow"), {
            transform: "rotate(-30deg)",
            ease: Power3,
          
          
          });
        
    })
  
    element.addEventListener("mouseenter", function (dets) {
      
      
      
        
        
      gsap.to(element.querySelector(".arrow"), {
        transform: "rotate(0deg)",
        ease: Power3,
      
      
      });
        
        
    });
});
  


let elem = document.querySelectorAll(".product");
   
 
    
// elem.forEach(function (val) {
//     // console.log(val)
//     var rotate = 0;
//     var diffrot = 0;
    
//     val.addEventListener("mouseleave", function (dets) {
//         gsap.to(document.querySelector("img_container"), {
//           display:"none",
//           ease: Power3,
//           duration: 0.5,
//         });
//       });







//     val.addEventListener("mouseenter", function (dets) {


//         document.getElementById("moving_circle").style.display="none"
//         let imgurl = val.getAttribute("img")
//         console.log(imgurl)

//      var diff = dets.clientY - val.getBoundingClientRect().top;
//         diffrot = dets.clientX - rotate;
//         rotate = dets.clientX;
        
       

//         gsap.to( document.querySelector(".img_container"), {
//           display:"block",
//           top:20 +diff,
          
//           left: dets.clientX,
//           rotate: gsap.utils.clamp(-15, 15, diffrot * 0.5),
//         });
        
        

//          document.getElementById("img_contain").children[0].src =`${imgurl}`
    
//     })









// })




document.querySelectorAll(".product").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    
  elem.addEventListener("mouseleave", function (dets) {
    document.getElementById("moving_circle").innerHTML = ""
    document.getElementById("moving_circle").style.width = "30px"
        document.getElementById("moving_circle").style.height = "30px"
      gsap.to(document.querySelector(".img_container"), {
          display:"none",
        ease: Power3,
          duration: 1,
        
      });
    });
    elem.addEventListener("mouseenter", function (dets) {
      
        document.getElementById("moving_circle").style.width = "60px"
        document.getElementById("moving_circle").style.height = "60px"
        
      });
 
   

  
    elem.addEventListener("mousemove", function (dets) {
        
      document.getElementById("moving_circle").innerHTML = "view"
      document.getElementById("moving_circle").style.width = "60px"
      document.getElementById("moving_circle").style.height = "60px"
        document.getElementById("moving_circle").style.transition = "all ease"
      
        document.getElementById("moving_circle").style.textAlign = "center"

      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        let imgurl = elem.getAttribute("img")
         console.log(imgurl)
      gsap.to(document.querySelector(".img_container"), {
        display:"block",
          ease: Power3,
          opacity: 1,
         transition:"all ease",
        top: dets.clientY-150,
        left: dets.clientX-150,
        rotate: gsap.utils.clamp(-20, 20, diffrot ),
      });
        
      document.getElementById("img_contain").children[0].src =`${imgurl}`
    });
});
  


function showmenu() {
  console.log("hello")
  document.querySelector("#navlink").style.display = "block"
  document.querySelector("#navlink").style.transition  = "all ease 3s"
  document.querySelector("#navmenu").style.display = "none"
  document.querySelector(".menubar").style.top = 0
  document.querySelector(".menubar").style.transition = "all ease 2s"
}
function showmenusmall() {
  console.log("hello")
  
  document.querySelector("#navmenu").style.display = "none"
  document.querySelector(".menubar").style.top = 0
  document.querySelector(".menubar").style.transition = "all ease 2s"
}



function closemenu() {
  document.querySelector("#navlink").style.display = "none"
  document.querySelector("#navmenusmall").style.display = "block"
  document.querySelector(".menubar").style.top = "-100vh"
  document.querySelector(".menubar").style.transition = "all ease 2s"

}



document.querySelector("#main-container").addEventListener("mousemove", function (det) {
  
  let target = 0;
  target += det.clientY;
  if (target > 160) {
    document.querySelector("#navlink").style.display = "none"
    document.querySelector("#navmenu").style.display = "block"
    document.querySelector("#navmenu").style.transition= "all ease 5s"
  }
 
})
const date = new Date();
let amorpm =""
if (date.getHours() < 12) {
  amorpm="am"
}
else {
  amorpm ="pm"
}
document.querySelector(".date").innerHTML = date.getHours()+" :"+ date.getMinutes() + amorpm.toUpperCase() +" EST"
