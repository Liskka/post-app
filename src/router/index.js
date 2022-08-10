import About from "../Pages/About";
import Login from "../Pages/Login";
import PostPage from "../Pages/PostPage";
import Posts from "../Pages/Posts";


export const privateRoutes = [
  {path: '/about', component: About, exact: true},
  {path: '/posts', component: Posts, exact: true},
  {path: '/posts/:id', component: PostPage, exact: true},
]

export const publicRoutes = [
  {path: '/login', component: Login, exact: true},
]