/*==============================toggle icon navbar============== */
let menuIcon=document.querySelector('#menu-icon');//Bu bölümdeki bütün kodlar bizim ekranımız küçültüğünde çıkan hambur ger butona tıklayınca menünün açılmasını sağlıyor.
let navbar=document.querySelector('.navbar');

menuIcon.onclick= () =>{
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};


/*==============================scroll sections active link============== */
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
/*==============================Read More and Read less ============== */
document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById("read-more");
    const readLessBtn = document.getElementById("read-less");
    const hiddenParagraph = document.querySelector(".hidden");

    // Başlangıçta "Read Less" butonunu gizle
    readLessBtn.style.display = "none";

    readMoreBtn.addEventListener("click", function(event) {
        event.preventDefault();
        hiddenParagraph.style.display = "block";
        readMoreBtn.style.display = "none";
        readLessBtn.style.display = "block"; // Read Less butonunu göster
    });

    readLessBtn.addEventListener("click", function(event) {
        event.preventDefault();
        hiddenParagraph.style.display = "none";
        readMoreBtn.style.display = "block";
        readLessBtn.style.display = "none"; // Read Less butonunu gizle
    });
});



window.onscroll= () =>{
	sections.forEach(sec => {
		let top=window.scrollY;
		let offset=sec.offsetTop-150;
		let height=sec.offsetHeight;
		let id=sec.getAttribute('id');

		if(top>= offset && top < offset + height){
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		}
	});
	/*==============================sticky navbar============== */
	let header=document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 100);
	/*==============================remove toggle icon and navbar when click navbar link (scroll)============== */
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

/*==============================scroll reveal============== */
ScrollReveal({//Bu bölümdeki bütün kodlar bizim yazılarımızın ve fotomuzun sağdan soladan gelmesini sağlıyor.
	reset: true,
	distance: '80px',
	duration: 2000,
	delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});

/*==============================typed js============== */
const typed =new Typed('.multiple-text',{
	strings: ['FullStack Developer', 'Future', 'Blogger'],
	typeSpeed:100,
	backSpeed:100,
	backDelay:100,
	loop:true
});