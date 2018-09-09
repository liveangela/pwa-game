<template lang="pug">
  v-slide-y-transition
    v-container(fluid fill-height)
      v-layout(justify-center align-center)
        v-flex(xs8)
          v-form(v-model="isFormValid" ref="form" lazy-validation)
            v-text-field(
              v-model="formData.name"
              :rules="formRules.name"
              counter="16"
              hint="input your name"
              label="Name"
              required
            )
            v-layout(row justify-space-between mt-4)
              v-flex.text-xs-center(xs5)
                v-btn(
                  :disabled="!isFormValid"
                  :loading="isDialogShown"
                  @click="submit"
                ) Create
              v-flex.text-xs-center(xs5)
                v-btn(@click="clear") Clear
      fullscreen-loader(:isDialogShown="isDialogShown")
</template>

<script>
import {mapActions} from 'vuex'
import FullscreenLoader from '@/components/FullscreenLoader.vue'

export default {
  name: 'CreateRole',
  components: {
    FullscreenLoader
  },
  data() {
    return {
      isFormValid: true,
      isDialogShown: false,
      formData: {
        name: ''
      },
      formRules: {
        name: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 16) || 'Max 16 chars'
        ]
      }
    }
  },
  methods: {
    ...mapActions(['setActiveRole']),
    submit() {
      const {$refs, $accesslayer, $router, formData, setActiveRole} = this
      if ($refs.form.validate()) {
        this.isDialogShown = true
        $accesslayer('player', 'create', formData).then(data => {
          this.isDialogShown = false
          setActiveRole(data)
          $router.push('/')
        })
      }
    },
    clear() {
      this.$refs.form.reset()
    }
  }
}
</script>
