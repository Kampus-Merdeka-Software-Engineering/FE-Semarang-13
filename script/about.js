// Fungsi untuk memuat dan menampilkan data tim dari JSON
function loadAndDisplayTeam() {
  fetch('./data/data-team-container.json') // Perhatikan perubahan path
    .then(response => response.json())
    .then(data => {
      // Ambil elemen div dengan id "team-container"
      const teamContainer = document.getElementById('team-container');

      // Loop melalui data tim dan buat kartu anggota tim
      data.team.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-card';

        const memberImage = document.createElement('img');
        memberImage.src = `../img/${member.image}`; // Perhatikan perubahan path
        memberImage.alt = member.name;

        const memberInfo = document.createElement('div');
        memberInfo.className = 'team-info';
        const memberName = document.createElement('h3');
        memberName.textContent = member.name;
        const memberRole = document.createElement('p');
        memberRole.textContent = member.role;

        const contactPerson = document.createElement('div');
        contactPerson.className = 'contact-person';
        
        // Loop melalui data sosial dan buat tautan sosial
        Object.keys(member.social).forEach(socialPlatform => {
          const socialLink = document.createElement('a');
          socialLink.href = member.social[socialPlatform];
          const socialIcon = document.createElement('i');
          socialIcon.className = `fab fa-${socialPlatform}`;
          socialLink.appendChild(socialIcon);
          contactPerson.appendChild(socialLink);
        });

        // Gabungkan elemen-elemen anggota tim
        memberInfo.appendChild(memberName);
        memberInfo.appendChild(memberRole);
        memberCard.appendChild(memberImage);
        memberCard.appendChild(memberInfo);
        memberCard.appendChild(contactPerson);

        // Gabungkan kartu anggota tim ke dalam elemen "team-container"
        teamContainer.appendChild(memberCard);
      });
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });
}

// Panggil fungsi loadAndDisplayTeam() untuk menampilkan data tim
loadAndDisplayTeam();
