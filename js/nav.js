document.querySelector('header').innerHTML += ` <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
<div class="container">
  <a class="navbar-brand" href="../index.html"><img src="../img/logo-ibhf.png"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ml-auto">

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="oqueFazemos.html" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          IBHF
        </a>

        <div class="dropdown-menu" aria-labelledby="navbarDropdown">

          <a class="dropdown-item" href="historia.html">Historia</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="oqueFazemos.html">Oque fazemos</a>


        </div>
      </li>

      <li class="nav-item">
      <a class="nav-link " href="oficina.html">Oficinas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="contato.html">Contato</a>
      </li>
      <li class="nav-item">
        <span class="badge donation"><a class="nav-link donation-link" href="doe.html">Doação</a></span>
      </li>
    </ul>
  </div>
</div>
</nav>`;