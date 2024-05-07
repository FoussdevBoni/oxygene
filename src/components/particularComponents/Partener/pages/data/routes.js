import Home from "../sections/Home";
import Prescriptions from "../sections/Prescriptions";
import Commandes from "../sections/pages/Commandes";
import Ventes from "../sections/pages/Ventes";

export const routes = [
    {
     link: 'dashboard',
     component: Home,
    },
    {
        link: 'commandes',
        component: Commandes
    },
    {
        link: 'prescriptions',
        component: Prescriptions,
    },
    {
          link: 'ventes',
        component: Ventes,
    }
]