
// 실시간 검색어 순위 스크립트
document.addEventListener("DOMContentLoaded", function () {
  const keywords = ["태아 도플러", "흡입기", "산소포화도 측정기", "문의하기", "파트너 신청"];
  const keywordDisplay = document.getElementById("keyword-display");
  const rankNumber = keywordDisplay.querySelector(".rank-number");
  const rankKeyword = keywordDisplay.querySelector(".rank-keyword");

  let currentIndex = 0;
  function updateKeyword() {
    const nextIndex = (currentIndex + 1) % keywords.length;
    rankNumber.textContent = nextIndex + 1;
    rankKeyword.textContent = keywords[nextIndex];
    currentIndex = nextIndex;
  }
  setInterval(updateKeyword, 3000);

  const toggleIcon = document.getElementById("toggle-icon");
  const keywordList = document.getElementById("keyword-list");
  let isOpen = false;

  toggleIcon.addEventListener("click", function () {
    isOpen = !isOpen;
    keywordList.style.display = isOpen ? "block" : "none";
    toggleIcon.textContent = isOpen ? "▲" : "▼";
  });
});