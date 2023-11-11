    // Fetch data from members.json and display it
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => displayMembers(data.companies));

    function displayMembers(members) {
      const container = document.getElementById('members-container');
      container.innerHTML = ''; // Clear previous content

      members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        // Customize the card structure based on your requirements
        memberCard.innerHTML = `
          
          <h2>${member.name}</h2>
          <p>${member.address}</p>
          <p>Phone: ${member.phone}</p>
          <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>Membership Level: ${member.membership_level}</p>
          <img src="/wdd230/chamber/images/directory/${member.image}" alt="${member.name}">
          <p class="lastp">${member.other_info}</p> 
        `;

        container.appendChild(memberCard);
      });
    }

    function toggleView(view) {
      const container = document.getElementById('members-container');
      container.className = view === 'grid' ? 'grid-view' : 'list-view';
    }