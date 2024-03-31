/*!
 * color class generator v2
 * tenoxui v0.4.3 or higher
 * copyright (c) 2024 nousantx
 */
const colorCategories = [
  "primary",
  "accent",
  "neutral",
  "danger",
  "warning",
  "success",
  "approve",
];
const genColor = {};
colorCategories.forEach((category) => {
  for (let i = 100; i <= 900; i += 100) {
    // handle text-color class property
    const textClassName = `.text-${category}-${i}`;
    const textColorValue = `tc-[${category}-${i}]`;
    genColor[textClassName] = textColorValue;
    // handle background color class
    const bgClassName = `.bg-${category}-${i}`;
    const bgColorValue = `bg-[${category}-${i}]`;
    genColor[bgClassName] = bgColorValue;
  }
});
const color = makeStyles(genColor);
