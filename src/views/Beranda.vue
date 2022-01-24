<template>
  <div>
    <img src="../assets/logo.png" alt="Dially Logo" />
    <h1>Dially Notes</h1>
    <h4>Diary untuk tugasmu</h4>
    <a
      href="https://www.mediafire.com/file/f5kmax4nehlo4al/Dially.apk/file" target="_blank" class="btndw"
      >DOWNLOAD</a>
    <p>
      Sebuah aplikasi yang akan membuat kemudahan di hari-harimu yang cerah.
      Aplikasi ini didesain untuk digunakan oleh siapapun khususnya para
      pelajar. Hey kamu, cepetan pasang aplikasi ini di hapemu, biar kamu gak
      kelupaan lagi kalau ada tugas-tugas sekolah misalnya.
    </p>
    <h3 class="title">Kenapa Harus Dially?</h3>
    <div class="flex">
      <Fitur fitur="Sederhana" class="item" />
      <Fitur fitur="Menggunakan Bahasa Indonesia" class="item" />
      <Fitur fitur="Ukuran sangat kecil" class="item" />
      <Fitur fitur="Selalu diperbarui" class="item" />
      <Fitur fitur="Bisa bikin kamu keren" class="item" />
      <Fitur fitur="Bikin kamu lebih displin" class="item" />
      <Fitur fitur="Bukan buatan asing" class="item" />
    </div>
    <h3 class="title">Siapa Saja Yang Sudah Memakai Dially?</h3>
    <div>
      Sejak dirilis (sebenernya belum hehe)di awal tahun 2022, aplikasi Dially Notes sudah didownload
      sebanyak 0 kali. Namun sebelum dirilis di toko aplikasi, aplikasi Dially
      sudah didownload lebih dari 100 kali dalam versi alpha, dan 50 kali dalam
      versi beta.
    </div>
    <h3 class="title">Perjalanan Dially Notes</h3>
    <div class="flex">
      <T2020 class="item" />
      <T2021 class="item" />
      <T2022 class="item" />
    </div>
  </div>
</template>
<style>
.questions {
  color: purple;
}

.title {
  color: purple;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: auto;
  align-content: start;
}
.item {
  flex: 1 0 auto;
  margin: 6px;
}
.btndw {
  background-color: rgb(252, 105, 130);
  /*text-decoration-color: white;*/
  color: white;
  border-radius: 40px;
  padding: 1%;
  font-size: 80%
  
}
</style>

<script>
import Fitur from "@/components/Fitur.vue";
import T2020 from "@/components/timeline/2020.vue";
import T2021 from "@/components/timeline/2021.vue";
import T2022 from "@/components/timeline/2022.vue";

export default {
  name: "Beranda",
  components: {
    Fitur,
    T2020,
    T2021,
    T2022,
  },
};
</script>
