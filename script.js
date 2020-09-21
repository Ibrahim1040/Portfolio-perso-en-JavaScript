// Navbar //
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageTOffset ||
        this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
// TYPED //
var typed = new Typed('.typed', {
    strings: ["Je me présente en quelques lignes",
        "Après une dizaine de petit boulot et une carrière en tant que chauffeur de taxi, j'ai décidé de me lancer dans l apprentissage du code. Je suis ainsi retourné sur les bancs de l'école à 40 ans ou j'ai obtenu mon bachelier en tant qu'analyste développeur. J'ai également suivi une formation de web designer et obtenu mon diplome pour le front-end. Plus qu'un avenir professionel, je me suis découvert une passion, celle de coder."

    ],
    typeSpeed: 40,
    backSpeed: 0,
    smartBackspace: true,
    loop: false
});

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function () {
    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function () {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, 
            {
                duration: 10000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
});

//Aos
AOS.init();