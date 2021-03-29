<template>
<nav class="navbar navbar-expand-lg border-bottom sticky-top">
        <div class="container">
        
        <router-link class="fw-bolder title" style="text-decoration: none" to="/"><i class="fas fa-route"></i> API Project</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class='collapse navbar-collapse mx-5 me-auto' id='navbarNav'>
                <ul class="navbar-nav mt-1 ">
                    <li class="nav-item mx-4">
                        <router-link to="/Api1">Cocktail API</router-link>
                    </li>
                    <li class="nav-item mx-4">
                        <router-link to="/Api2">URL Shortener</router-link>
                    </li>
                    <li class="nav-item mx-4">
                        <router-link to="/Api3">Phone Number Validator</router-link>
                    </li>
                </ul>
          </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cantarell:wght@700&family=Cinzel:wght@600&display=swap');

.router-link-active {
    color: rgb(175, 175, 175);
    text-decoration: underline;
}

nav{
    background: black;
    font-family: 'Cantarell', sans-serif;
    font-size: large;
}

ul a {
    text-decoration: none;
    color: rgb(175, 175, 175);
}
.title {
    font-size: 25px;
    color:#419263;
}
</style>