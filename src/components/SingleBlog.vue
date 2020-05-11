<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>作者：{{ blog.author }}</p>
    <p>分类：</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">{{ category }}</li>
    </ul>
    <button @click="deleteSingleBlog()">删除博客</button>
    <router-link :to="'/edit/' + id">编辑博客</router-link>
  </div>
</template>

<script>
export default {
  name: 'single-blog',
  data() {
    return {
      // 获取路由参数id
      // $route.params,可以说于$route是一个中间容器,
      // 用来容纳参数,是键值对的方式,这样在这个页面(ShowBlog)执行动作传递参数到$route.params,
      // 在另外一个页面(SingleBlog)就能从$route.params里拿参数
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http
      .get(`https://wd7355665222mkmqjm.wilddogio.com/posts/${this.id}.json`)
      .then(function (data) {
        return data.json();
        // this.blog = data.body;
      })
      .then(function (data) {
        this.blog = data;
      });
  },
  methods: {
    deleteSingleBlog() {
      this.$http
        .delete(
          `https://wd7355665222mkmqjm.wilddogio.com/posts/${this.id}.json`
        )
        .then((response) => {
          // 路由跳转
          // 由于动态路由也是传递params的，
          // 所以在 this.$router.push() 方法中 path不能和params一起使用，否则params将无效。需要用name来指定页面。
          this.$router.push({ path: '/' });
        });
    },
  },
};
const a = 'ff';
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>
