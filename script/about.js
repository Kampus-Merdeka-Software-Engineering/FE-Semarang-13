const API_BASE_URL = "http://localhost:3000";

// Fungsi menampilkan data tim dari API
function loadAndDisplayTeam() {
  fetch(`${API_BASE_URL}/views/about`)
    .then(response => response.json())
    .then(data => {

      const teamContainer = document.getElementById('team-container');

      data.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-card';

        const memberImage = document.createElement('img');
        memberImage.src = member.image;
        memberImage.alt = member.name;

        const memberInfo = document.createElement('div');
        memberInfo.className = 'team-info';
        const memberName = document.createElement('h3');
        memberName.textContent = member.name;
        const memberRole = document.createElement('p');
        memberRole.textContent = member.role;

        const contactPerson = document.createElement('div');
        contactPerson.className = 'contact-person';

        // Sosmed 
        const socialLinks = [
          { platform: 'linkedin', url: member.linkedin },
          { platform: 'instagram', url: member.instagram },
          { platform: 'github', url: member.github }
        ];

        socialLinks.forEach(link => {
          if (link.url) {
            const socialLink = document.createElement('a');
            socialLink.href = link.url;
            const socialIcon = document.createElement('i');
            socialIcon.className = `fab fa-${link.platform}`;
            socialLink.appendChild(socialIcon);
            contactPerson.appendChild(socialLink);
          }
        });

        // Gabungkan elemen tim
        memberInfo.appendChild(memberName);
        memberInfo.appendChild(memberRole);
        memberCard.appendChild(memberImage);
        memberCard.appendChild(memberInfo);
        memberCard.appendChild(contactPerson);

        // Gabungkan kartu anggota tim
        teamContainer.appendChild(memberCard);
      });
    })
    .catch(error => {
      console.error('Error loading data from the API:', error);
    });
}

loadAndDisplayTeam();
