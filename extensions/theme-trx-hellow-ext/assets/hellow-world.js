function helloWorld() {
  console.log('HELLO WORLD FROM APP EMBED');
  const productTitleDiv = document.querySelector('.product__title');

  if (productTitleDiv) {
    console.log('CHANGING TITLE COLOR');
    const h1Element = productTitleDiv.querySelector('h1');

    if (h1Element) h1Element.style.color = 'red';
  }
}

helloWorld();
