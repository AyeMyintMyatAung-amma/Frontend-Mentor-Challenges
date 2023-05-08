const ageInYears = document.querySelector("#ageYears");
const ageInMonths = document.querySelector("#ageMonths");
const ageInDays = document.querySelector("#ageDays");

const today = new Date();
const currYear = today.getFullYear();
const currMonth = today.getMonth() + 1;
const currDay = today.getUTCDate();

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  let dayOfBirth = document.querySelector("#day").value;
  let monthOfBirth = document.querySelector("#month").value;
  let yearOfBirth = document.querySelector("#year").value;

  if (validateBirthDate(dayOfBirth, monthOfBirth, yearOfBirth)) {
    let aged = calculateAge(dayOfBirth, monthOfBirth, yearOfBirth);

    counter(ageInYears, -1, aged.years, 2000);
    counter(ageInMonths, -1, aged.months, 1000);
    counter(ageInDays, -1, aged.days, 1500);
  }
});

const daysInMonth = (month, year) => {
  const thirtyDaysMonths = ["4", "6", "9", "11"];
  const isLeapYear = () => {
    if (
      (!year % 100 == 0 && year % 4 == 0) ||
      (year % 100 == 0 && year % 400 == 0)
    ) {
      return "29";
    }
    return "28";
  };

  days = thirtyDaysMonths.includes(month)
    ? "30"
    : month == "2"
    ? isLeapYear()
    : "31";

  return parseInt(days);
};

const calculateAge = (dob, mob, yob) => {
  let age = {
    years: 0,
    months: 0,
    days: 0,
  };

  age.years = currYear - yob;

  if(currMonth >= mob) {
    age.months = currMonth - mob;
  }
  else {
    age.years--;
    age.months = 12 + currMonth - mob;
  }

  if(currDay >= dob) {
    age.days = currDay - dob;
  }
  else {
    age.months--;
    age.days = daysInMonth(currMonth, currYear) + currDay - dob;
  }
  
  return age;
};

const validateBirthDate = (dob, mob, yob) => {
  const labelYear = document.querySelector("#labelYear");
  const labelMonth = document.querySelector("#labelMonth");
  const labelDay = document.querySelector("#labelDay");
  let errorDay = document.querySelector("#errorDay");
  let errorMonth = document.querySelector("#errorMonth");
  let errorYear = document.querySelector("#errorYear");

  const validateDay = !parseInt(dob)
    ? "Must be number"
    : parseInt(dob) > daysInMonth(mob, yob)
    ? "Must be a valid day"
    : "";
  const validateMonth = !parseInt(mob)
    ? "Must be number"
    : parseInt(mob) > 12
    ? "Must be a valid month"
    : "";
  const validateYear = !parseInt(yob)
    ? "Must be number"
    : parseInt(yob) > currYear
    ? "Must be in the past"
    : "";
  if (validateDay) {
    if (!labelDay.classList.contains("text-primaryRed")) {
      labelDay.classList.add("text-primaryRed");
    }
    errorDay.innerText = validateDay;
  }
  if (validateMonth) {
    if (!labelMonth.classList.contains("text-primaryRed")) {
      labelMonth.classList.add("text-primaryRed");
    }
    errorMonth.innerText = validateMonth;
  }
  if (validateYear) {
    if (!labelYear.classList.contains("text-primaryRed")) {
      labelYear.classList.add("text-primaryRed");
    }
    errorYear.innerText = validateYear;
  }
  if (!validateDay && !validateMonth && !validateYear) {
    labelDay.classList.remove("text-primaryRed");
    labelMonth.classList.remove("text-primaryRed");
    labelYear.classList.remove("text-primaryRed");
    errorDay.innerText = validateDay;
    errorMonth.innerText = validateMonth;
    errorYear.innerText = validateYear;
    return true;
  }
};
