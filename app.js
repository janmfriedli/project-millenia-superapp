const home = document.getElementById("home");
const chooseQuizYearBtn = document.getElementById("chooseQuizYear");
const chooseQuizEventBtn = document.getElementById("chooseQuizEvent");
const chooseQuizStarredBtn = document.getElementById("chooseQuizStarred");
const chooseSwipeBtn = document.getElementById("chooseSwipe");
const quizStarBtn = document.getElementById("quizStarBtn");
const swipeStarBtn = document.getElementById("swipeStarBtn");

const fromYearInput = document.getElementById("fromYear");
const toYearInput = document.getElementById("toYear");
const startQuizBtn = document.getElementById("startQuizBtn");
const resetStatsBtn = document.getElementById("resetStatsBtn");
const backFromQuizBtn = document.getElementById("backFromQuizBtn");
const quizControls = document.getElementById("quizControls");

const quiz = document.getElementById("quiz");
const progress = document.getElementById("progress");
const score = document.getElementById("score");
const promptEl = document.getElementById("prompt");
const questionEl = document.getElementById("question");
const revealBtn = document.getElementById("revealBtn");
const answerBox = document.getElementById("answerBox");
const answerLabel = document.getElementById("answerLabel");
const answerMain = document.getElementById("answerMain");
const answerDescription = document.getElementById("answerDescription");
const gradeBtns = document.getElementById("gradeBtns");
const againBtn = document.getElementById("againBtn");
const correctBtn = document.getElementById("correctBtn");

const swipeControls = document.getElementById("swipeControls");
const startSwipeYearInput = document.getElementById("startSwipeYear");
const startSwipeBtn = document.getElementById("startSwipeBtn");
const backFromSwipeBtn = document.getElementById("backFromSwipeBtn");
const swipeView = document.getElementById("swipeView");
const swipePosition = document.getElementById("swipePosition");
const swipeYearEl = document.getElementById("swipeYear");
const swipeEventsEl = document.getElementById("swipeEvents");
const prevYearBtn = document.getElementById("prevYearBtn");
const nextYearBtn = document.getElementById("nextYearBtn");

let deck = [];
let currentIndex = 0;
let correctCount = 0;
let againCount = 0;
let quizMode = "year-to-event";
let currentSwipeYear = 0;
let minDataYear = 0;
let maxDataYear = 0;
let touchStartX = null;
let touchStartY = null;
let starredOnly = false;

const STARRED_STORAGE_KEY = "millenia.starredYears";
const starredYears = loadStarredYears();

function loadStarredYears() {
  try {
    const saved = JSON.parse(localStorage.getItem(STARRED_STORAGE_KEY));
    return new Set(Array.isArray(saved) ? saved.filter(Number.isFinite) : []);
  } catch {
    return new Set();
  }
}

function saveStarredYears() {
  try {
    localStorage.setItem(STARRED_STORAGE_KEY, JSON.stringify([...starredYears]));
  } catch {
    // Storage unavailable: stars still work until the page is closed.
  }
}

function toggleStar(year) {
  if (starredYears.has(year)) {
    starredYears.delete(year);
  } else {
    starredYears.add(year);
  }
  saveStarredYears();
}

function renderStarButton(button, year) {
  const isStarred = starredYears.has(year);
  button.textContent = isStarred ? "★ Starred" : "☆ Star this year";
  button.classList.toggle("isStarred", isStarred);
  button.setAttribute("aria-pressed", String(isStarred));
}

function renderStarredHomeButton() {
  const dataYears = new Set(YEAR_EVENTS.map(item => Number(item.year)));
  const starredCount = [...starredYears].filter(year => dataYears.has(year)).length;
  chooseQuizStarredBtn.textContent = `★ Starred Years (${starredCount})`;
  chooseQuizStarredBtn.disabled = starredCount === 0;
}

