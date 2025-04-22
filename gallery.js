// link for data innit
let galleryDataUrl = "https://raw.githubusercontent.com/spag-site/spag-site.github.io/main/gallery.json";

// fetch dat json
fetch(galleryDataUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // boom parse tha data
  })
  .then(data => {
    // retrieve le gallery div
    const gallery = document.getElementById('gallery');

    // clear gallery data 
    gallery.innerHTML = '';

    // look at the years
    data.forEach(yearData => {
      for (const year in yearData) {
        // make the years details thingys again
        const yearDetails = document.createElement('details');
        const yearSummary = document.createElement('summary');
        yearSummary.textContent = year; // set summary text to year
        yearDetails.appendChild(yearSummary);

        // look at the months
        const months = yearData[year];
        for (const month in months) {
          // create the months details things
          const monthDetails = document.createElement('details');
          const monthSummary = document.createElement('summary');
          monthSummary.textContent = month; // Set month as the summary text
          monthDetails.appendChild(monthSummary);

          // add images from the files in the months
          const imagesContainer = document.createElement('div'); // container for images
          months[month].forEach(file => {
            const image = document.createElement('img');
            image.src = `https://spag-site.github.io${file}`; // Set the image source
            image.alt = file; // set alt text
            image.style.width = '350px'; // set image width
            image.style.margin = '4px';  // spacing between images
            imagesContainer.appendChild(image);
          });

          // add images container to bla bla bla
          monthDetails.appendChild(imagesContainer);

          // add the month details to the year details
          yearDetails.appendChild(monthDetails);
        }

        // add the year details to the gallery
        gallery.appendChild(yearDetails);
      }
    });
  })
  .catch(error => {
    console.error('Error fetching or processing gallery data:', error);
  });
