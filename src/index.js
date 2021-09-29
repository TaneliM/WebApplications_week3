import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  var breeds = ["keeshond", "dachshund", "beagle", "corgi", "husky"];
  breeds = breeds.sort(); // :)

  breeds.forEach((breed) => {
    var wikiItem = document.createElement("div");
    var wikiTitle = document.createElement("h1");
    var wikiContent = document.createElement("div");
    var wikiText = document.createElement("p");
    var wikiImageContainer = document.createElement("div");
    var wikiImage = document.createElement("img");

    wikiItem.className = "wiki-item";
    wikiTitle.className = "wiki-header";
    wikiContent.className = "wiki-content";
    wikiText.className = "wiki-text";
    wikiImageContainer.className = "img-container";
    wikiImage.className = "wiki-img";

    wikiTitle.textContent = breed;
    wikiText.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc libero, eget suscipit urna dapibus non. Nunc cursus hendrerit ipsum, nec viverra sem dapibus id. Aliquam luctus fermentum arcu. Proin ultrices, velit eu sagittis suscipit, magna dolor malesuada sapien, non dictum diam dolor ut ligula.";

    let RandomImageUrl =
      "https://dog.ceo/api/breed/" + breed + "/images/random";
    let TextUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/" + breed;

    fetchImageUrl(RandomImageUrl, wikiImage);
    fetchText(TextUrl, wikiText);

    wikiImageContainer.appendChild(wikiImage);
    wikiContent.appendChild(wikiText);
    wikiContent.appendChild(wikiImageContainer);
    wikiItem.appendChild(wikiTitle);
    wikiItem.appendChild(wikiContent);

    var container = document.getElementsByClassName("container");
    container[0].appendChild(wikiItem);
  });
}

async function fetchImageUrl(url, wikiImage) {
  let response = await fetch(url);
  let image = await response.json();
  wikiImage.src = image.message;
}

async function fetchText(url, wikiText) {
  let response = await fetch(url);
  let data = await response.json();
  wikiText.textContent = data.extract;
}
