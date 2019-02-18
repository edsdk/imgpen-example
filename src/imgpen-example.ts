import * as ImageEditor from "@edsdk/image-editor"

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
        ImageEditor.editImage(
            elImg.src,   // URL of image we edit
            "/uploader", // URL of uploader
            "/images",   // URL prefix for generating path to the images
            "",          // Dir on server for result image (from uploader root directory)
            (urlImage: string) => {
                // Image was edited and saved, update image element on page
                elImg.src = urlImage;
                elText.textContent = "Image updated";
            }
        );

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
        ImageEditor.editImage(
            elUrl.value, // URL of image we edit
            "/uploader", // URL of uploader
            "/images",   // URL prefix for generating path to the images
            "",          // Dir on server for result image (from uploader root directory)
            (urlImage: string) => {
                elUrl.value = urlImage; // Update URL in the textbox
                elPreview.src = urlImage; // Update image preview
            }
        );

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