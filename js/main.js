onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const titleElement = document.getElementById('title');
  if (titleElement) {
    const text = `FLOWERS FOR YOU`.split('')
    titleElement.innerHTML = ''; // Clear existing text
    
    for (let index = 0; index < text.length; index++) {
      if (text[index] !== ' ') {
        titleElement.innerHTML += `<span>${text[index]}</span>`
      } else {
        titleElement.innerHTML += `<span class='space'>&nbsp;</span>`
      }
    }
    
    const textElements = document.querySelectorAll('#title span');
    textElements.forEach((element, i) => {
      element.style.animationDelay = `${i * 0.1}s`;
    });
  }
}; 
