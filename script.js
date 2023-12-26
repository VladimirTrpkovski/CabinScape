const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active")
        menu.classList.remove("active")
    })
    );



    document.querySelectorAll('.images img').forEach(image =>{
        image.onclick = () =>{
          document.querySelector('.popup').style.display = 'block';
       document.querySelector('.popup img').src = image.getAttribute('src');
        }
      });
      document.querySelector('.popup span').onclick = () =>{
        document.querySelector('.popup').style.display = 'none'
      };