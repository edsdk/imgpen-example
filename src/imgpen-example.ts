import * as ImgPen from "@edsdk/imgpen"

// Attach listeners when page is loaded
window.addEventListener("DOMContentLoaded", function() {

    // ----------------------
    //       Example 1
    // ----------------------

    // Attaching to image element on page
    let elImg = document.querySelector("#img") as HTMLImageElement;
    elImg.addEventListener("click", function() {

        // Show loading text
        let elText = elImg.nextElementSibling;
        elText.textContent = "Loading...";

        // Edit and image
        ImgPen.editImage({
            urlImage: elImg.src,      // URL of image we edit
            urlUploader: "/uploader", // URL of uploader
            urlFiles: "/images",      // URL of uploaded files are stored on
            onSave: (url: string) => {
                // Image was edited and saved, update image element on page
                elImg.src = url;
                elText.textContent = "Image updated";
            }
        });

    });

    // ----------------------
    //       Example 2
    // ----------------------

    let elBtn = document.querySelector("#btn") as HTMLImageElement;
    let elUrl = document.querySelector("#url") as HTMLInputElement;
    let elPreview = document.querySelector("#preview") as HTMLInputElement;

    // Attach to the button
    elBtn.addEventListener("click", function() {

        // Edit the image when the button is clicked
        ImgPen.editImage({
            urlImage: elUrl.value,    // URL of image we edit
            urlUploader: "/uploader", // URL of uploader
            urlFiles: "/images",      // URL prefix for generating path to the images
            onSave: (urlImage: string) => {
                elUrl.value = urlImage;   // Update URL in the textbox
                elPreview.src = urlImage; // Update image preview
            }
        });

    });

    let urlChanged = () => {
        // Update the preview by specified URL
        elPreview.src = elUrl.value;
    };
    // Listen for URL changes to update the preview
    elUrl.addEventListener("change", urlChanged);
    elUrl.addEventListener("keyup", urlChanged);
    elUrl.addEventListener("paste", urlChanged);

});