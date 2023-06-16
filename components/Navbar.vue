<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-inline mb-5">
      <div class="container-fluid mb-2">
        <a class="navbar-brand mdi mdi-paw" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="mdi mdi-menu-down-outline"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link" aria-current="page" href="#"
                >Inicio</nuxt-link
              >
            </li>

            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li> -->
          </ul>
          <div>
            <nuxt-link to="/Auth/login" class="nav-link mdi mdi-account"
              >Entrar</nuxt-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg-inline {
  border-bottom: 2px solid #000659;
}

.mdi-paw,
.nav-link,
span {
  color: #000659;
}

.mdi-account {
  width: 100%;
}

li {
  text-transform: uppercase;
  color: #000659;
  font-weight: 600;
}
</style>
