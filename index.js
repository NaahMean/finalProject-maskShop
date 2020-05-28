// opens dropdown on click and closes back on second click  or click outside box 

function myFunction() {
  document.getElementById("types").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {
    var dropdowns = document.getElementsByClassName("gallery");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// to implement sliders

var images = [
    'mask1.jpg',
    'mask2.jpg',
    'mask3.png',
    'mask4.jpg',
    'mask5.jpg', 
    'mask6.jpg',
    'mask7.jpg',
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

/* implement pop up image */
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// closes the modal
var span = document.getElementsByClassName("close")[0];

// (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}