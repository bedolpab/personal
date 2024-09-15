particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100, // More particles for a detailed effect
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" // White particles
        },
        "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.3,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 2,
                "size_min": 1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#ffffff", // White lines
            "opacity": 0.8,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        },
        "shape": {
            "type": "none" // No shapes
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble" // Bubble effect on hover
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Add particles on click
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 300,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 300,
                "size": 20,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 150
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "config_demo": {
        "hide_card": false,
        "background_color": "#001f3f", // Dark blue background for a space-like feel
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
});
