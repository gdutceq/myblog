<template>
    <nav>
      <ul>
        <!--exact：开启router-link的严格模式-->
        <li><router-link to="/" exact>博客</router-link></li>
        <li><router-link to="/add" exact>写博客</router-link></li>
      </ul>
    </nav>
</template>

<script>
    export default {
      name: 'blogHeader'
    }
</script>

<style scoped>
  ul{
    list-style: none;
    text-align: center;
    margin: 0;
  }

  li{
    display: inline-block;
    margin: 0 10px;

  }

  /*router-link在页面还是会被渲染成a标签的*/
  a{
    color: #ffffff;
    text-decoration: none;
    padding: 12px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  nav{
    background: crimson;
    padding: 30px 0;
    margin-bottom: 40px;
  }

  /*激活链接时class属性，也就是当前页面所有与当前地址所匹配的的链接都会被添加class属性*/
  .router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
  }
</style>
