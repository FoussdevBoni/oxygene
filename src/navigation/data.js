import { AddCircle, ChatBubble, Home, SettingsSharp, ShoppingCart, Star, Storage } from "@material-ui/icons";

import DemandeurHome from "../components/particularComponents/Demandeur/pages/sections/Home/DemandeurHome";
import Demandes from "../components/particularComponents/Demandeur/pages/sections/Demandes/Demandes";
import Discussions from "../components/particularComponents/Demandeur/pages/sections/Discussions/Discussions";
import Avis from "../components/particularComponents/Demandeur/pages/sections/Avis/Avis";
import DemandForm from "../components/particularComponents/Demandeur/pages/sections/NewDemande/DemandForm";
import Settings from "../components/particularComponents/Demandeur/pages/sections/Settings/Settings";
import AdminHome from "../components/particularComponents/Admin/pages/sections/Home/AdminHome";

 export const demandeurRoutes =({user}) => {
    return(
        [
     { icon: <Home />, label: 'Mon Dashboard', route: 'home', component:  <DemandeurHome user={user}/> },
    { icon: <Storage />, label: 'Mes demandes', route: 'demandes', component:  <Demandes user={user}/> },
    { icon: <ShoppingCart />, label: 'Mes achats', route: 'achats', component:  <DemandeurHome user={user}/> },
    { icon: <ChatBubble />, label: 'Discussions', route: 'chat', component:  <Discussions user={user}/> },
    { icon: <Star />, label: 'Gérer mes commentaires', route: 'commentaires' , component:  <Avis user={user}/> },
    { icon: <AddCircle />, label: 'Faire une nouvelle demande', route: 'add-service' , component:  <DemandForm user={user}/> },
    { icon: <SettingsSharp />, label: 'Paramètres', route: 'settings', component:  <Settings user={user}/> }
   ]
    )
 }

export const adminRoutes = ({user})=>{
    return(
     [
     { icon: <Home />, label: 'Dashboard', route: 'home', component:  <AdminHome user={user}/> },
     { icon: <Storage />, label: 'Nouvelles demandes', route: 'demandes', component:  <Demandes user={user}/> },
    { icon: <ShoppingCart />, label: 'Mes achats', route: 'achats', component:  <DemandeurHome user={user}/> },
    { icon: <ChatBubble />, label: 'Discussions', route: 'chat', component:  <Discussions user={user}/> },
    { icon: <Star />, label: 'Avis des clients', route: 'commentaires' , component:  <Avis user={user}/> },
    { icon: <AddCircle />, label: 'Faire une nouvelle demande', route: 'add-service' , component:  <DemandForm user={user}/> },
    { icon: <SettingsSharp />, label: 'Paramètres', route: 'settings', component:  <Settings user={user}/> }
   ] 
    )
}




