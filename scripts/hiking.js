"use strict";

window.onload = function () {
  let hikes = [
    {
      id: "H101",
      name: "Mountain Vista",
      description:
        "Enjoy breathtaking views atop Mountain Vista. Ideal for photography and bird watching.",
      scenicImage: "overlook_trail_1.png",
      trailMapImage: "overlook_trail_2.png",
      length: "3 miles",
      difficulty: "Moderate",
    },
    {
      id: "H102",
      name: "Forest Trail",
      description:
        "Wander through a lush green forest. A family-friendly trail with rich flora and fauna.",
      scenicImage: "birding_loop_1.png",
      trailMapImage: "birding_loop_2.png",
      length: "1.5 miles",
      difficulty: "Easy",
    },
    {
      id: "H103",
      name: "Deep Blue",
      description:
        "Circle the serene Bluewater Lake. Suitable for all skill levels and a great picnic spot.",
      scenicImage: "deep_blue_1.png",
      trailMapImage: "deep_blue_2.png",
      length: "2.5 miles",
      difficulty: "Easy",
    },
    {
      id: "H104",
      name: "Canyon Path",
      description:
        "Explore the deep canyon gorges. A challenging trail recommended for experienced hikers.",
      scenicImage: "canyon-path.jpg",
      trailMapImage: "canyon-map.jpg",
      length: "4 miles",
      difficulty: "Hard",
    },
    {
      id: "H105",
      name: "Summit Peak",
      description:
        "Reach the summit of one of the highest peaks. Strenuous but rewarding for its views.",
      scenicImage: "summit-peak.jpg",
      trailMapImage: "summit-map.jpg",
      length: "5 miles",
      difficulty: "Very Hard",
    },
  ];

  let selector = document.getElementById("hikeSelectorUnique");
  let details = document.getElementById("hikeDetailsUnique");
  let name = document.getElementById("hikeNameUnique");
  let description = document.getElementById("hikeDescriptionUnique");
  let scenicImage = document.getElementById("scenicImageViewUnique");
  let trailMapImage = document.getElementById("trailMapViewUnique");
  let length = document.getElementById("hikeLengthUnique");
  let difficulty = document.getElementById("hikeDifficultyUnique");

  // Populate the selector with options
  for (let i = 0; i < hikes.length; i++) {
    let option = document.createElement("option");
    option.value = hikes[i].id;
    option.textContent = hikes[i].name;
    selector.appendChild(option);
  }

  selector.onchange = function () {
    let selectedId = this.value;
    let selectedHike = null;

    // Find the selected hike by id
    for (let i = 0; i < hikes.length; i++) {
      if (hikes[i].id === selectedId) {
        selectedHike = hikes[i];
        break;
      }
    }

    if (selectedHike) {
      name.textContent = selectedHike.name;
      description.textContent = selectedHike.description;
      scenicImage.src = "hiking-images/" + selectedHike.scenicImage;
      trailMapImage.src = "hiking-images/" + selectedHike.trailMapImage;
      length.textContent = "Length: " + selectedHike.length;
      difficulty.textContent = "Difficulty: " + selectedHike.difficulty;
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  };
};
