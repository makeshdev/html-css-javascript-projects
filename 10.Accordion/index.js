const data = [
  {
    id: 1,
    question: "What does LOREM mean?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisici elit… (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word Lorem does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century. (Source: Wikipedia.com)",
  },
  {
    id: 2,
    question: "Where can I subscribe to your newsletter?",
    answer:
      "We often send out our newsletter with news and great offers. We will never disclose your data to third parties and you can unsubscribe from the newsletter at any time. Subscribe here to our newsletter",
  },
  {
    id: 3,
    question: "Where can I edit my billing and shipping address?",
    answer:
      "If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account",
  },
];

const accordionSec = document.querySelector(".accordion");

function createAccordion() {
  accordionSec.innerHTML = data
    .map(
      (item) => `
        <div class="acc_section">
        <div class="accordion_title">
            <h1>${item.question}</h1>
        </div>
        <div class="accordion_para">
            <p>${item.answer}</p>
        </div>
        <p>&uarr;</p>
        </div>`
    )
    .join(" ");
}

createAccordion();

const accordionTitle = document.querySelectorAll(".accordion_title");

console.log(accordionTitle);
