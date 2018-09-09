<template lang="pug">
  v-dialog(
        v-model="isDialogShown"
        width="60%"
        hide-overlay
        persistent
      )
        v-card(color="primary" dark)
          v-card-text
            | {{loadingText}}
            v-progress-linear(
              class="mb-0"
              color="white"
              indeterminate
            )
</template>

<script>
export default {
  name: 'FullscreenLoader',
  props: {
    isDialogShown: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: 'loading'
    }
  }
}
</script>
