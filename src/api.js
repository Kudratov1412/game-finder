// API key -

// API key
const api_key = "d230180f343c41f1a25d07d6290f37b0";

// Base URL
const base_url = "https://api.rawg.io/api/";

// tool functions
const trueString = (d) => {
  if (String(d).length === 1) return "0" + String(d);
  return String(d);
};

// Getting current dates
const getMonth = () => {
  return trueString(new Date().getMonth() + 1);
};
const getDay = () => {
  return trueString(new Date().getDate());
};
const currentYear = new Date().getFullYear();
const currentMonth = getMonth();
const currentDay = getDay();
// Current Date
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// Last Year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// New Year
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
// Popular Games
const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size`;

const popularGames = () => {
  return `${base_url}${popular_games}`;
};
console.log(popularGames());
