let projects = [
  {
    name: "result-summary-component",
    thumbnail: "./results-summary-component/design/desktop-design.png",
    solution: "https://github.com/AMyintMyatAung/Frontend-Mentor-Challenges/tree/main/results-summary-component",
    live: "./results-summary-component/index.html",
  },
  {
    name: "qr-code-component",
    thumbnail: "./qr-code-component/design/desktop-design.png",
    solution: "https://github.com/AMyintMyatAung/Frontend-Mentor-Challenges/tree/main/qr-code-component",
    live: "./qr-code-component/index.html",
  },
];

const formatProjectName = (name) => {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const list = document.querySelector("#projects");

for (let i in projects) {
  const listItem = document.createElement("li");
  let projectName = formatProjectName(projects[i].name);
  let thumbnail = projects[i].thumbnail;
  let solutionLink = projects[i].solution;
  let liveSite = projects[i].live;

  listItem.classList.add(
    "flex-auto",
    "shadow-xl",
    "flex",
    "flex-col",
    "items-center",
    "rounded-lg",
    "p-5",
    "max-w-sm",
    "max-h-96",
    "bg-zinc-100"
  );

  listItem.innerHTML = `
    <h3 class="text-indigo-600 text-xl font-semibold">${projectName}</h3>
    <img
    src="${thumbnail}"
    alt="results-summary-component-desktop-design"
    class="my-3 rounded rounded-lg"
  />
  <div class="flex justify-between w-full">
    <a
              href="${solutionLink}"
              target="_blank"
              class="btn bg-blue-600 hover:bg-blue-700 font-semibold px-3 py-2 rounded-l-full rounded-r-full text-center text-white w-24"
              >Solution</a
            >
            <a
              href="${liveSite}"
              target="_blank"
              class="btn bg-red-600 hover:bg-red-700 font-semibold px-3 py-2 rounded-l-full rounded-r-full text-center text-white w-24"
              >Live</a
            >
          </div>
      `;
  list.appendChild(listItem);
}
