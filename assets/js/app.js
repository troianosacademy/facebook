let textarea = document.querySelector('textarea');
let userDrodown = document.querySelector(".user-dropdown");
let dropdown = document.querySelector(".dropdown");
let mainContainer = document.querySelector(".main");

textarea.addEventListener('keydown', autosize);
userDrodown.addEventListener("click", toggleDropdown);
mainContainer.addEventListener("click", closeDropdown);
             
function autosize(){
  let el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
};

function closeDropdown() {
  let checkOpen = hasClass(dropdown,'open');
  if(checkOpen) {
    dropdown.style.display = 'none';
    dropdown.classList.remove("open");
  }
}

function toggleDropdown() {
  let checkOpen = hasClass(dropdown,'open');
  dropdown.style.top = '40px';
  dropdown.style.right = 0;
  if(checkOpen) {
    dropdown.style.display = 'none';
    dropdown.classList.remove("open");
  }else {
    dropdown.style.display = 'block';
    dropdown.classList.add("open");
  }
  
}

function hasClass(element, classname) {
  if (element.className.split(' ').indexOf(classname)>=0) {
    return true;
  }
  return false;
}