function initialize() {
  if (document.querySelector(".copy-btn")) {
    document.querySelector(".copy-btn").addEventListener("click", () => {
      copyToClipboard();
    });
  }

  document.querySelector(".joke-display").textContent = decodeURI(
    window.location.hash.substring(1)
  );
}

function copyToClipboard() {
  var range = document.createRange();
  range.selectNode(document.querySelector(".joke-display"));
  window.getSelection().addRange(range);
  document.execCommand("copy");
}

initialize();
