const talkingCalendar = function (date) {
  let month = Number(date.slice(5, 7));
  function monthName(month) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month - 1];
  }

  let day = String(Number(date.slice(8, 10)));
  if (day === "11" || day === "12" || day === "13") {
    day += "th";
  } else {
    switch (date.charAt(9)) {
      case "1":
        day += "st";
        break;
      case "2":
        day += "nd";
        break;
      case "3":
        day += "rd";
        break;
      default:
        day += "th";
        break;
    }
  }

  let year = date.slice(0, 4);
  
  return monthName(month) + " " + day + ", " + year;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*
switch (month) {
  case "01":
    month = "January";
    break;
  case "02":
    month = "February";
    break;
  case "03":
    month = "March";
    break;
  case "04":
    month = "April";
    break;
  case "05":
    month = "May";
    break;
  case "06":
    month = "June";
    break;
  case "07":
    month = "July";
    break;
  case "08":
    month = "August";
    break;
  case "09":
    month = "September";
    break;
  case "10":
    month = "October";
    break;
  case "11":
    month = "November";
    break;
  case "12":
    month = "December";
    break;
}
*/
