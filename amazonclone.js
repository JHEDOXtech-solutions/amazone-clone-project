// ---------- LOGIN / SIGNUP POPUP ----------
document.addEventListener("DOMContentLoaded", () => {
  const signInButton = document.querySelector(".nav-item .small");
  
  signInButton.addEventListener("click", () => {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");
    
    if (username && password) {
      alert(`Welcome, ${username}! You are signed in.`);
      signInButton.textContent = `Hello, ${username}`;
    } else {
      alert("Please enter valid login details!");
    }
  });

  // ---------- CART COUNTER ----------
  const cartIcon = document.querySelector(".nav-cart");
  const cartCount = document.querySelector(".cart-count");
  let count = 0;

  cartIcon.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
  });

  // ---------- SEARCH FUNCTION ----------
  const searchBtn = document.querySelector(".nav-button");
  const searchInput = document.querySelector(".nav-input input");

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query !== "") {
      alert(`You searched for: "${query}"`);
    } else {
      alert("Please type something to search.");
    }
  });

  // ---------- BACK TO TOP BUTTON ----------
  const backToTop = document.querySelector(".footer-top a");
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // ---------- HOVER EFFECTS ----------
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
      box.style.transform = "scale(1.06)";
      box.style.transition = "0.3s";
      box.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    });

    box.addEventListener("mouseleave", () => {
      box.style.transform = "scale(1)";
      box.style.boxShadow = "none";
    });
  });

  // ---------- HERO MESSAGE CLICK ----------
  const heroMessageLink = document.querySelector(".hero-mess a");
  heroMessageLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Redirecting to Amazon deals...");
  });
});
