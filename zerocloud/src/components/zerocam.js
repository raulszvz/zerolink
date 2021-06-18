import React from "react"

export default function Cam() {
    return (
        <section class="hero is-dark is-fullheight">
          <div class="hero-body">
            <div class="container">
              <div class="column is-half is-offset-one-quarter">
                <div class="box">
                  <figure class="image is-16by9">
                    <iframe class="has-ratio" width="512" height="315" src="https://www.youtube.com/embed/Vx2aLNgGoAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </figure>
                  <div class="container mt-4">
                    <div class="columns">
                      <div class="column">
                        <div class=""><strong>ZeroCam 1</strong></div>
                      </div>
                      <div class="column">
                        <div class="tags">
                          <div class="tag is-success">Activo</div>
                          <div class="tag">UUID</div>
                          <div class="tag">Fecha</div>
                          <div class="tag">Hora</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box">
                  <div class="container">
                    <div class="columns">
                      <div class="column">
                        <div class=""><strong>ZeroCam 2</strong></div>
                      </div>
                      <div class="column">
                        <div class="tags">
                          <div class="tag is-primary">En espera</div>
                          <div class="tag">UUID</div>
                          <div class="tag">Fecha</div>
                          <div class="tag">Hora</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box">
                  <div class="container">
                    <div class="columns">
                      <div class="column">
                        <div class=""><strong>ZeroCam 3</strong></div>
                      </div>
                      <div class="column">
                        <div class="tags">
                          <div class="tag is-danger">Inactivo</div>
                          <div class="tag">UUID</div>
                          <div class="tag">Fecha</div>
                          <div class="tag">Hora</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}