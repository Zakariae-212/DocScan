const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultText = document.getElementById("resultText");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Afficher le nom du fichier
fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    fileName.textContent = "Fichier sélectionné : " + fileInput.files[0].name;
  }
});

// Simulation OCR
analyzeBtn.addEventListener("click", () => {
  if (!fileInput.files.length) {
    alert("Veuillez importer une image.");
    return;
  }

  resultText.value =
    "Ceci est un texte simulé.\n\n" +
    "Dans la version finale, ce texte sera extrait automatiquement " +
    "depuis l’image du document grâce à l’OCR.";
});

// Copier le texte
copyBtn.addEventListener("click", () => {
  resultText.select();
  document.execCommand("copy");
  alert("Texte copié !");
});

// Télécharger en .txt
downloadBtn.addEventListener("click", () => {
  const text = resultText.value;
  if (!text) return;

  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "docscan.txt";
  a.click();

  URL.revokeObjectURL(url);
});