function scrollToTopCard(element) {
  if (!element.classList.contains("hidden")) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function clearElement(element) {
  while (element.firstChild) element.removeChild(element.firstChild);
}

function setText(element, text) {
  clearElement(element);
  element.textContent = text;
}

function renderEventList(target, events) {
  clearElement(target);

  if (!events || events.length === 0) {
    const noEvents = document.createElement("div");
    noEvents.className = "noEvents";
    noEvents.textContent = "No entries for this year.";
    target.appendChild(noEvents);
    return;
  }

  const list = document.createElement("div");
  list.className = "eventList";

  events.forEach((event, index) => {
    const item = document.createElement("article");
    item.className = "eventItem";

    const title = document.createElement("div");
    title.className = "eventTitle";
    title.textContent = event.title || "Untitled event";

    const description = document.createElement("div");
    description.className = "eventDescription";
    description.textContent = event.description || "";

    if (events.length > 1) {
      const number = document.createElement("span");
      number.className = "eventNumber";
      number.textContent = `${index + 1}. `;
      title.prepend(number);
    }

    item.appendChild(title);
    if (event.description) item.appendChild(description);
    list.appendChild(item);
  });

  target.appendChild(list);
}

function groupEventsByYear(events) {
  const groupsByYear = new Map();

  events.forEach(event => {
    const year = Number(event.year);
    if (!Number.isFinite(year)) return;

    if (!groupsByYear.has(year)) {
      groupsByYear.set(year, { year, events: [] });
    }

    groupsByYear.get(year).events.push(event);
  });

  return Array.from(groupsByYear.values()).sort((a, b) => a.year - b.year);
}

function eventsForYear(year) {
  return YEAR_EVENTS.filter(event => Number(event.year) === Number(year));
}

function setDefaultYears() {
  const years = YEAR_EVENTS.map(item => Number(item.year)).filter(Number.isFinite);
  minDataYear = Math.min(...years);
  maxDataYear = Math.max(...years);
  fromYearInput.value = minDataYear;
  toYearInput.value = maxDataYear;
  startSwipeYearInput.value = minDataYear;
  currentSwipeYear = minDataYear;
}

function showHome() {
  home.classList.remove("hidden");
  quizControls.classList.add("hidden");
  swipeControls.classList.add("hidden");
  quiz.classList.add("hidden");
  swipeView.classList.add("hidden");
  renderStarredHomeButton();
  scrollToTopCard(home);
}

function setRangeFieldsVisible(isVisible) {
  fromYearInput.closest("label").classList.toggle("hidden", !isVisible);
  toYearInput.closest("label").classList.toggle("hidden", !isVisible);
}

function chooseStarredQuiz() {
  starredOnly = true;
  quizMode = "year-to-event";
  home.classList.add("hidden");
  swipeControls.classList.add("hidden");
  swipeView.classList.add("hidden");
  quizControls.classList.remove("hidden");
  setRangeFieldsVisible(false);
  startQuizBtn.textContent = "Restart Starred Quiz";
  startQuiz();
}

function chooseQuiz(mode) {
  starredOnly = false;
  setRangeFieldsVisible(true);
  quizMode = mode;
  home.classList.add("hidden");
  swipeControls.classList.add("hidden");
  swipeView.classList.add("hidden");
  quiz.classList.add("hidden");
  quizControls.classList.remove("hidden");
  startQuizBtn.textContent = mode === "year-to-event" ? "Start Quiz by Year" : "Start Quiz by Event";
  scrollToTopCard(quizControls);
}

function chooseSwipeMode() {
  home.classList.add("hidden");
  quizControls.classList.add("hidden");
  quiz.classList.add("hidden");
  swipeView.classList.add("hidden");
  swipeControls.classList.remove("hidden");
  scrollToTopCard(swipeControls);
}

function startQuiz() {
  let filteredEvents;

  if (starredOnly) {
    filteredEvents = YEAR_EVENTS.filter(item => starredYears.has(Number(item.year)));
  } else {
    const from = Number(fromYearInput.value);
    const to = Number(toYearInput.value);

    if (!Number.isFinite(from) || !Number.isFinite(to)) {
      alert("Please enter a valid year range.");
      return;
    }

    const min = Math.min(from, to);
    const max = Math.max(from, to);
    filteredEvents = YEAR_EVENTS.filter(item => Number(item.year) >= min && Number(item.year) <= max);
  }

  deck = shuffle(groupEventsByYear(filteredEvents));
  currentIndex = 0;
  correctCount = 0;
  againCount = 0;

  if (deck.length === 0) {
    if (starredOnly) {
      alert("You have no starred years left.");
      showHome();
    } else {
      alert("No event cards found in this year range.");
    }
    return;
  }

  quiz.classList.remove("hidden");
  showCard();
  scrollToTopCard(quiz);
}

function showCard() {
  if (currentIndex >= deck.length) {
    promptEl.textContent = "Finished";
    setText(questionEl, "Done");
    progress.textContent = `${deck.length} / ${deck.length}`;
    revealBtn.classList.add("hidden");
    answerBox.classList.remove("hidden");
    gradeBtns.classList.add("hidden");
    quizStarBtn.classList.add("hidden");
    answerLabel.textContent = "Result";
    setText(answerMain, "Quiz finished");
    answerDescription.textContent = `Correct: ${correctCount}. Try Again: ${againCount}.`;
    updateScore();
    return;
  }

  const group = deck[currentIndex];
  progress.textContent = `${currentIndex + 1} / ${deck.length}`;
  answerDescription.textContent = "";
  quizStarBtn.classList.remove("hidden");
  renderStarButton(quizStarBtn, group.year);

  if (quizMode === "year-to-event") {
    promptEl.textContent = "What happened in";
    setText(questionEl, group.year);
    answerLabel.textContent = group.events.length === 1 ? "Event" : `${group.events.length} Events`;
    renderEventList(answerMain, group.events);
  } else {
    promptEl.textContent = "Which year belongs to";
    renderEventList(questionEl, group.events);
    answerLabel.textContent = "Year";
    setText(answerMain, group.year);
  }

  answerBox.classList.add("hidden");
  gradeBtns.classList.add("hidden");
  revealBtn.classList.remove("hidden");
  updateScore();
}

function revealAnswer() {
  answerBox.classList.remove("hidden");
  gradeBtns.classList.remove("hidden");
  revealBtn.classList.add("hidden");
  scrollToTopCard(quiz);
}

function grade(isCorrect) {
  if (isCorrect) {
    correctCount += 1;
  } else {
    againCount += 1;
    deck.push(deck[currentIndex]);
  }
  currentIndex += 1;
  showCard();
  scrollToTopCard(quiz);
}

function updateScore() {
  score.textContent = `Correct: ${correctCount} · Try Again: ${againCount}`;
}

function resetStats() {
  correctCount = 0;
  againCount = 0;
  updateScore();
}

function startSwipeMode() {
  const startYear = Number(startSwipeYearInput.value);

  if (!Number.isFinite(startYear)) {
    alert("Please enter a valid start year.");
    return;
  }

  currentSwipeYear = Math.round(startYear);
  swipeView.classList.remove("hidden");
  renderSwipeYear();
  scrollToTopCard(swipeView);
}

function renderSwipeYear() {
  const events = eventsForYear(currentSwipeYear);
  setText(swipeYearEl, currentSwipeYear);
  renderEventList(swipeEventsEl, events);
  swipeStarBtn.classList.toggle("hidden", events.length === 0);
  renderStarButton(swipeStarBtn, currentSwipeYear);
  swipePosition.textContent = `${currentSwipeYear} · ${minDataYear}–${maxDataYear}`;
}

function moveSwipeYear(delta) {
  currentSwipeYear += delta;
  renderSwipeYear();
  scrollToTopCard(swipeView);
}

chooseQuizYearBtn.addEventListener("click", () => chooseQuiz("year-to-event"));
chooseQuizEventBtn.addEventListener("click", () => chooseQuiz("event-to-year"));
chooseQuizStarredBtn.addEventListener("click", chooseStarredQuiz);
chooseSwipeBtn.addEventListener("click", chooseSwipeMode);
quizStarBtn.addEventListener("click", () => {
  const year = deck[currentIndex].year;
  toggleStar(year);
  renderStarButton(quizStarBtn, year);
});
swipeStarBtn.addEventListener("click", () => {
  toggleStar(currentSwipeYear);
  renderStarButton(swipeStarBtn, currentSwipeYear);
});
backFromQuizBtn.addEventListener("click", showHome);
backFromSwipeBtn.addEventListener("click", showHome);
startQuizBtn.addEventListener("click", startQuiz);
revealBtn.addEventListener("click", revealAnswer);
againBtn.addEventListener("click", () => grade(false));
correctBtn.addEventListener("click", () => grade(true));
resetStatsBtn.addEventListener("click", resetStats);
startSwipeBtn.addEventListener("click", startSwipeMode);
prevYearBtn.addEventListener("click", () => moveSwipeYear(-1));
nextYearBtn.addEventListener("click", () => moveSwipeYear(1));

swipeView.addEventListener("touchstart", event => {
  if (!event.changedTouches || event.changedTouches.length === 0) return;
  touchStartX = event.changedTouches[0].clientX;
  touchStartY = event.changedTouches[0].clientY;
}, { passive: true });

swipeView.addEventListener("touchend", event => {
  if (touchStartX === null || touchStartY === null) return;
  if (!event.changedTouches || event.changedTouches.length === 0) return;

  const endX = event.changedTouches[0].clientX;
  const endY = event.changedTouches[0].clientY;
  const deltaX = endX - touchStartX;
  const deltaY = endY - touchStartY;

  touchStartX = null;
  touchStartY = null;

  if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return;

  if (deltaX > 0) {
    moveSwipeYear(-1);
  } else {
    moveSwipeYear(1);
  }
}, { passive: true });

setDefaultYears();
showHome();
