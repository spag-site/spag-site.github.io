data.forEach(yearData => {
  // Extract and sort the years in descending order
  const sortedYears = Object.keys(yearData)
    .map(year => parseInt(year, 10)) // Convert keys to integers
    .sort((a, b) => b - a); // Sort in descending order

  sortedYears.forEach(year => {
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
      monthDetails.appendChild(imagesContainer);
      yearDetails.appendChild(monthDetails);
    }
    gallery.appendChild(yearDetails);
  });
});
