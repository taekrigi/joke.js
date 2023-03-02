const src = 'https://static.dw.com/image/64142948_804.jpg';

const changeAllImagesToMessi = () => {
  document.querySelectorAll('img').forEach(image => {
    image.src = src;
  });
}

setInterval(changeAllImagesToMessi, 100);
