"use strict";

export const weekDayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const aqiText = {
  1: {
    level: "Good",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi m ipsam. Tenetur!",
  },
  2: {
    level: "Fair",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi m ipsam. Tenetur!",
  },
  3: {
    level: "Moderate",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi m ipsam. Tenetur!",
  },
  4: {
    level: "Poor",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi m ipsam. Tenetur!",
  },
  5: {
    level: "Fair",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi m ipsam. Tenetur!",
  },
};

// export const getData = function (dataUnix, timezone) {
//   const date = new Date((dataUnix + timezone) * 1000);
//   const week = weekDayNames[date.getUTCDay];
//   const month = monthName[date.getUTCMonth];
//   const hours = date.getUTCHours();
//   const minutes = date.getUTCMinutes();
//   const period = hours >= 12 ? "PM" : "AM";

//   const data = {};
//   data.date = `${week} ${date.getUTCDate}, ${month}`;
//   data.time = `${hours % 12 || 12}:${minutes} ${period}`;
//   data.hours = `${hours % 12 || 12} ${period}`;
//   return data;
// };

export const mps_to_kms = (mps) => mps * 3.6;

console.log("I am here");




export const getDate = function(dataUnix, timezone){
    const date = new Date((dataUnix + timezone) * 1000);
    const week = weekDayNames[date.getUTCDay()];
    const month = monthName[date.getUTCMonth()];

    return `${week} ${date.getUTCDate()}, ${month}`;
}

export const getTime = function(dataUnix, timezone){
    const date = new Date((dataUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}

export const getHours = function(dataUnix, timezone){
    const date = new Date((dataUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}
