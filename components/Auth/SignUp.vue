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
          <div class="col-lg-3 mb-5 mb-lg-0"></div>

          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card">
              <div class="card-body py-5 px-md-5">
                <form>
                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="nome"
                          class="form-control p-3"
                          required
                          placeholder="O seu nome"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      class="form-control p-3"
                      required
                      placeholder="O seu email"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      class="form-control p-3"
                      required
                      placeholder="A sua senha"
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-orage mb-4 w-100 text-uppercase"
                  >
                    criar conta
                  </button>
                  <nuxt-link to="/auth/Login">Você tem uma conta?</nuxt-link>
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
    return {};
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
