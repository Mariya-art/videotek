<template>
  <button class="close-button" @click="onClose"></button>
</template>

<script>
export default {
    name: 'CloseButton',
    methods: {
      onClose () {
        this.$router.go(-1)
      }
    }
}
</script>

<style scoped>
.close-button {
    height: 30px;
    width: 30px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: black;
    color: white;
    transition: .3s all ease-in-out;
}
.close-button:hover {
    border: 1px solid #eb5804;
    background-color: #eb5804;
    opacity: .9;
}
.close-button::before {
    content: '';
    display: block;
    border-top: 1px solid white;
    transform: translateY(.5px) rotate(45deg);
    transition: .3s all ease-in-out;
}
.close-button:hover::before {
    border-top: 1px solid black;
}
.close-button::after {
    content: '';
    display: block;
    border-bottom: 1px solid white;
    transform: translateY(-.5px) rotate(-45deg);
    transition: .3s all ease-in-out;
}
.close-button:hover::after {
    border-bottom: 1px solid black;
}
</style>
