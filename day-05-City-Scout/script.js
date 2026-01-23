


const cityApiUrl =
  "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json";

const cities = [];
const inputElem = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");

// 1️⃣ FETCH DATA
fetch(cityApiUrl)
  .then(res => res.json())
  .then(data => cities.push(...data));

// 2️⃣ HANDLE INPUT
function handleSearch(event) {
  const value = event.target.value.toLowerCase().trim();

  if (!value) {
    resultsContainer.innerHTML = "";
    resultsContainer.classList.add("hidden");
    return;
  }

  const matched = cities.filter(place =>
    place.name.toLowerCase().includes(value) ||
    place.state.toLowerCase().includes(value)
  );

  displayValues(matched, value);
}

// 3️⃣ DISPLAY MATCHED RESULTS
function displayValues(matches, typedValue) {
  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div class="p-3 text-slate-400 text-center">
        No results found
      </div>
    `;
    resultsContainer.classList.remove("hidden");
    return;
  }

  resultsContainer.innerHTML = matches
    .slice(0, 8) // limit results
    .map(place => {
      return `
        <div 
          class="px-4 py-3 cursor-pointer hover:bg-amber-500 hover:text-black transition flex justify-between items-center"
          onclick="selectCity('${place.name}', '${place.state}')"
        >
          <span class="font-medium">${highlight(place.name, typedValue)}</span>
          <span class="text-sm text-slate-400">${place.state}</span>
        </div>
      `;
    })
    .join("");

  resultsContainer.classList.remove("hidden");
}

// 4️⃣ SELECT CITY
function selectCity(city, state) {
  inputElem.value = `${city}, ${state}`;
  resultsContainer.innerHTML = "";
  resultsContainer.classList.add("hidden");
}

// 5️⃣ HIGHLIGHT MATCH
function highlight(text, value) {
  const regex = new RegExp(`(${value})`, "gi");
  return text.replace(regex, `<mark class="bg-amber-300">$1</mark>`);
}




