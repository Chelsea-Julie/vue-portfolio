<template lang="">
    <div class="card">
        <div class="card-header ">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body ">
            <slot name="cardBody"></slot>
        </div>
    </div>
</template>

<script>


export default {
    name : "CardComp"
    
}
</script>

<style scoped>
    .card{
        background-color: white;
        width: 10rem !important;
        height: 10rem;
        font-family: "Playfair Display", serif;
        font-optical-sizing: auto;
        font-weight: 50rem;
        font-style: normal;
      
    }

</style>