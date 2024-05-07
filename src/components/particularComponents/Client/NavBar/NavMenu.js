import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import FixedBottomNavigation from './BottomNavigation';
import MyContext from '../../../../Contextes/MyContext';
import { demandersItems } from '../../Demandeur/itemsMenu';

const ClientNavMenu = ({ user }) => {
  const { myVariable, setMyVariable } = useContext(MyContext);
  const routerLink = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    routerLink('/');
      setMyVariable((prevState) => ({
      ...prevState,
      activeMenuIndex: 0,
    }));
  }, []);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const openModal = () => {
    setMyVariable((prevState) => ({
      ...prevState,
      isOpen: true,
    }));
  };

  const navigate = (index) => {
     setMyVariable((prevState) => ({
      ...prevState,
      activeMenuIndex: index,
    }));
    routerLink(`/accounts/clients/${user.userId}/${user.lastName}/${demandersItems[index].label.replace(/[^A-Za-z0-9]/g, '-')}`);
  };

  const menuItems = [
    { label: 'Mes demandes', to: '/', isActive: myVariable.activeMenuIndex === 0, onClick: () => navigate(0) },
    { label: 'Nouvelle demande',to: '/', isActive: myVariable.activeMenuIndex === 1, onClick: () => navigate(1) },
    { label: 'Discussions', to: '/connexion/client', isActive: myVariable.activeMenuIndex === 2, onClick: () => navigate(2) },
    { label: 'Avis', to: '/apropos', isActive: myVariable.activeMenuIndex === 3, onClick: () => navigate(3) },
    { label: 'Payements', to: '/noscontacts', isActive: myVariable.activeMenuIndex === 4, onClick: () => navigate(4) },
  ];

  return (
    <nav className="desktop-navigation-menu">
      <div className="container">
        <ul className="desktop-menu-category-list  overflow-visible">
          {menuItems.map((item, index) => (
            <li className="menu-category" key={index} onClick={item.onClick}>
              {item.to ? (
                <NavLink exact to={item.to} className={`menu-title ${item.isActive ? 'desktop-menu-btn-active' : 'link-inactive'}`}>
                  {item.label}
                </NavLink>
              ) : (
                <div className={`menu-title cursor-pointer ${item.isActive ? 'desktop-menu-btn-active' : 'link-inactive'}`}>{item.label}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ClientNavMenu;
