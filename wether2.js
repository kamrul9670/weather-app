const up = [
  "Agra", "Aligarh", "Amroha", "Ayodhya", "Azamgarh", "Bahraich", "Ballia", "Banda", "BaraBanki",
  "Bareilly", "Basti", "Bijnor", "Bithur", "Budaun", "Bulandshahr", "Deoria", "Etah", "Etawah",
  "Faizabad" , "Fatehpur", "Fatehpur", "Ghaziabad", "Ghazipur", "Gonda",
  "Gorakhpur", "Hamirpur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur",
  "Lakhimpur", "Lalitpur", "Lucknow", "Mainpuri", "Mathura", "Meerut",
  "Moradabad", "Muzaffarnagar", "Partapgarh", "Pilibhit", "Prayagraj", "RaeBareli", "Rampur",
  "Saharanpur", "Sambhal", "Shahjahanpur", "Sitapur", "Sultanpur", "Tehri", "Varanasi"
];

const AP = [
  "Adoni", "Amaravati", "Anantapur", "Chandragiri", "Chittoor", "Dowlaiswaram", "Eluru", "Guntur",
  "Kadapa", "Kakinada", "Kurnool", "Machilipatnam", "Nagarjunakoṇḍa", "Rajahmundry", "Srikakulam",
  "Tirupati", "Vijayawada", "Visakhapatnam", "Vizianagaram", "Yemmiganur"
];

const assam = [
  "Delhi","New Delhi","Dhuburi", "Dibrugarh", "Dispur", "Guwahati", "Jorhat", "Nagaon", "Sivasagar", "Silchar", "Tezpur", "Tinsukia"
];

const bihar = [
  "Ara", "Barauni", "Begusarai", "Bettiah", "Bhagalpur", "Bihar Sharif", "Bodh Gaya", "Buxar", "Chapra",
  "Darbhanga", "Dehri", "Dinapur Nizamat", "Gaya", "Hajipur", "Jamalpur", "Katihar", "Madhubani", "Motihari",
  "Munger", "Muzaffarpur", "Patna", "Purnia", "Pusa", "Saharsa", "Samastipur", "Sasaram", "Sitamarhi", "Siwan"
];

const chhattisgarh = [
  "Ambikapur", "Bhilai", "Bilaspur", "Dhamtari", "Durg", "Jagdalpur", "Raipur", "Rajnandgaon"
];

const gujarat = [
  "Ahmadabad", "Amreli", "Bharuch", "Bhavnagar", "Bhuj", "Dwarka", "Gandhinagar", "Godhra",
  "Jamnagar", "Junagadh", "Kandla", "Khambhat", "Kheda", "Mahesana", "Morbi", "Nadiad",
  "Navsari", "Okha", "Palanpur", "Patan", "Porbandar", "Rajkot", "Surat", "Surendranagar", "Valsad", "Veraval"
];


const haryana = [
  "Ambala", "Bhiwani", "Chandigarh", "Faridabad", "Firozpur Jhirka", "Gurugram", "Hansi", "Hisar",
  "Jind", "Kaithal", "Karnal", "Kurukshetra", "Panipat", "Pehowa", "Rewari", "Rohtak", "Sirsa", "Sonipat"
];


const himachal = [
  "Bilaspur", "Chamba", "Dalhousie", "Dharamshala", "Hamirpur", "Kangra", "Kullu", "Mandi",
  "Nahan", "Shimla", "Una"
];

const jammu = [
  "Anantnag", "Baramula", "Doda", "Gulmarg", "Jammu", "Kathua", "Punch", "Rajouri", "Srinagar", "Udhampur"
];


const jharkhand = [
  "Bokaro", "Chaibasa", "Deoghar", "Dhanbad", "Dumka", "Giridih", "Hazaribag", "Jamshedpur",
  "Jharia", "Rajmahal", "Ranchi", "Saraikela"
];

const karnataka = [
  "Badami", "Ballari", "Bengaluru", "Belagavi", "Bhadravati", "Bidar", "Chikkamagaluru",
  "Chitradurga", "Davangere", "Halebid", "Hassan", "Hubballi-Dharwad", "Kalaburagi", "Kolar",
  "Madikeri", "Mandya", "Mangaluru", "Mysuru", "Raichur", "Shivamogga", "Shravanabelagola",
  "Shrirangapattana", "Tumakuru", "Vijayapura"
];


const kerala = [
  "Alappuzha", "Vatakara", "Idukki", "Kannur", "Kochi", "Kollam", "Kottayam", "Kozhikode",
  "Mattancheri", "Palakkad", "Thalassery", "Thiruvananthapuram", "Thrissur"
];



const MP = [
  "Balaghat", "Barwani", "Betul", "Bharhut", "Bhind", "Bhojpur", "Bhopal", "Burhanpur", "Chhatarpur",
  "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dr. Ambedkar Nagar (Mhow)", "Guna", "Gwalior",
  "Hoshangabad", "Indore", "Itarsi", "Jabalpur", "Jhabua", "Khajuraho", "Khandwa", "Khargone", "Maheshwar",
  "Mandla", "Mandsaur", "Morena", "Murwara", "Narsimhapur", "Narsinghgarh", "Narwar", "Neemuch", "Nowgong",
  "Orchha", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Sarangpur", "Satna", "Sehore",
  "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Ujjain", "Vidisha"
];



const maharashtra = [
  "Ahmadnagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Bhusawal", "Bid", "Buldhana",
  "Chandrapur", "Daulatabad", "Dhule", "Jalgaon", "Kalyan", "Karli", "Kolhapur", "Mahabaleshwar",
  "Malegaon", "Matheran", "Mumbai", "Nagpur", "Nanded", "Nashik", "Osmanabad", "Pandharpur", "Parbhani",
  "Pune", "Ratnagiri", "Sangli", "Satara", "Sevagram", "Solapur", "Thane", "Ulhasnagar", "Vasai-Virar",
  "Wardha", "Yavatmal"
];


