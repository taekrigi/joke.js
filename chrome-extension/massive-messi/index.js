const changeAllImagesToMessi = () => {
  document.querySelectorAll('img').forEach(image => {
    image.src = 'https://static.dw.com/image/64142948_804.jpg';
  });
}

setInterval(changeAllImagesToMessi, 100);