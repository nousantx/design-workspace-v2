const tw = {
  // Aspect
  ".aspect-auto": "ratio-auto",
  ".aspect-square": "ratio-1/1",
  ".aspect-video": "ratio-[tx_video]",
  ".aspect-poster": "ratio-[tx_poster]",
  // Display
  ".block": "display-block",
  ".inline-block": "display-[tx_inline-block]",
  ".inline": "display-inline",
  ".flex": "display-flex",
  ".inline-flex": "display-[tx_inline-flex]",
  ".table": "display-table",
  ".inline-table": "display-[tx_inline-table]",
  ".table-caption": "display-[tx_table-caption]",
  ".table-cell": "display-[tx_table-cell]",
  ".table-column": "display-[tx_table-column]",
  ".table-column-group": "[display-table-column-group]",
  ".table-footer-group": "[display-table-footer-group]",
  ".table-header-group": "[display-table-header-group]",
  ".table-row-group": "display-[tx_table-row-group]",
  ".table-row": "display-[tx_table-row]",
  ".flow-root": "display-[tx_flow-root]",
  ".grid": "display-grid",
  ".inline-grid": "display-[tx_inline-grid]",
  ".contents": "display-contents",
  ".list-item": "display-[tx_list-item]",
  ".hidden": "display-none",
  // Isolation
  ".isolate": "isolation-isolate",
  ".isolation-auto": "isolation-auto",
  // Overflow
  ".overflow-auto": "over-auto",
  ".overflow-hidden": "over-hidden",
  ".overflow-clip": "over-clip",
  ".overflow-visible": "over-visible",
  ".overflow-scroll": "over-scroll",
  ".overflow-x-auto": "overX-auto",
  ".overflow-y-auto": "overY-auto",
  ".overflow-x-hidden": "overX-hidden",
  ".overflow-y-hidden": "overY-hidden",
  ".overflow-x-clip": "overX-clip",
  ".overflow-y-clip": "overY-clip",
  ".overflow-x-visible": "overX-visible",
  ".overflow-y-visible": "overY-visible",
  ".overflow-x-scroll": "overX-scroll",
  ".overflow-y-scroll": "overY-scroll",
  // Position
  ".static": "position-static",
  ".fixed": "position-fixed",
  ".absolute": "position-absolute",
  ".relative": "position-relative",
  ".sticky": "position-sticky",
  // Visibility
  ".visible": "visibility-visible",
  ".invisible": "visibility-hidden",
  ".collapse": "visibility-collapse",
  // Flex Direction
  ".flex-row": "fd-row",
  ".flex-row-reverse": "fd-[tx_row-rev]",
  ".flex-col": "fd-column",
  ".flex-col-reverse": "fd-[tx_col-rev]",
  // Flex Wrap
  ".flex-wrap": "flex-wrap-wrap",
  ".flex-wrap-reverse": "flex-wrap-[tx_wrap-rev]",
  ".flex-nowrap": "flex-wrap-nowrap",
  // Flex
  ".flex-1": "flex-0%",
  ".flex-auto": "auto-flex-auto",
  ".flex-initial": "initial-flex-auto",
  ".flex-none": "flex-none",
  // Justify & Align

  ".justify-normal": "jc-normal",
  ".justify-start": "jc-[tx_fx-start]",
  ".justify-end": "jc-[tx_fx-end]",
  ".justify-center": "jc-center",
  ".justify-between": "jc-[tx_s-between]",
  ".justify-around": "jc-[tx_s-around]",
  ".justify-evenly": "jc-[tx_s-evenly]",
  ".justify-stretch": "jc-stretch",
  ".justify-items-start": "ji-start",
  ".justify-items-end": "ji-end",
  ".justify-items-center": "ji-center",
  ".justify-items-stretch": "ji-stretch",
  ".justify-self-auto": "js-auto",
  ".justify-self-start": "js-start",
  ".justify-self-end": "js-end",
  ".justify-self-center": "js-center",
  ".justify-self-stretch": "js-stretch",
  ".content-normal": "ac-normal",
  ".content-center": "ac-center",
  ".content-start": "ac-[tx_fx-start]",
  ".content-end": "ac-[tx_fx-end]",
  ".content-between": "ac-[tx_s-between]",
  ".content-around": "ac-[tx_s-around]",
  ".content-evenly": "ac-[tx_s-evenly]",
  ".content-baseline": "ac-baseline",
  ".content-stretch": "ac-stretch",
  ".items-baseline": "ai-baseline",
  ".items-start": "ai-[tx_fx-start]",
  ".items-end": "ai-[tx_fx-end]",
  ".items-center": "ai-center",
  ".items-stretch": "ai-stretch",
  ".self-auto": "as-auto",
  ".self-start": "as-[tx_fx-start]",
  ".self-end": "as-[tx_fx-end]",
  ".self-center": "as-center",
  ".self-stretch": "as-stretch",
  ".self-baseline": "as-baseline",
  // Font Family
  ".font-sans": "family-[tx_font-sans]",
  ".font-serif": "family-[tx_font-serif]",
  ".font-mono": "family-[tx_font-mono]",
  // Font Size
  ".text-xs": "fs-0.75rem lh-1rem",
  ".text-sm": "fs-0.875rem lh-1.25rem",
  ".text-base": "fs-1rem lh-1.5rem",
  ".text-lg": "fs-1.125rem lh-1.75rem",
  ".text-xl": "fs-1.25rem lh-1.75rem",
  ".text-2xl": "fs-1.5rem lh-2rem",
  ".text-3xl": "fs-1.875rem lh-2.25rem",
  ".text-4xl": "fs-2.25rem lh-2.5rem",
  ".text-5xl": "fs-3rem lh-1",
  ".text-6xl": "fs-3.75rem lh-1",
  ".text-7xl": "fs-4.5rem lh-1",
  ".text-8xl": "fs-6rem lh-1",
  ".text-9xl": "fs-8rem lh-1",
  // Font Weight
  ".font-thin": "fw-100",
  ".font-extralight": "fw-200",
  ".font-light": "fw-300",
  ".font-normal": "fw-400",
  ".font-medium": "fw-500",
  ".font-semibold": "fw-600",
  ".font-bold": "fw-700",
  ".font-extrabold": "fw-800",
  ".font-black": "fw-900",
  // Letter Spacing
  ".tracking-tighter": "ls--0.05em",
  ".tracking-tight": "ls--0.025em",
  ".tracking-normal": "ls-0em",
  ".tracking-wide": "ls-0.025em",
  ".tracking-wider": "ls-0.05em",
  ".tracking-widest": "ls-0.1em",
  // Line Height
  ".leading-3": "lh-.75rem",
  ".leading-4": "lh-1rem",
  ".leading-5": "lh-1.25rem",
  ".leading-6": "lh-1.5rem",
  ".leading-7": "lh-1.75rem",
  ".leading-8": "lh-2rem",
  ".leading-9": "lh-2.25rem",
  ".leading-10": "lh-2.5rem",
  ".leading-none": "lh-1",
  ".leading-tight": "lh-1.25",
  ".leading-snug": "lh-1.375",
  ".leading-normal": "lh-1.5",
  ".leading-relaxed": "lh-1.625",
  ".leading-loose": "lh-2",
  // Text Align
  ".text-left": "ta-left",
  ".text-center": "ta-center",
  ".text-right": "ta-right",
  ".text-justify": "ta-justify",
  ".text-start": "ta-start",
  ".text-end": "ta-end",
  // Text Decoration Line
  ".underline": "text-deco-line-underline",
  ".overline": "text-deco-line-overline",
  ".line-through": "text-deco-line-[tx_line-through]",
  ".no-underline": "text-deco-line-none",
  // Text Transform
  ".uppercase": "text-tr-uppercase",
  ".lowercase": "text-tr-lowercase",
  ".capitalize": "text-tr-capitalize",
  ".normal-case": "text-tr-none",
  // Text Overflow
  ".truncate": "over-hidden text-over-ellipsis white-space-nowrap",
  ".text-ellipsis": "text-over-ellipsis",
  ".text-clip": "text-over-clip",
  // White Space
  ".whitespace-normal": "white-space-normal",
  ".whitespace-nowrap": "white-space-nowrap",
  ".whitespace-pre": "white-space-pre",
  ".whitespace-pre-line": "white-space-[tx_pre-line]",
  ".whitespace-pre-wrap": "white-space-[tx_pre-wrap]",
  ".whitespace-break-spaces": "white-space-[tx_break-spaces]",
  // Background
  // 1. Attachment
  ".bg-fixed": "bg-attach-fixed",
  ".bg-local": "bg-attach-local",
  ".bg-scroll": "bg-attach-scroll",
  // 2. Clip
  ".bg-clip-border": "bg-clip-[tx_border-box]",
  ".bg-clip-padding": "bg-clip-[tx_padding-box]",
  ".bg-clip-content": "bg-clip-[tx_content-box]",
  ".bg-clip-text": "bg-clip-text",
  // 3. Origin
  ".bg-origin-border": "bg-origin-[tx_border-box]",
  ".bg-origin-padding": "bg-origin-[tx_padding-box]",
  ".bg-origin-content": "bg-origin-[tx_content-box]",
  // 4. Position
  ".bg-bottom": "bg-loc-bottom",
  ".bg-center": "bg-loc-center",
  ".bg-left": "bg-loc-left",
  ".bg-left-bottom": "bg-loc-[tx_left-bottom]",
  ".bg-left-top": "bg-loc-[tx_left-top]",
  ".bg-right": "bg-loc-right",
  ".bg-right-bottom": "bg-loc-[tx_right-bottom]",
  ".bg-right-top": "bg-loc-[tx_right-top]",
  ".bg-top": "bg-loc-top",
  // 5. Repeat
  ".bg-repeat": "bg-repeat-repeat",
  ".bg-no-repeat": "bg-repeat-[tx_no-repeat]",
  ".bg-repeat-x": "bg-repeat-[tx_x-repeat]",
  ".bg-repeat-y": "bg-repeat-[tx_y-repeat]",
  ".bg-repeat-round": "bg-repeat-round",
  ".bg-repeat-space": "bg-repeat-space",
  // Border Radius
  ".rounded-none": "br-0px",
  ".rounded-sm": "br-0.125rem",
  ".rounded": "br-0.25rem",
  ".rounded-md": "br-0.375rem",
  ".rounded-lg": "br-0.5rem",
  ".rounded-xl": "br-0.75rem",
  ".rounded-2xl": "br-1rem",
  ".rounded-3xl": "br-1.5rem",
  ".rounded-full": "br-9999px",
  // Border Style
  ".border-solid": "bs-solid",
  ".border-dashed": "bs-dashed",
  ".border-dotted": "bs-dotted",
  ".border-double": "bs-double",
  ".border-hidden": "bs-hidden",
  ".border-none": "bs-none",
};
