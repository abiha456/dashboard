import Dashboard from './components/Dashboard/Dashboard';
import Cards from './components/Components/Cards';
import Buttons from './components/Components/Buttons';
import Colors from './components/Utilities/Colors';
import Borders from './components/Utilities/Borders';
import Animations from './components/Utilities/Animations';
import Others from './components/Utilities/Others';
import NotFound from './components/Pages/NotFound';
import Blank from './components/Pages/Blank';
import Chart from './components/Charts/Chart';
import Table from './components/Table/Table';

const dashboardRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: <Dashboard />,
      layout: "/admin",
    },
    {
      path: "/cards",
      name: "Cards",
      component: <Cards />,
      layout: "/admin",
    },
    {
      path: "/buttons",
      name: "Buttons",
      component: <Buttons />,
      layout: "/admin",
    },
    {
      path: "/colors",
      name: "Colors",
      component: <Colors />,
      layout: "/admin",
    },
    {
      path: "/borders",
      name: "Borders",
      component: <Borders />,
      layout: "/admin",
    },
    {
      path: "/animations",
      name: "Animations",
      component: <Animations />,
      layout: "/admin",
    },
    {
      path: "/others",
      name: "Others",
      component: <Others />,
      layout: "/admin",
    },
    {
      path: "/*",
      name: "NotFound",
      component: <NotFound />,
      layout: "/admin",
    },
    {
      path: "/blank",
      name: "Blank",
      component: <Blank />,
      layout: "/admin",
    },
    {
      path: "/chart",
      name: "Chart",
      component: <Chart />,
      layout: "/admin",
    },
    {
      path: "/table",
      name: "Table",
      component: <Table />,
      layout: "/admin",
    },
]

export default dashboardRoutes;