/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/imgpen-example.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@edsdk/image-editor/dist/imageeditorsdk.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@edsdk/image-editor/dist/imageeditorsdk.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function editImage(urlImg, urlUploader, urlFiles, destinationDir, onSaveListener) {
    includeJS('//cdn.imageeditorsdk.com/imageeditorsdk.js', function () {
        window.ImageEditorSDK.editImage(urlImg, urlUploader, urlFiles, destinationDir, onSaveListener);
    });
}
exports.editImage = editImage;
function includeJS(url, onIncluded) {
    var scripts = document.getElementsByTagName("script");
    var alreadyExists = false;
    for (var i = 0; i < scripts.length; i++) {
        var src = scripts[i].getAttribute("src");
        if (src != null && src.indexOf(url) !== -1)
            alreadyExists = true;
    }
    if (!alreadyExists) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (onIncluded != null) {
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState === "loaded" || script.readyState === "complete") {
                        script.onreadystatechange = null;
                        onIncluded();
                    }
                };
            }
            else {
                script.onload = function () {
                    onIncluded();
                };
            }
        }
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    else {
        if (onIncluded != null)
            onIncluded();
    }
}


/***/ }),

/***/ "./src/imgpen-example.ts":
/*!*******************************!*\
  !*** ./src/imgpen-example.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ImageEditor = __webpack_require__(/*! @edsdk/image-editor */ "./node_modules/@edsdk/image-editor/dist/imageeditorsdk.js");
// Attach listeners when page is loaded
window.addEventListener("DOMContentLoaded", function () {
    // ----------------------
    //       Example 1
    // ----------------------
    // Attaching to image element on page
    let elImg = document.querySelector("#img");
    elImg.addEventListener("click", function () {
        // Show loading text
        let elText = elImg.nextElementSibling;
        elText.textContent = "Loading...";
        // Edit and image
        ImageEditor.editImage(elImg.src, // URL of image we edit
        "/uploader", // URL of uploader
        "/images", // URL prefix for generating path to the images
        "", // Dir on server for result image (from uploader root directory)
        (urlImage) => {
            // Image was edited and saved, update image element on page
            elImg.src = urlImage;
            elText.textContent = "Image updated";
        });
    });
    // ----------------------
    //       Example 2
    // ----------------------
    let elBtn = document.querySelector("#btn");
    let elUrl = document.querySelector("#url");
    let elPreview = document.querySelector("#preview");
    // Attach to the button
    elBtn.addEventListener("click", function () {
        // Edit the image when the button is clicked
        ImageEditor.editImage(elUrl.value, // URL of image we edit
        "/uploader", // URL of uploader
        "/images", // URL prefix for generating path to the images
        "", // Dir on server for result image (from uploader root directory)
        (urlImage) => {
            elUrl.value = urlImage; // Update URL in the textbox
            elPreview.src = urlImage; // Update image preview
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


/***/ })

/******/ });