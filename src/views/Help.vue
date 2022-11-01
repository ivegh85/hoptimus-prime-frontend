<template>
  <div class="container">
    <div>
      <h1>Help Page</h1>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-12">
        <h3><label for="helpPageSearch">Need help?</label></h3>
        <div class="input-group mb-3">
          <input class="form-control" type="search" id="helpPageSearch" name="searchTermHelpPage" placeholder="Enter your search term"/>
          <button class="btn btn-outline-secondary" type="button" id="btnHelpSearch">Search</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <h3>FAQs</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div class="col-lg-6">
        <h3>Guidelines</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div class="row">
      <h3>Still need help?</h3>
      <p>
        If you have not find the answer to your questions in the sections above, please do not hesitate and <a href="mailto:contact@hoptimus-prime.at">contact us</a>. Our support staff will be happy to help.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Help.vue"
}
</script>

<style scoped>
h1 {
  font-family: "Bradley Hand ITC",serif;
  text-align: center;
  padding: 17px;
}

h3, h4 {
  padding-bottom: 5px;
  font-family: serif;
  font-weight: bolder;
}

p {
  text-align: justify;
}

.row {
  padding: 20px 80px 10px;
}

.col-lg-12 {
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

</style>
