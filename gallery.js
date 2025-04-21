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

          // Add files for the month
          const filesList = document.createElement('ul'); // Use a list for files
          months[month].forEach(file => {
            const fileItem = document.createElement('li');
            fileItem.textContent = file; // Set file name as list item text
            filesList.appendChild(fileItem);
          });

          // Append the files list to the month details
          monthDetails.appendChild(filesList);

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
