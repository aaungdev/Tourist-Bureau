"use strict"
window.onload = function () {
  const hikes = [
      {
          id: "H101",
          name: "Mountain Vista",
          description: "Enjoy breathtaking views atop Mountain Vista. Ideal for photography and bird watching.",
          scenicImage: "mountain-vista.jpg",
          trailMapImage: "vista-trail-map.jpg",
          length: "3 miles",
          difficulty: "Moderate"
      },
      {
          id: "H102",
          name: "Forest Trail",
          description: "Wander through a lush green forest. A family-friendly trail with rich flora and fauna.",
          scenicImage: "forest-trail.jpg",
          trailMapImage: "forest-map.jpg",
          length: "1.5 miles",
          difficulty: "Easy"
      },
      {
          id: "H103",
          name: "Lake Loop",
          description: "Circle the serene Bluewater Lake. Suitable for all skill levels and a great picnic spot.",
          scenicImage: "lake-loop.jpg",
          trailMapImage: "lake-map.jpg",
          length: "2.5 miles",
          difficulty: "Easy"
      },
      {
          id: "H104",
          name: "Canyon Path",
          description: "Explore the deep canyon gorges. A challenging trail recommended for experienced hikers.",
          scenicImage: "canyon-path.jpg",
          trailMapImage: "canyon-map.jpg",
          length: "4 miles",
          difficulty: "Hard"
      },
      {
          id: "H105",
          name: "Summit Peak",
          description: "Reach the summit of one of the highest peaks. Strenuous but rewarding for its views.",
          scenicImage: "summit-peak.jpg",
          trailMapImage: "summit-map.jpg",
          length: "5 miles",
          difficulty: "Very Hard"
      }
  ];

  const selector = document.getElementById("hikeSelectorUnique");
  const details = document.getElementById("hikeDetailsUnique");
  const name = document.getElementById("hikeNameUnique");
  const description = document.getElementById("hikeDescriptionUnique");
  const scenicImage = document.getElementById("scenicImageViewUnique");
  const trailMapImage = document.getElementById("trailMapViewUnique");
  const length = document.getElementById("hikeLengthUnique");
  const difficulty = document.getElementById("hikeDifficultyUnique");

  hikes.forEach(function(hike) {
      const option = document.createElement("option");
      option.value = hike.id;
      option.textContent = hike.name;
      selector.appendChild(option);
  });

  selector.onchange = function() {
      const selectedHike = hikes.find(hike => hike.id === this.value);
      if (selectedHike) {
          name.textContent = selectedHike.name;
          description.textContent = selectedHike.description;
          scenicImage.src = "images/" + selectedHike.scenicImage;
          scenicImage.alt = "Scenic view of " + selectedHike.name;
          trailMapImage.src = "images/" + selectedHike.trailMapImage;
          trailMapImage.alt = "Trail map of " + selectedHike.name;
          length.textContent = "Length: " + selectedHike.length;
          difficulty.textContent = "Difficulty: " + selectedHike.difficulty;
          details.style.display = "block";
      } else {
          details.style.display = "none";
      }
  };
};
