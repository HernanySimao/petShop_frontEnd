<template>
  <div class="">
    <div
      class="px-4 py-5 px-md-5 text-center text-lg-start"
      style="background-color: hsl(0, 0%, 96%)"
    >
      <div>
        <nuxt-link to="/" class="nav-link"> Voltar </nuxt-link>
      </div>
      <div class="container">
        <div class="row gx-lg-5">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h1 class="my-5 display-3 fw-bold ls-tight">
              Bem-vindo de volta! <br />
              <span class="text-orage">Vamos começar?</span>
            </h1>
            <p style="color: hsl(217, 10%, 50.8%)">
              Entre agora para acessar a plataforma e aproveitar todos os
              recursos disponíveis, estamos felizes em recebê-lo em nossa
              plataforma dedicada aos cuidados e bem-estar dos seus animais de
              estimação.
            </p>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card">
              <div class="card-body py-5 px-md-5">
                <form @submit.prevent="login()">
                  <div class="row"></div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      class="form-control p-3"
                      required
                      placeholder="O seu email"
                      v-model="email"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      class="form-control p-3"
                      required
                      placeholder="A sua senha"
                      v-model="senha"
                    />
                  </div>

                  <button
                    :disabled="loadingReq"
                    type="submit"
                    class="btn btn-orage mb-4 w-100 text-uppercase"
                  >
                    Entrar
                    <div
                      v-show="loadingReq"
                      class="spinner-border spinner-border-sm"
                      role="status"
                    >
                      <span class="sr-only"></span>
                    </div>
                  </button>
                  <nuxt-link to="/auth/signUp"
                    >Você não tem uma conta?</nuxt-link
                  >
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      senha: "",
      loadingReq: false,
    };
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
    async login() {
      try {
        const response = await this.$axios.post("/users/auth/login", {
          email: this.email,
          senha: this.senha,
        });
        this.loadingReq = true;
        localStorage.setItem("token", response.data.token);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          this.loadingReq = false;
          this.Toast().fire({
            icon: "error",
            title: "Credenciais inválidas",
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text-orage {
  color: #ff5b2e;
}
.btn-orage {
  border-radius: 20px;
  background: #ff5b2e;
  color: #fff;
  padding: 10px 30px 10px 30px;
  transition: 0.2s all;

  &:hover {
    background: #a73b1d;
  }
}
</style>
