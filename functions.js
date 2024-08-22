import { previewsDiv, form, input, inputValue, playerDiv } from "./vars";

export async function findingVideo() {
  try {
    if (input.value === "") {
      alert("enter any name");
    } else {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDnDFV7weuMqrXTcSNV8dlRqGX7zvyAHC0&q=${inputValue}&type=video`
      );
      const data = await response.json();
      renderVideos(data.items);
    }
  } catch {
    alert("error");
  } finally {
    form.reset();
  }
}

const renderVideos = (array) => {
  let id;
  previewsDiv.innerHTML = ``;
  array.forEach((item) => {
    id = item.id.videoId;
    let img = document.createElement("img");
    img.id = `https://www.youtube.com/embed/${id}`;
    img.src = `https://i.ytimg.com/vi/${id}/default.jpg`;
    previewsDiv.append(img);
  });
};

export const selectVideo = (event) => {
  if (event.target.matches("img")) {
    let attribute = event.target.getAttribute("id");
    playerDiv.setAttribute("src", attribute);
  }
};
