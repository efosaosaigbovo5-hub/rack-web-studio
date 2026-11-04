// FAQ ACCORDION

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector("h3");

    question.addEventListener("click", () => {

        faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });
});