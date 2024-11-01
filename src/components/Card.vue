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
    }

</style>