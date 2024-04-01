/*!
 * file: downloader.js
 * html2canvas v1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */

document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const content = document.getElementById("content");
    html2canvas(content, {
      // width: 1100,
      // height: 200,
      scale: 3,
      backgroundColor: null, // Transparent Background [ png only ]
      imageTimeout: 0,
    }).then(function (canvas) {
      const imgData = canvas.toDataURL("image/png", 2.0); // image/svg+xml
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "design-workspace-v2.png";
      link.click();
    });
  });
