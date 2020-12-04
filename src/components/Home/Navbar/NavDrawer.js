import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
const NavDrawer = () => {
    const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
              <NavLink style={{width: '100%'}} to="/" className="nav-list-normal" exact   activeClassName="nav-list-active">Home</NavLink>
          </ListItem>

          <ListItem>
          <NavLink style={{width: '100%'}} to="/about"  className="nav-list-normal" activeClassName="nav-list-active">About</NavLink>
          </ListItem>
          
          <ListItem>
          <NavLink style={{width: '100%'}} to="/projects" className="nav-list-normal"  activeClassName="nav-list-active">Projects</NavLink>
          </ListItem>
          <ListItem>
          <NavLink style={{width: '100%'}} to="/blogs" className="nav-list-normal"  activeClassName="nav-list-active">Blogs</NavLink>
          </ListItem>
          <ListItem>
          <NavLink style={{width: '100%'}} to="/contact" className="nav-list-normal"  activeClassName="nav-list-active">Contact</NavLink>
          </ListItem>
      </List>
    </div>
  );
    return (
        <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{color: "#dfdf26"}}>  <MenuIcon/></Button>
          <Drawer  anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    );
};

export default NavDrawer;