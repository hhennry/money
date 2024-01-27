import React from "react";

export function Header() {
  return(
    <header className="_header">
      <span className="_title">
        <img src="../../assets/logo.svg" alt="Logo do money" />
        <h1>Money</h1>
      </span>
      <button>Nova transação</button>
    </header>
  )
}