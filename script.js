// Smooth scroll to sections
function scrollToSection(sectionId){
  const section = document.getElementById(sectionId);
  if(section){
    section.scrollIntoView({behavior: "smooth"});
  }
}

// STORY POSTING
function postStory(){
  const text = document.getElementById('storyText').value;
  const fileInput = document.getElementById('storyImage');
  if(text.trim() === "" && fileInput.files.length === 0){
    alert("Please add text or a photo!");
    return;
  }

  const feed = document.getElementById('storyFeed');

  // Create post card
  const card = document.createElement('div');
  card.className = 'story-card';

  // Add text
  if(text.trim() !== ""){
    const p = document.createElement('p');
    p.textContent = text;
    card.appendChild(p);
  }

  // Add image if uploaded
  if(fileInput.files.length > 0){
    const img = document.createElement('img');
    img.src = URL.createObjectURL(fileInput.files[0]);
    card.appendChild(img);
  }

  // Add to feed at top
  feed.prepend(card);

  // Reset inputs
  document.getElementById('storyText').value = "";
  fileInput.value = "";
}
