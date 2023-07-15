// open navigation menu
const mobileNav = document.querySelector('.mobile-nav')
function closeMenu() {
  mobileNav.classList.toggle('active')  
  
}


// close navigation menu
function openMenu() {
    
  mobileNav.classList.toggle('active')
}




// logo image change on mouseenter
const selfieImage = document.querySelector('.selfie')
function changeImage() {
    selfieImage.src = 'images/wavingmoji.webp'
}

// logo image change on mouseleave
function changeImageBack() {
    selfieImage.src = 'images/selfiemoji.webp'
}

// work marquee scroll
function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    console.log(firstElement);
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);
  
    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }
  
  //after window is completed load
  //1 class selector for marquee
  //2 marquee speed 0.2
  window.addEventListener('load', Marquee('.work-marquee', 0.1))

  // contact marquee scroll
function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    console.log(firstElement);
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);
  
    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }
  
  //after window is completed load
  //1 class selector for marquee
  //2 marquee speed 0.2
  window.addEventListener('load', Marquee('.contact-marquee', 0.1))