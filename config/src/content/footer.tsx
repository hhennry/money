import { GitBranch } from "@phosphor-icons/react";
import React from "react";

export function Footer() {
  return (
    <footer className="_footer">
      <p>© 2024 Henry Rodrigues</p>
      <span className="_breach">
        <GitBranch />
        <p>B1.0.0</p>
      </span>
    </footer>
  )
}