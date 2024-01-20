// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const API_KEY = "41919637-6a9ae3694a8b7e5cab5cbae88";
const BASE_URL = "https://pixabay.com/api/";
const galleryElement = document.getElementById("gallery");
const loaderElement = document.getElementById("loader");

let lightbox;

function showLoader() {
  loaderElement.style.display = "block";
}

function hideLoader() {
  loaderElement.style.display = "none";
}

function displayImages(images) {
  galleryElement.innerHTML = ""; // Очищення галереї перед відображенням нових зображень

  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;
    imgElement.addEventListener("click", () => openLightbox(image.largeImageURL));
    galleryElement.appendChild(imgElement);
  });

  // Оновлення SimpleLightbox галереї
  lightbox.refresh();
}

function openLightbox(imageURL) {
  lightbox.open({ items: [{ src: imageURL }] });
}

function showMessage(message) {
  iziToast.show({
    title: "Info",
    message: message,
    position: "topCenter",
    timeout: 3000,
  });
}

async function searchImages(query) {
  showLoader();

  try {
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
    );
    const data = await response.json();

    if (data.hits && data.hits.length > 0) {
      displayImages(data.hits);
    } else {
      showMessage("Sorry, there are no images matching your search query. Please try again!");
    }
  } catch (error) {
    showMessage("An error occurred while fetching images. Please try again later.");
  } finally {
    hideLoader();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  lightbox = new SimpleLightbox("#gallery a");


});
