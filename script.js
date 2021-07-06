// Get the modal

console.log("hello world")
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const readMore = document.querySelectorAll("button");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// readMore.onclick = function() {
//   modal.style.display = "block";
//   console.log("clicked")
// }

for (let i = 0; i < readMore.length; i++)
readMore[i].addEventListener("click", function () {
  console.log("clicked");
  modal.style.display = "block";
  
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 