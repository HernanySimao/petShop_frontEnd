<template>
  <div class="mt-5">
    <footer class="text-center text-lg-start bg-bb text-muted">
      <section class="p-2">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-darkBlue">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Páginas</h6>
              <small class="text-reset">Inicio</small> <br />
              <small class="text-reset">Categoria</small> <br />
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-darkBlue">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Serviços</h6>
              <small class="text-reset">Adicionar pets</small> <br />
              <small class="text-reset">Venda de pets</small> <br />
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-darkBlue">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
              <small class="text-reset mdi mdi-map-marker-radius">
                Luanda, AO</small
              >
              <br />
              <small class="text-reset mdi mdi-email">
                petshop@gmail.com
              </small>
              <br />
              <small class="text-reset mdi mdi-phone">+244930586957</small>
              <br />
            </div>
          </div>
        </div>
      </section>

      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.bg-bb {
  background: rgba(255, 166, 0, 0.305);
}

h6,
small,
.text-darkBlue,
.mdi-paw {
  color: #000659;
}
</style>
