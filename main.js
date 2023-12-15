//1.  შექმენი <button> და <div> ელემენტები და
// მიანიჭეთ საკუთარი უნიკალური id
// ● <div> - ში ჩაწერე პატარა random ტექსტი
// ● ღილაკზე დაჭერის შემთხვევაში დამალე
// <div> ელემენტი

const btn = document.createElement("button");
const divEl = document.createElement("div");
divEl.id = "my-el";
document.body.append(divEl, btn);
let firstDiv = document.getElementById("my-el");
firstDiv.style.backgroundColor = "yellow";
firstDiv.style =
  "border: 2px solid red; background-color: yellow; width: 50%; height: 3em; text-align:center; font-size: 1.5rem";
firstDiv.textContent = "The text will hide";
btn.id = "my-btn";
let firstBtn = document.getElementById("my-btn");
firstBtn.style = "margin-top: 0.3rem";
firstBtn.addEventListener("click", () => (divEl.style.display = "none"));
firstBtn.addEventListener("dblclick", () => (divEl.style.display = "block"));
btn.textContent = "Click me";
btn.style.backgroundColor = "tomato";
btn.style.border = "2px solid darkgray";

// შექმენი შემდეგი სტრუქტურა JS -ის გამოყენებით და დაამატე DOM-ში:
// <div id=”card”>
//  <h2>Gandalf</h2>
//    <a href=”#”>Go to profile</a>
// </div>

let card = document.createElement("div");
card.id = "card";
let heading = document.createElement("h2");

let text = document.createTextNode("Gandalf");
heading.appendChild(text);
console.log(text);
let link = document.createElement("a");
link.setAttribute(
  "href",
  "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
);
link.target = "_blank";
link.textContent = "Go to profile";
link.style.textDecoration = "none";
link.style.color = "green";
link.style.fontSize = "24px";
link.style.fontWeight = "bold";
card.append(heading, link);
document.body.append(card);
console.log(card);

// შექმენი quiz თამაში
// ● დაწერე რამდენიმე მოკლე შეკითხვა თავისი სავარაუდო პასუხებით
// ● სწორ პასუხზე დაჭერის შემთხვევაში გაამწვანე პასუხი
// ● არასწორი პასუხის შემთხვევაში გააწითლე

let score = 0;

let scoreElement = document.createElement("p");
scoreElement.textContent = "score: 0";
document.body.appendChild(scoreElement);

function questions(question, correctOption, options) {
  const questionEl = document.createElement("p");
  questionEl.textContent = question;

  const buttons = options.map((option) => {
    const buttonEl = document.createElement("button");
    buttonEl.textContent = option;

    buttonEl.addEventListener("click", () => {
      if (option == correctOption) {
        alert("You are correct");
        score++;
        scoreElement.textContent = "score: " + score;

        if (score == 3) {
          alert("Good Job!");
        }
      } else {
        alert("Wrong answer. Try again");
      }
    });
    return buttonEl;
  });

  document.body.appendChild(questionEl);
  buttons.forEach((buttonEl) => document.body.append(buttonEl));
}
questions("Is HTML a programming language?", "No", ["Yes", "No"]);
questions("What does CSS stand for?", "Cascading Style Sheets", [
  "Counter Strike: Source",
  "Corrective Style Sheets",
  "Cascading Style Sheets",
]);
questions("How many types does Javascript have?", 8, [6, 7, 8, 9]);
