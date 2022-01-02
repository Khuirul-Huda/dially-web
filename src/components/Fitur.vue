<template>
  <div class="card">
    <p>{{ fitur }}</p>
  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;
  text-align: center;
  font-size: 80%;
  margin: 1rem;
  margin-left: 2rem;
  background: rgb(248, 230, 249);
  background: -moz-radial-gradient(
    circle,
    rgba(248, 230, 249, 1) 0%,
    rgba(148, 233, 231, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(248, 230, 249, 1) 0%,
    rgba(148, 233, 231, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(248, 230, 249, 1) 0%,
    rgba(148, 233, 231, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f8e6f9",endColorstr="#94e9e7",GradientType=1);
}
</style>

<script>
export default {
  name: "Fitur",
  props: {
    fitur: String,
  },
};
</script>
