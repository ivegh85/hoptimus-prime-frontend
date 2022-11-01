<template>
  <div class="container">
    <div>
      <h1>Hoptimus Prime</h1>
      <hr>
    </div>
    <div class="row" >
      <div class="col-12">
          <h3>Imprint</h3>
      </div>
        <div class="col-12">
          <h5>Hoptimus Prime GmbH</h5>
        </div>
          <div class="col-lg-6">
            <p>
            <strong>Adress</strong><br>
            Hoptimus Prime Platz 1<br>
            A-1160 Vienna<br>
            </p>
            <p><strong>VAT:</strong> ATU 12345678</p>
          </div>
      <div class="col-lg-6">
        <p>
          <strong>Email:</strong> &ensp;&ensp;
          <a href="mailto:contact@hoptimus-prime.at">contact@hoptimus-prime.at</a><br>
          <strong>Web:</strong> &ensp;&ensp;&nbsp;
          <a href="">https://www.hoptimusprime.at</a><br>
          <strong>Phone:</strong> &nbsp;
          <a href="">+43123456789</a>
        </p>
      </div>
    </div>
    <div class="row">
      <h3>
        Contact
      </h3>
      <p>
        Sylvie Pfeiffer: &ensp;&ensp;&nbsp;<a href="mailto:s.pfeiffer@hoptimus-prime.at">s.pfeiffer@hoptimus-prime.at</a><br>
        Philip Stockerer: &nbsp;<a href="mailto:p.stockerer@hoptimus-prime.at">p.stockerer@hoptimus-prime.at</a><br>
        István Végh: &ensp;&ensp;&ensp;&ensp;<a href="mailto:i.vegh@hoptimus-prime.at">i.vegh@hoptimus-prime.at</a>
      </p>
    </div>
    <div class="row">
      <img class="resize" src="../assets/beer.png" alt="Beer Icon by Freepik">
      &copy; Hoptimus Prime GmbH
    </div>
  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Imprint.vue"
}
</script>

<style scoped>

h1 {
  font-family: "Bradley Hand ITC",serif;
  text-align: center;
  padding: 17px;
}

h3, h4 {
  font-family: "Bradley Hand ITC",serif;
  font-weight: bolder;
}

.row {
  padding: 20px 80px 10px;
}

.col-12 {
  padding-bottom: 1px;
}

a {
  text-decoration: none;
}
a, a:hover {
  color: dodgerblue;
}
a:hover {
  text-decoration: underline;
}

img.resize {
  width: 50px;
  height: auto;
}

</style>
