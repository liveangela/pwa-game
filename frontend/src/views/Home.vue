<template lang="pug">
  v-container(fluid fill-height)
    v-layout(justify-center align-center)
      role-info
</template>

<script>
import RoleInfo from '@/components/RoleInfo.vue'

export default {
  name: 'Home',
  components: {
    RoleInfo
  }
}
</script>
