<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid mt-1">
        <a class="navbar-brand logo" href="#">Finance</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex me-auto mb-2 mb-lg-0">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-secondary" type="submit">Search</button>
          </form>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/pages" class="nav-link">News</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/currency" class="nav-link">Currency</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/finance" class="nav-link">Finance</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/binance" class="nav-link">Binance</router-link>
            </li>
            <li class="nav-item mt-1 me-1">
              <button class="btn btn-sm btn-outline-secondary" type="submit">Login</button>
            </li>
            <li class="nav-item mt-1 me-1">
              <button class="btn btn-sm btn-outline-secondary" type="submit">Register</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
a {
  color: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 600;
  &.logo {
    font-size: 25px;
  }
}
</style>