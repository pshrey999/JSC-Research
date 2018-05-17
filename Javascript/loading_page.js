particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 550
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": true
        }
      },
      "size": {
        "value": 7,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "size_min": 0.1,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 160,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": .75
      },
      "move": {
        "enable": true,
        "speed": 8,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bubble",
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "remove"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 1000,
          "size": 100,
          "duration": 5,
          "opacity": 8,
          "speed": 2.5
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
var jquery_js = document.createElement('script'); 
jquery_js.src = '../Frameworks/jquery/jquery-v3.3.1.js';
jquery_js.onload = function() { 
  console.log('jQuery loaded.');
};
document.head.appendChild(jquery_js);
var three_js = document.createElement('script');
three_js.src = '../Frameworks/Three.js/three.js-master/build/three.js';
three_js.onload = function(){
    console.log('Three Js has loaded');
};
document.head.appendChild(three_js);
var threeJsOrbitControls_js = document.createElement('script');
threeJsOrbitControls_js.src = '../Frameworks/Three.js/three.js-master/examples/js/controls/OrbitControls.js';
threeJsOrbitControls_js.onload = function() {
    console.log('Three js orbital control has loaded');
};
document.head.appendChild(threeJsOrbitControls_js);
//  function dynamicallyLoadScript(url) {
    //var three_js = document.createElement('script'); // Make a script DOM node
    //three_js.src = '../Frameworks/Three.js/three.js-master/build/three.js'; // Set it's src to the provided URL
    //three_js.onLoad = function() {
     //   console.log('Three js loaded');
    //};
    //document.body.appendChild(three_js); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    //var threeJsOrbitalControls_js = document.createElement("script");
    //threeJsOrbitalControls_js.src = '../Frameworks/Three.js/three.js-master/examples/js/controls/OrbitControls.js';
   // document.head.appendChild(body);
   // var jquery_js = document.createElement("script"); 
   // jquery_js.src = ;
   // document.head.appendChild(body);
//};