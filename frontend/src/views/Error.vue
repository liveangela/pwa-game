<template lang="pug">
  h2 {{type}}
</template>

<script>
export default {
  name: 'Error',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
