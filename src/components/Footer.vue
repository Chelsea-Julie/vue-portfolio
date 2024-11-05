<template>
    <footer class="container-fluid">
        <div class="row">
            <p class="lead">Chelsea's Portfolio &copy;  <span class="shadow">{{ cYear }} </span></p>
        </div>
    </footer>
</template>

<style scoped>
    p{
    color: aliceblue;
    font-family: "Dancing Script", cursive;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;
    font-size: 1.5rem !important;
    }

</style>


<script>
export default {
    name: "FooterComp",
    data() {
        return {
            cYear: new Date().getUTCFullYear()
        }
    },
}
</script>