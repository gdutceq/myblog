<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlog" class="single-blog" :key="blog.id">
      <!--路由参数-->
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>
        <!--过滤器的本质 就是一个有参数有返回值的方法，
        (比如snippet)是个函数,blog.body作为它的第一个参数传入,也可以接收参数：-->
        {{blog.content | snippet}}
      </article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'show-blogs',
    data () {
      return {
        // 用于存储后台返回的数据
        blogs: [],
        search: ''
      }
    },
    created () {
      // 如果要请求本地文件，只能放在static文件夹下
      /* this.$http.get("https://wd7355665222mkmqjm.wilddogio.com/posts.json").then(
        function (data) {
          // console.log(data.json);
          // json数据解析为对象
          return data.json()
        }
      ) */
      axios.get('/posts.json').then(
        function (response) {
          // console.log(data.json);
          // return data.json() 这里就不用这样获取数据了
          return response.data
        }
      ).then(
        // 这里的data参数为上一个then里面函数的返回值
         (data) => {
           var blogsArray = []
           for (let key in data) {
             data[key].id = key
             blogsArray.push(data[key])
           }
           this.blogs = blogsArray
          // console.log(this.blogs)
         }
      )
    },
    computed: {
        // 实现搜索博客
      filteredBlog: function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search)
        })
      }
    },
    // 在一个组件的选项中定义本地的过滤器
    filters: {
      'to-uppercase': function (value) {
        return value.toUpperCase()
      }
    },
    // 注册局部自定义指令
    directives: {
      'rainbow': {
        bind (el, binding, vnode) {
          el.style.color = '#' + Math.random().toString(16).slice(2, 8)
        }
      }
    }
  }
</script>

<style scoped>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
  }

  #show-blogs a {
    color: #444;
    text-decoration: none;
  }

  input[type="text"] {
    padding: 8px;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

</style>
