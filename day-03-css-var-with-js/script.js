// ===============================
// GLOBAL ELEMENTS
// ===============================
const root = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");
const knob = toggleBtn.querySelector("span");

const lightColorSet = document.querySelector(".light-mode");
const darkColorSet = document.querySelector(".dark-mode");

// ===============================
// INITIAL STATE (Always Light)
// ===============================
window.addEventListener("load", () => {
  root.classList.remove("dark");
  updateThemeUI(false);
});

// ===============================
// THEME TOGGLE
// ===============================
toggleBtn.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  updateThemeUI(isDark);
});

// ===============================
// UPDATE UI BASED ON THEME
// ===============================
function updateThemeUI(isDark) {
  // Toggle knob
  knob.classList.toggle("translate-x-8", isDark);

  // Toggle button colors
  toggleBtn.classList.toggle("bg-blue-600", isDark);
  toggleBtn.classList.toggle("ring-2", isDark);
  toggleBtn.classList.toggle("ring-blue-400/60", isDark);
  toggleBtn.classList.toggle("bg-slate-500/70", !isDark);

  // Toggle color sets
  lightColorSet.classList.toggle("hidden", isDark);
  lightColorSet.classList.toggle("block", !isDark);

  darkColorSet.classList.toggle("hidden", !isDark);
  darkColorSet.classList.toggle("block", isDark);
}

// ===============================
// COLOR PICKER (EVENT DELEGATION)
// ===============================
document.addEventListener("click", (e) => {
  const colorBox = e.target.closest("[data-rgb]");
  if (!colorBox) return;

  const rgbValue = colorBox.dataset.rgb;

  // Apply color globally
  root.style.setProperty("--text-primary-color", rgbValue);

  // Remove previous active state i.e the color which is previously selcted now check mark appear on it so on selecting other , we have to remove check mark from that one 
  document
    .querySelectorAll(".color-option")
    .forEach((el) => {
      el.querySelector("i")?.classList.add("opacity-0");
    });

  // Show tick on selected [here show tick on selected ]
  const checkIcon = colorBox.querySelector("i");
  if (checkIcon) checkIcon.classList.remove("opacity-0");
});



// ===============================
// FONT SIZE HANDLER
// ===============================
const fontRange = document.querySelector(".font-size-range");
const fontSizeValue = document.querySelector(".font-size-value");

fontRange.addEventListener("input", () => {
  const size = fontRange.value;

  // Update CSS variable
  document.documentElement.style.setProperty(
    "--font-size-base",
    `${size}px`
  );

  // Update label text
  fontSizeValue.textContent = `${size} px`;
});

// ===============================
// FONT FAMILY HANDLER
// ===============================
const fontSelect = document.querySelector(".font-family-select");

fontSelect.addEventListener("change", () => {
  const selectedFont = fontSelect.value;

  // Update CSS variable
  document.documentElement.style.setProperty(
    "--font-family-base",
    selectedFont
  );
});
