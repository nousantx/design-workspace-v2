defineProps({
  bdr: "border",
  bc: "borderColor",
});

makeStyles({
  ".flex": "display-flex",
  ".wrap": "fx-wrap-wrap",
  ".center": "display-flex flex-parent-center",
  ".column,.col": "fd-column",
  ".ai-full": "ai-stretch",
  ".w-full": "w-100%",
  ".h-full": "h-100%",
  ".full-round": "br-50%",
  ".rounded": "br-0.25rem",
  // position
  ".relative": "position-relative",
  ".absolute": "position-absolute",
  ".fixed": "position-fixed",
  ".none,[hidden]": "display-none",
});

tenoxui();
