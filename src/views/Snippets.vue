<template>
  <div id="snippets">
    <h1>Here we list the snippets</h1>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Url</td>
          <td>Owner</td>
          <td>Title</td>
          <td>Code</td>
          <td>Language</td>
        </tr>
      </thead>
      <tr v-for="snippet in snippets">
        <td>{{snippet.id}}</td>
        <td>{{snippet.url}}</td>
        <td>{{snippet.owner}}</td>
        <td>{{snippet.title}}</td>
        <td>{{snippet.code}}</td>
        <td>{{snippet.language}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "snippets",
  mounted() {
    //do something after mounting vue instance
      axios.get('http://localhost:8000/snippets')
      .then((res)=>{
          this.snippets = res.data.results
          console.log(this.snippets)
      })
  },
  data: () => ({
    snippets:[]
  })
}
</script>

<style lang="scss" scoped>
</style>
