<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{res}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: 'loading...'
    }
  },
  methods: {
    async init() {
      const res = await fetch('api/player/create', {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        method: 'POST',
        body: JSON.stringify({name: 'cstest1234'}),
      })
      const body = await res.json()
      console.log('fdsa', res, typeof res, body)
      this.res = body
    }
  },
  mounted() {
    this.init()
  }
}
</script>
