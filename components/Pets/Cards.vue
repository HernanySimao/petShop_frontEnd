<template>
  <div class="container">
    <div class="row">
      <div v-for="i in 4" :key="i" class="col-12 col-md-3 mt-4 p-md-5">
        <div class="d-flex justify-content-center">
          <div class="card bg-orange mt-2 p-2">
            <div class="card-body">
              <h1 class="card-title text-muted text-center">Dog</h1>
              <img class="image-dogs" src="image/dog.png" alt="" />
              <div class="text-center d-flex justify-content-between">
                <small>Raça: YYY</small>
                <small>Peso: YYY </small>
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
  name: "CAO",
  data() {
    return {};
  },

  props: {
    data: String | [],
  },
};
</script>

<style lang="scss" scoped>
.bg-orange {
  box-shadow: 0 0 13px 1px rgba($color: #000000, $alpha: 0.1);
  background: rgba(255, 166, 0, 0.305);
}

.card {
  border-radius: 20px;
}

.image-dogs {
  width: 100%;
}
</style>