const odisha = [
  "Balangir", "Baleshwar", "Baripada", "Bhubaneshwar", "Brahmapur", "Cuttack", "Dhenkanal", "Kendujhar",
  "Konark", "Koraput", "Paradip", "Phulabani", "Puri", "Sambalpur", "Udayagiri"
];


const punjab = [
  "Amritsar", "Batala", "Chandigarh", "Faridkot", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar",
  "Kapurthala", "Ludhiana", "Nabha", "Patiala", "Rupnagar", "Sangrur"
];


const rajasthan = [
  "Abu", "Ajmer", "Alwar", "Amer", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner",
  "Bundi", "Chittaurgarh", "Churu", "Dhaulpur", "Dungarpur", "Ganganagar", "Hanumangarh",
  "Jaipur", "Jaisalmer", "Jalor", "Jhalawar", "Jhunjhunu", "Jodhpur", "Kishangarh", "Kota",
  "Merta", "Nagaur", "Nathdwara", "Pali", "Phalodi", "Pushkar", "Sawai Madhopur", "Shahpura",
  "Sikar", "Sirohi", "Tonk", "Udaipur"
];


const tamil_nadu = [
  "Arcot", "Chengalpattu", "Chennai", "Chidambaram", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul",
  "Erode", "Kanchipuram", "Kanniyakumari", "Kodaikanal", "Kumbakonam", "Madurai", "Mamallapuram", "Nagappattinam",
  "Nagercoil", "Palayamkottai", "Pudukkottai", "Rajapalayam", "Ramanathapuram", "Salem", "Thanjavur",
  "Tiruchchirappalli", "Tirunelveli", "Tiruppur", "Thoothukudi", "Udhagamandalam", "Vellore"
];


const telangana = [
  "Hyderabad", "Karimnagar", "Khammam", "Mahbubnagar", "Nizamabad", "Sangareddi", "Warangal"
];


const uttarakhand = [
  "Almora", "Dehra Dun", "Haridwar", "Mussoorie", "Nainital", "Pithoragarh"
];


const west_bengal = [
  "Alipore", "Asansol", "Baharampur", "Bally", "Balurghat", "Bankura", "Baranagar", "Barasat",
  "Barrackpore", "Basirhat", "Bhatpara", "Bishnupur", "Budge Budge", "Burdwan", "Chandernagore", "Darjeeling",
  "Diamond Harbour", "Dum Dum", "Durgapur", "Halisahar", "Haora", "Hugli", "Ingraj Bazar", "Jalpaiguri",
  "Kalimpong", "Kamarhati", "Kanchrapara", "Kharagpur", "Cooch Behar", "Kolkata", "Krishnanagar", "Malda",
  "Midnapore", "Murshidabad", "Nabadwip", "Palashi", "Panihati", "Purulia", "Raiganj", "Santipur", "Shantiniketan",
  "Shrirampur", "Siliguri", "Siuri", "Tamluk", "Titagarh"
];




 const allCity = [
  ...up,...assam,
  ...bihar,...chhattisgarh,
  ...gujarat , ...AP,
  ...haryana , ...himachal ,
  ...jammu , ...jharkhand ,
  ...karnataka , ...kerala ,
  ...MP , ...maharashtra ,
  ...odisha,...punjab,...rajasthan,
  ...tamil_nadu , ...telangana,
  ...uttarakhand,
  ...west_bengal
 ]







const cityInput = document.getElementById("cityInput");
const suggestionList = document.getElementById("suggestionList");

cityInput.addEventListener("input", function () {
  const nameToFilter = cityInput.value.toLowerCase().trim();
  const filteredCities = allCity.filter(city => city.toLowerCase().startsWith(nameToFilter));

  suggestionList.innerHTML = "";

  if (filteredCities.length > 0) {
      suggestionList.style.display = "block";

      filteredCities.forEach(city => {
          const suggestionItem = document.createElement("li");
          suggestionItem.textContent = city;
          suggestionItem.addEventListener("click", function () {
              cityInput.value = city;
              suggestionList.style.display = "none";
              checkWeather(city);
          });
          suggestionList.appendChild(suggestionItem);
      });
  } else {
      suggestionList.style.display = "none";
  }
});

const apiKey = "382973a2d94e9530471f2ed11f615c11";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey + "&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city);
  const data = await response.json();

  if (data.cod === 200) {
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      if (weatherIcon) {
          if (data.weather[0].main === "Clouds") {
              weatherIcon.src = "images/clouds.png";
          } else if (data.weather[0].main === "Clear") {
              weatherIcon.src = "images/clear.png";
          } else if (data.weather[0].main === "Rain") {
              weatherIcon.src = "images/rain.png";
          } else if (data.weather[0].main === "Drizzle") {
              weatherIcon.src = "images/drizzle.png";
          } else if (data.weather[0].main === "Mist") {
              weatherIcon.src = "images/mist.png";
          }
      }
      document.querySelector(".weather").style.display = "block";
  } else {
      console.error("Weather data not found.");
  }
}

searchBtn.addEventListener("click", () => {
  const nameToFilter = searchBox.value.toLowerCase().trim();
  const filteredCities = up.filter(city => city.toLowerCase().startsWith(nameToFilter));
  console.log(filteredCities)
  if (filteredCities.length > 0) {
      checkWeather(filteredCities[0]);
  } else {
      alert("City not found in the list.");
      console.error("City not found in the list.");
  }
});
