import React from "react";
import Config from "./config"

export default function Bar() {
  const [isActive, setisActive] = React.useState(false)
  return (
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src=""></img>
        </a>

        <a onClick={() => { setisActive(!isActive) }} role="button" class="navbar-burger burger ${isActive ? 'is-active' : ''}`" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div class="navbar-start">
          
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <div class={`modal ${isActive ? 'is-active' : ''}`}>
                  <div class="modal-background"></div>
                  <div class="modal-content">
                      <Config/>
                  </div>
                  <button class="modal-close is-large" aria-label="close" onClick={() => { setisActive(!isActive) }}></button>
              </div>
                <a class="card button is-info ${isActive ? 'is-active' : ''}`" onClick={() => { setisActive(!isActive) }}>
                  <strong>Configuración</strong>
                </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}