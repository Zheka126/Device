var brend_image = document.querySelector(".brend_item");
var brend_image_color = document.querySelector(".brend_item_color");


brend_image.addEventListener("hover", function (evt) {
    evt.preventDefault(); 
    brend_image.classList.add("visually_hidden");

}); 