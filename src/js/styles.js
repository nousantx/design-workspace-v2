/*!
 * file: styles.js
 * re-usable class
 * tenoxui | v0.4 or higher
 */

// all styles
const styles = {
  ".flex": "display-flex",
  ".wrap": "fx-wrap-wrap",
  ".center": "display-flex flex-parent-center",
  ".column, .col": "fd-column",
  ".fx-start, .flex-start": "display-flex flex-parent-start",
  ".fx-end, .flex-end": "display-flex flex-parent-end",
  ".ai-full": "ai-stretch",
  ".w-full": "w-100%",
  ".h-full": "h-100%",
  ".full-round": "br-50%",
  ".rounded": "br-0.25rem",
  // position
  ".relative": "position-relative",
  ".absolute": "position-absolute",
  ".fixed": "position-fixed",
  ".none, [hidden]": "display-none",
};

makeStyles(styles); // apply: selector for styles generation
tenoxui(); // init: tenoxui
