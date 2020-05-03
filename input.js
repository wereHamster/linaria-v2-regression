import { css } from "linaria";
import React from "react";

export function Component() {
  const classes = {
    cell: css`
      opacity: 0;
    `,
  };

  const className = css`
  &:hover .${classes.cell}) {
    opacity: .2;
  }
  `;

  return React.createElement("div", { className });
}
