const container = document.getElementById("container");
fetch("https://coffee.alexflipnote.dev/random.json")
  .then((res) => res.json())
  .then((data) => {
    const img = document.getElementById("img-card");
    img.src = data.file;
  });
setTimeout(() => {
  location.reload();
}, 3000);
