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
            <li>
              <nuxt-link
                v-if="token"
                to="/CreatePets"
                class="nav-link mdi mdi-paw"
                aria-current="page"
                href="#"
                >Adicionar</nuxt-link
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
            <nuxt-link
              v-if="!token"
              to="/Auth/login"
              class="nav-link mdi mdi-account"
              >Entrar
            </nuxt-link>
            <button v-else @click="logout()" class="nav-link mdi mdi-logout">
              Sair
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: false,
    };
  },

  mounted() {
    if (localStorage.getItem("token")) {
      this.token = true;
    }
  },

  methods: {
    Toast() {
      return this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });
    },
    logout() {
      localStorage.clear();
      this.$router.push("/Auth/login");
      this.Toast().fire({
        icon: "success",
        title: "Sessão terminada",
      });
    },
  },
};
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
  color: #000659;
  font-weight: 600;
}
</style>
