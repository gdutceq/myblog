import ShowBlogs from './components/ShowBlogs';
import AddBlog from './components/AddBlog';
import SingleBlog from './components/SingleBlog';
import EditBlog from './components/EditBlog';

export default [
  { path: '/', component: ShowBlogs },
  { path: '/add', component: AddBlog },
  // 接收参数的路由，使用params传参要加参数名，这里的id就是参数名
  { path: '/blog/:id', component: SingleBlog },
  { path: '/edit/:id', component: EditBlog },
];
