const counter = (className, start, end, duration) => {
  let current = start;
  let range = start - end;
  let increment = end > start ? 1 : -1;
  let step = Math.abs(Math.floor(duration / range));
  let timer = setInterval(() => {
    current += increment;
    className.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, step);
};
