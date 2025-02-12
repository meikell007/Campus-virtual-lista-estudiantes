document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const studentCards = document.querySelectorAll(".student-card");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        studentCards.forEach(card => {
            const studentName = card.querySelector("h3").textContent.toLowerCase();

            if (studentName.includes(searchText)) {
                card.style.display = "block"; 
            } else {
                card.style.display = "none"; 
            }
        });
    });
});
