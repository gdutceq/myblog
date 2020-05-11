<template>
  <div id="add-blog">
    <h2>编辑博客</h2>
    <form v-if="!submited">
      <label for="">博客标题</label>
      <input type="text" v-model="blog.title" required>

      <label for="">博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label for="vue">Vue.js</label>
        <input id="vue" type="checkbox" value="Vue.js" v-model="blog.categories">
        <label for="">Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label for="">React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label for="">Angular4</label>
        <input type="checkbox" value="Angular4" v-model="blog.categories">
      </div>
      <label for="">作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button @click.prevent="put">编辑博客</button>
    </form>

    <div v-if="submited">
      <h3>您的博客发布成功</h3>
    </div>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    //  https://jsonplaceholder.typicode.com/
    //  https://jsonplaceholder.typicode.com/posts
    name: 'add-blog',
    data () {
      return {
        id: this.$route.params.id,
        blog: {},
        authors: ['ceq', 'ljy', 'lhh', 'zps'],
        submited: false
      }
    },
    methods: {
      put: function () {
        this.$http.put('https://wd7355665222mkmqjm.wilddogio.com/posts/' + this.id +
          '.json', this.blog).then(
            function (data) {
              console.log(data)
              this.submited = true
            })
      },
      fetchData () {
        // console.log(this.id);
        // 请求页面
        this.$http.get('https://wd7355665222mkmqjm.wilddogio.com/posts/' + this.id +
          '.json').then(
          response => {
            // console.log(response.body);
            this.blog = response.body
          }

        )
      }
    },
    created () {
      this.fetchData()
  }
  }
</script>

<style scoped>
  #add-blog {
    width: 800px;
    margin: 20px auto;
    padding: 20px;
  }

  label{
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }

  textarea{
    height: 200px;
  }

  #checkboxes label{
    display: inline-block;
    margin-top: 0;
  }

  #checkboxes input{
    display: inline-block;
    margin-right: 13px;
  }

  button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }

  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }

  h3{
    margin-top: 10px;
  }
</style>
