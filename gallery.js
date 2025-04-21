// URL to fetch the JSON file
let galleryDataUrl = "https://raw.githubusercontent.com/spag-site/spag-site.github.io/main/gallery.json";

// Fetch the JSON data
fetch(galleryDataUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
    // Get the gallery div
    const gallery = document.getElementById('gallery');

    // Clear the gallery content
    gallery.innerHTML = '';

    // Iterate through the data to create nested <details> sections
    data.forEach(yearData => {
      for (const year in yearData) {
        // Create the year <details> section
        const yearDetails = document.createElement('details');
        const yearSummary = document.createElement('summary');
        yearSummary.textContent = year; // Set year as the summary text
        yearDetails.appendChild(yearSummary);

        // Iterate through the months for the year
        const months = yearData[year];
        for (const month in months) {
          // Create the month <details> section
          const monthDetails = document.createElement('details');
          const monthSummary = document.createElement('summary');
          monthSummary.textContent = month; // Set month as the summary text
          monthDetails.appendChild(monthSummary);

          // Add images for the files in the month
          const imagesContainer = document.createElement('div'); // Container for images
          months[month].forEach(file => {
            const image = document.createElement('img');
            image.src = `https://raw.githubusercontent.com/spag-site/spag-site.github.io/main/images/${file}`; // Set the image source
            image.alt = file; // Set the alt text for the image
            image.style.width = '150px'; // Optional: Set image width
            image.style.margin = '5px';  // Optional: Add some spacing between images
            imagesContainer.appendChild(image);
          });

          // Append the images container to the month details
          monthDetails.appendChild(imagesContainer);

          // Append the month details to the year details
          yearDetails.appendChild(monthDetails);
        }

        // Append the year details to the gallery
        gallery.appendChild(yearDetails);
      }
    });
  })
  .catch(error => {
    console.error('Error fetching or processing gallery data:', error);
  });
