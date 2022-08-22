/* defining global variables */
const navLi = document.getElementById("navbar__list");
const sections = Array.from(document.getElementsByTagName("section"));
const topBtn = document.getElementById("dugme");
const lis = Array.from(document.querySelectorAll('li'));

/* building navigation bar through loop over sections and creating new li element to each and used for loop
to count sections then implemented link to each section using id and datanav to the new created element 
and finally implemented the new created element to the ul */

function navigationB() {
 
 sections.forEach((section) => {
  let li =document.createElement("li");
     li.innerHTML =`<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
   navLi.appendChild(li);

  })
};

/*calling the navigation building to finish the function*/

navigationB();


/*using add event listener with event scroll to add and remove aLive class list to the shown section on page and the section position is identified through getBoundingClientRect */

document.addEventListener("scroll" , () => {
 
  sections.forEach((shown) => {


    if (shown.getBoundingClientRect().top >=-400 &&
      shown.getBoundingClientRect().top <= 150) {
        shown.classList.add("aLive");
    }
    else {
    shown.classList.remove("aLive"); 
    }
  });
});
/* using window property and set function to scroll event when scrolling reaches the last section it shows top! button */ 
window.onscroll = function () {scrollFunc()};

  function scrollFunc() {
    if (window.scrollY >= 2500) {
      topBtn.style.display = "inline-block";
    }
    else {
      topBtn.style.display = "none";
    }
  };
/* function responds to click on button and scrolls to top of the page */
function topTop() {
    window.scrollTo({top,
    behavior:"smooth"})
      document.querySelector('.highlight').classList.remove('highlight');
  };
/* loop through links and add event (click) to each to scroll smoothly to clicked link position in page */ 
  document.querySelectorAll('a').forEach(one => {
    one.addEventListener('click', function (x) {
      x.preventDefault();
      let z=document.querySelector(this.getAttribute('href'));
      z.scrollIntoView({behavior:'smooth'});
      
    });
});

/* add event listener to each li element which contains nav items 
to click event highlighting current target and also removing the 
previous clicked highlight class  */
 
document.querySelectorAll('li').forEach(one => {
  one.addEventListener('click', function (y) {
    y.preventDefault();
      let old =document.querySelector('.highlight');
      if (old) {
        old.classList.remove('highlight');
      }
    event.currentTarget.classList.add('highlight');
  });
});