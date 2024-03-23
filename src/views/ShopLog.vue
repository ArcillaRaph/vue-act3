<template>
    <div>
      <div>
        <span>Log in: </span>
        <button @click="handleClick">Login</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleClick()
      {
        localStorage.setItem('token', '12345')
        this.$router.push({ name: 'shop' })
      }
    }
  };
  </script>
  
