const url = window.location.href.replace('index.html', 'data.json');
const chart = document.querySelector("#chart");

console.log(url);

fetch(url)
  .then((res) => res.json())
  .then((json) => {
    let now = new Date();
    let today = now.getDay();
    let day = 1;
    let highest = highestExpense(json);
    json.forEach((expense) => {
      drawChart(expense, highest, day, today);
      day++;
    });
  });

function drawChart(expense, highest, day, today) {
  let bg = today == day ? "bg-primaryCyan" : "bg-primaryRed";
  let hover = today == day ? "hover:bg-primaryCyanLight" : "hover:bg-primaryRedLight";
  let height = Math.round((expense.amount / highest.amount) * 100) * 1.5;
  let div = document.createElement("div");

  div.classList.add("w-8", "md:w-10", "h-full", "flex", "flex-col", "justify-end");
  div.innerHTML = `<div
  class="group relative cursor-pointer inline-block w-full h-[${height}px] ${bg} ${hover} rounded-md"
>
  <div
    class="opacity-0 w-max mx-auto bg-neutralDarkBrown text-white text-center text-xs md:text-sm font-semibold md:font-bold rounded-sm absolute z-10 group-hover:opacity-100 bottom-full pointer-events-none p-1 md:px-2 mb-2 -ml-2"
  >
    $${expense.amount}
  </div>
</div>
<p class="text-neutralMediumBrown text-sm text-center pointer-events-none pt-1">${expense.day}</p>
</div>`;
  chart.appendChild(div);
}

function highestExpense(expenses) {
  return expenses.reduce((max, obj) => (max.amount > obj.amount ? max : obj));
}
