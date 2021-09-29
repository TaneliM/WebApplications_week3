import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  var breeds = ["shiba", "pembroke", "samoyed", "corgi", "husky"];
  breeds = breeds.sort(); // I'm lazy

  for (var i = 0; i < breeds.length; i++) {
    var wikiItem = document.createElement("div");
    var wikiTitle = document.createElement("h1");
    var wikiContent = document.createElement("div");
    var wikiText = document.createElement("p");
    var wikiImage = document.createElement("img");

    wikiItem.className = "wiki-item";
    wikiTitle.className = "wiki-header";
    wikiContent.className = "wiki-content";
    wikiText.className = "wiki-text";
    wikiImage.className = "wiki-img";

    wikiTitle.textContent = breeds[i];
    wikiText.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc libero, eget suscipit urna dapibus non. Nunc cursus hendrerit ipsum, nec viverra sem dapibus id. Aliquam luctus fermentum arcu. Proin ultrices, velit eu sagittis suscipit, magna dolor malesuada sapien, non dictum diam dolor ut ligula. Quisque a neque congue, ullamcorper leo sed, ultricies nisi. Praesent gravida, purus et interdum dictum, odio ligula tincidunt ante, pretium varius nisi urna ut mauris. Sed at accumsan ligula, at sagittis est. Etiam at vestibulum sapien, vitae sollicitudin mauris. Nam non quam eleifend, tincidunt lorem sollicitudin, pharetra sapien. Etiam eleifend justo lectus, nec eleifend justo maximus sed.";

    let url = "https://dog.ceo/api/breed/" + breeds[i] + "/images/random";

    fetchImageUrl(url, wikiImage);

    wikiContent.appendChild(wikiText);
    wikiContent.appendChild(wikiImage);
    wikiItem.appendChild(wikiTitle);
    wikiItem.appendChild(wikiContent);

    var container = document.getElementsByClassName("container");
    container[0].appendChild(wikiItem);
  }
}

async function fetchImageUrl(url, wikiImage) {
  let response = await fetch(url);
  let image = await response.json();
  wikiImage.src = image.message;
}
