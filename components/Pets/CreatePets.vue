<template>
  <div class="container mt-5">
    <div class="row">
      <nuxt-link class="nav-link" to="/">Voltar</nuxt-link>
      <div class="d-flex justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="addPets()">
                <div>
                  <label for="">Nome</label>
                  <input
                    autocomplete="off"
                    class="form-control"
                    type="text"
                    required
                    placeholder="Nome do seu pet"
                    v-model="nome"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="">Raça</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Digite a raça"
                      autocomplete="off"
                      v-model="raca"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">Peso</label>
                    <input
                      autocomplete="off"
                      placeholder="Digite o peso"
                      class="form-control"
                      type="text"
                      v-model="peso"
                    />
                  </div>
                  <button type="submite" class="btn btn-orage mt-2">
                    Adicionar
                  </button>
                </div>
              </form>
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
      nome: "",
      raca: "",
      peso: "",
      tags: [],
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
    async addPets() {
      await this.$axios
        .post(
          "/pets/createPets",
          {
            nome: this.nome,
            raca: this.raca,
            peso: this.peso,
          },
          {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          }
        )
        .then(({ data }) => {
          this.Toast().fire({
            icon: "success",
            title: data.message,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.btn-orage {
  border-radius: 10px;
  background: #ff5b2e;
  color: #fff;
  padding: 5px 10px 5px 10px;
  transition: 0.2s all;

  &:hover {
    background: #a73b1d;
  }
}
</style>
