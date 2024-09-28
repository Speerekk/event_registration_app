document.addEventListener("DOMContentLoaded", () => {
  const events = [
    {
      title: "Event 1",
      description: "Description for event 1",
      eventDate: "2024-06-01",
      organizer: "Organizer 1",
    },
    {
      title: "Event 2",
      description: "Description for event 2",
      eventDate: "2024-06-02",
      organizer: "Organizer 2",
    },
    {
      title: "Event 3",
      description: "Description for event 3",
      eventDate: "2024-06-03",
      organizer: "Organizer 3",
    },
    {
      title: "Event 4",
      description: "Description for event 4",
      eventDate: "2024-06-04",
      organizer: "Organizer 4",
    },
    {
      title: "Event 5",
      description: "Description for event 5",
      eventDate: "2024-06-05",
      organizer: "Organizer 5",
    },
    {
      title: "Event 6",
      description: "Description for event 6",
      eventDate: "2024-06-06",
      organizer: "Organizer 6",
    },
    {
      title: "Event 7",
      description: "Description for event 7",
      eventDate: "2024-06-07",
      organizer: "Organizer 7",
    },
    {
      title: "Event 8",
      description: "Description for event 8",
      eventDate: "2024-06-08",
      organizer: "Organizer 8",
    },
    {
      title: "Event 9",
      description: "Description for event 9",
      eventDate: "2024-06-09",
      organizer: "Organizer 9",
    },
    {
      title: "Event 10",
      description: "Description for event 10",
      eventDate: "2024-06-10",
      organizer: "Organizer 10",
    },
    {
      title: "Event 11",
      description: "Description for event 11",
      eventDate: "2024-06-11",
      organizer: "Organizer 11",
    },
    {
      title: "Event 12",
      description: "Description for event 12",
      eventDate: "2024-06-12",
      organizer: "Organizer 12",
    },
    {
      title: "Event 13",
      description: "Description for event 13",
      eventDate: "2024-06-13",
      organizer: "Organizer 13",
    },
    {
      title: "Event 14",
      description: "Description for event 14",
      eventDate: "2024-06-14",
      organizer: "Organizer 14",
    },
    {
      title: "Event 15",
      description: "Description for event 15",
      eventDate: "2024-06-15",
      organizer: "Organizer 15",
    },
    {
      title: "Event 16",
      description: "Description for event 16",
      eventDate: "2024-06-16",
      organizer: "Organizer 16",
    },
    {
      title: "Event 17",
      description: "Description for event 17",
      eventDate: "2024-06-17",
      organizer: "Organizer 17",
    },
    {
      title: "Event 18",
      description: "Description for event 18",
      eventDate: "2024-06-18",
      organizer: "Organizer 18",
    },
    {
      title: "Event 11",
      description: "Description for event 11",
      eventDate: "2024-06-11",
      organizer: "Organizer 11",
    },
    {
      title: "Event 12",
      description: "Description for event 12",
      eventDate: "2024-06-12",
      organizer: "Organizer 12",
    },
    {
      title: "Event 13",
      description: "Description for event 13",
      eventDate: "2024-06-13",
      organizer: "Organizer 13",
    },
    {
      title: "Event 14",
      description: "Description for event 14",
      eventDate: "2024-06-14",
      organizer: "Organizer 14",
    },
    {
      title: "Event 15",
      description: "Description for event 15",
      eventDate: "2024-06-15",
      organizer: "Organizer 15",
    },
    {
      title: "Event 16",
      description: "Description for event 16",
      eventDate: "2024-06-16",
      organizer: "Organizer 16",
    },
    {
      title: "Event 17",
      description: "Description for event 17",
      eventDate: "2024-06-17",
      organizer: "Organizer 17",
    },
    {
      title: "Event 18",
      description: "Description for event 18",
      eventDate: "2024-06-18",
      organizer: "Organizer 18",
    },
  ];

  const eventsPerPage = 12;
  const eventsList = document.querySelector(".events-list");
  const paginationControls = document.querySelector(".pagination-controls");

  const renderEvents = (page) => {
    eventsList.innerHTML = "";
    const startIndex = (page - 1) * eventsPerPage;
    const endIndex = page * eventsPerPage;
    const currentEvents = events.slice(startIndex, endIndex);

    currentEvents.forEach((event) => {
      const eventDiv = document.createElement("div");
      eventDiv.className = "event";
      eventDiv.innerHTML = `<h2>${event.title}</h2>
                                  <p><strong>Description:</strong> ${
                                    event.description
                                  }</p>
                                  <p><strong>Date:</strong> ${new Date(
                                    event.eventDate
                                  ).toLocaleDateString()}</p>
                                  <p><strong>Organizer:</strong> ${
                                    event.organizer
                                  }</p>
                                  <div class="event-buttons">
                                      <button class="register">Register</button>
                                      <button class="view">View</button>
                                  </div>`;
      eventsList.appendChild(eventDiv);
    });
  };

  const renderPagination = (totalPages, currentPage) => {
    paginationControls.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      if (i === currentPage) {
        pageButton.classList.add("current-page");
      }
      pageButton.addEventListener("click", () => {
        renderEvents(i);
        renderPagination(totalPages, i);
      });
      paginationControls.appendChild(pageButton);
    }
  };

  const totalPages = Math.ceil(events.length / eventsPerPage);
  renderEvents(1);
  renderPagination(totalPages, 1);
});
