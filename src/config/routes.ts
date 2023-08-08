import Home from '../pages/Home'
import About from '../pages/About'
import eLib from '../pages/eLib'
import News from '../pages/News'


interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/elib",
      component: eLib,
      name: "eLib",
      protected: false
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false
    },
    {
      path: "/news",
      component: News,
      name: "News",
      protected: true,
    }
    
];

export default routes