particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // Adjust for more or fewer particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" // White particles
        },
        "shape": {
            "type": "circle", // Circle shape for star-like particles
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5, // Slightly transparent particles
            "random": false,
            "anim": {
                "enable": false, // Static opacity
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5, // Particle size
            "random": true,
            "anim": {
                "enable": false, // Static size
                "speed": 2,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 300, // Distance between connected particles
            "color": "#ffffff", // White lines
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2, // Particle movement speed
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out", // Particles move out of the canvas
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Repulse effect on hover
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Add particles on click
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
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200 // Distance for repulsion effect
            },
            "push": {
                "particles_nb": 4 // Number of particles added on click
            },
            "remove": {
                "particles_nb": 2 // Number of particles removed
            }
        }
    },
    "retina_detect": true,
    "config_demo": {
        "hide_card": false,
        "background_color": "#000000", // Dark background for space effect
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
});
