const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
// Grab the shop sec and change the background  image here if could be
const shop = navLinks.firstElementChild;
const section = document.getElementById("hero");
// adding the even listener the can listen to the shop click

// console.log(navLinks.children)

navLinks.childNodes.forEach((link) => {
  console.log(link.textContent);

  link.addEventListener("click", () => {
    switch (link.textContent) {
      case "Shop":
        section.style.backgroundImage = `url("https://images.unsplash.com/photo-1634996086190-431e727e490a?q=80&w=3018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`;
        break;
      case "men":
        section.style.backgroundImage = `url("https://images.unsplash.com/photo-1558128242-6e97528bf8fb?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`;
        break;
      case "Women":
        section.style.backgroundImage = `url("https://images.unsplash.com/photo-1521093470119-a3acdc43374a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmlrZSUyMGFpciUyMG1lbnNob2VzJTIwc2hlbGZ8ZW58MHx8MHx8fDA%3D)`;
        break;
      case "Kids":
        section.style.backgroundImage = `url("https://images.unsplash.com/flagged/photo-1555895361-b7fa814c0d26?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`;
        break;

      case "Customize":
        section.style.backgroundImage = `url("https://images.unsplash.com/photo-1585750130716-42e238075a88?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`;
        break;
      case "Sale":
        section.style.backgroundImage = `url("https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?q=80&w=2903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`;
        break;
      default:
        break;
    }

   
  });
});

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
});
