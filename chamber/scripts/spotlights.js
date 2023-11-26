    // Fetch JSON data
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
        // Filter companies with Silver or Gold status
        const silverGoldCompanies = data.companies.filter(company => company.membership_level === 'Silver' || company.membership_level === 'Gold');
        
        // Shuffle the array to randomize display
        const shuffledCompanies = shuffle(silverGoldCompanies);
        
        // Display a subset of the shuffled companies
        const displayCount = Math.floor(Math.random() * 1) + 3; // Randomly select 3 companies
        const displaySubset = shuffledCompanies.slice(0, displayCount);

        // Display the selected companies
        const companyListDiv = document.getElementById('companyList');
        displaySubset.forEach(company => {
          const companyDiv = document.createElement('div');
          companyDiv.innerHTML = `
            <h2>${company.name}</h2>
            <p>Address: ${company.address}</p>
            <p>Phone: ${company.phone}</p>
            <p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
            <p>Status: ${company.membership_level}</p>
            <img class="directory-img" src="/wdd230/chamber/images/directory/${company.image}" alt="${company.name}">
            
            <!-- You can add more details here -->
          `;
          companyListDiv.appendChild(companyDiv);
        });
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });

    // Function to shuffle array
    function shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }