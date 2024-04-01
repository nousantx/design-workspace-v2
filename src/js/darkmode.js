let darkMode = false;
// store color class into an object
const genColor = {};

function darkModeSwitch() {
  darkMode = !darkMode;
  const val = darkMode ? (i) => 1000 - i : (i) => i;
  colorCategories.forEach((category) => {
    for (let i = 100; i <= 900; i += 100) {
      const textClassName = `.text-${category}-${i}`;
      const bgClassName = `.bg-${category}-${i}`;
      genColor[textClassName] = `tc-[${category}-${val(i)}]`;
      genColor[bgClassName] = `bg-[${category}-${val(i)}]`;
    }
  });
  makeStyles(genColor);
}

const color = makeStyles(genColor);
