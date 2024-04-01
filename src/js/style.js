/*!
 * new type, props, styles may be used
 * tenoxui v0.4.3 or higher
 * copyright (c) 2024 nousantx
 */

defineProps({
  // tenoxui v0.6.1 doesn't need define properties using an array
  post: "position",
  fwx: "flex-wrap",
  bim: "backgroundImage",
  bdr: "border",
  bc: "borderColor",
  "max-width": "maxWidth",
  "min-width": "minWidth",
  "max-height": "maxHeight",
  "min-height": "minHeight",
  "text-tr": "textTransform",
});

makeStyles({
  ".flex": "display-flex",
  ".flex-wrap": "fwx-wrap",
  ".w-full": "w-100%",
  ".w-mx": "w-100%",
  ".h-full": "h-100%",
  ".h-mx": "h-100%",
  ".fx-ctr, flex-center, .center": "display-flex flex-parent-center",
  ".fx-str": "display-flex flex-parent-[flex-start]",
  ".ai-str, .ai-start": "ai-[flex-start]",
  ".ai-end": "ai-[flex-end]",
  ".ai-ctr": "ai-center",
  ".ai-full": "ai-stretch",
  ".jc-str, .jc-start": "jc-[flex-start]",
  ".jc-end": "jc-[flex-end]",
  ".jc-ctr": "jc-center",
  ".space-b": "jc-[sb]",
  ".space-a": "jc-[sa]",
  ".space-e": "jc-[se]",
  ".fd-col,.fd-clm": "fd-column",
  ".relative": "position-relative",
  ".fixed": "position-fixed",
  ".round,.circle": "br-50%",
  ".absolute": "position-absolute",
  // Tailwind Class
  ".text-center": "ta-center",
  ".nowrap": "white-space-nowrap",
  // Color
  ".dark": "tc-[neutral-100] bg-[neutral-900]",
  ".dark p": "tc-[neutral-200]",
  ".light": "tc-[neutral-900] bg-[neutral-100]",
  ".light p": "tc-[neutral-800]",
  // Design
  ".design-dark": "tc-white bg-black",
  ".design-light": "tc-black bg-white",
  ".darker": "tc-black bg-white",
  ".lighter": "tc-gray bg-#111",
});
