/*=========================================
ACTIVE NAVBAR
=========================================*/
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

/*=========================================
SCROLL TO TOP
=========================================*/
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/*=========================================
NEWSLETTER VALIDATION
=========================================*/
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("newsletterEmail").value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email.");
            return;
        }

        alert("🎉 Successfully Subscribed!");
        this.reset();
    });
}

/*=========================================
CONTACT FORM VALIDATION
=========================================*/
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
        if (name === "") {
            alert("Enter your name.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Enter a valid email.");
            return;
        }

        if (subject === "") {
            alert("Enter subject.");
            return;
        }

        if (message.length < 10) {
            alert("Message must contain at least 10 characters.");
            return;
        }

        alert("✅ Message Sent Successfully!");
        this.reset();
    });
}

/*=========================================
SMOOTH SCROLL
=========================================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/*=========================================
REVEAL ANIMATION
=========================================*/
const revealElements = document.querySelectorAll(
    ".category-card,.product-card,.why-card,.testimonial-card,.offer-box"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });

}, {
    threshold: 0.2
});

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all .8s ease";
    observer.observe(el);
});

/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/
const buttons = document.querySelectorAll(".btn-shop,.cart-btn");
buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        const rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        this.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

console.log("✅ ShopEase Loaded Successfully");