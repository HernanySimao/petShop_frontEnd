<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12 text-color">
          <h1>
            {{ data?.title }}
          </h1>
          <div v-html="data?.description"></div>
          <div>
            <form action="">
              <input
                class="mt-4 p-2 w-100 p-3"
                placeholder="O que você está procurando?"
                type="text"
                v-model="search"
                @input="findSearch()"
              />
              <div class="d-flex p-1 justify-content-between">
                <p v-show="errorSearch" class="mt-1 text-muted">
                  Não encontramos nada, volte a pesquisar
                </p>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 col-md-6 mt-2">
          <div class="d-flex justify-content-center">
            <img
              class="image-responsive d-none d-md-block"
              src="image/pet.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <PetsCards :data="listCards"></PetsCards>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listCards: [],
      data: {
        title:
          " Bem-vindo ao Petshop Online - Seu destino completo para cuidados de animais de estimação!",
        description:
          "Cuidados completos para seu pet: Petshop Online, entrega garantida!",
      },
      search: "",
      errorSearch: false,
    };
  },

  mounted() {
    this.$axios
      .get("/pets/findAll")
      .then(({ data }) => {
        this.listCards = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    async findSearch() {
      await this.$axios
        .get(`/pets/findByName/${this.search}`)
        .then(({ data }) => {
          if (!data.length) {
            this.errorSearch = true;
          } else {
            this.listCards = data;
            this.errorSearch = false;
          }
        })
        .catch((e) => {});
    },
  },
};
</script>

<style scoped lang="scss">
.text-color {
  color: #000659;
}
h1 {
  font-weight: 500;
}
input {
  border-radius: 20px;
  box-shadow: 0 0 10px 4px rgba($color: #000000, $alpha: 0.1);
  border: none;
  &::placeholder {
    padding: 10px 10px;
    color: gray;
  }
  &:focus {
    outline: none;
  }
}

.image-responsive {
  width: 300px;
  border-radius: 40px;
  box-shadow: 0 0 10px 4px rgba($color: #000000, $alpha: 0.1);
  &:hover {
    filter: blur(0.3px);
  }
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
