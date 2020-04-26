import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
  makeStyles,
  useTheme,
} from "@material-ui/core/";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

// ************ start of styles ************
const useStyles = makeStyles((theme) => ({
  root: {
    "& a": {
      textDecoration: "none",
      margin: "30px 40px 30px 0",
      color: "white",
      fontSize:"20px",
      fontWeight: "lighter",

      "&:last-of-type":{
        marginRight: "10px"
      },

      "&::after": {
        marginTop: "5px",
        borderRadius: "5px",
        width: "0%",
        height: "5px",
        display: "block",
        backgroundColor: "#0567b3",
        content: "' '",
        transition:
          "left 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)",
      },

      "&:hover": {
        textDecoration: "none",

        "&::after": {
          width: "100%",
          height: "5px",
          display: "block",
          content: "' '",
    
        },
      },
    },
  },

  activeLink: {
    "&::after": {
      width: "100% !important",
    },
  },

  grow: {
    flexGrow: 1,
  },

  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  appBarRoot: {
    [theme.breakpoints.up("sm")]: {
      background: "black",
      boxShadow: "none",
    },

    [theme.breakpoints.down("xs")]: {
      background: "black",
      boxShadow: "none",
      borderBottom: "1px black solid",
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  drawerPaper: {
    width: drawerWidth,
    background: "white",
    paddingTop: "15px",
    "& a": {
      color: "black",
      marginBottom: "20px",
      marginLeft: "10px",
      fontSize: "20px",
      textDecoration: "none",
    },
  },

}));

// ************ end of styles ************

function Navbar(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  //This content will display navigation links on drawer
  const drawer = (
    <div>
      {/* when drawer is open, onClick of each link, the drawer will close */}
      <List alignItems="center">
        <ListItem>
          <NavLink exact to="/" onClick={toggleDrawer("left", false)}>
           Home
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/resume" onClick={toggleDrawer("left", false)}>
            Resume
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/projects" onClick={toggleDrawer("left", false)}>
            Projects
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/contact" onClick={toggleDrawer("left", false)}>
            Contact
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Appbar is similar to a navbar */}
      <AppBar position="static" classes={{ root: classes.appBarRoot }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon onClick={toggleDrawer("left", true)} />
          </IconButton>

          {/* Appbar text will be hidden at breakpoint xsmall and down */}
          <Hidden xsDown>
            {/* Stephen */}

            {/* this pushes navlinks to the right */}
            <div className={classes.grow} />

            <NavLink exact to="/" activeClassName={classes.activeLink}>
              Home
            </NavLink>
            <NavLink to="/resume" activeClassName={classes.activeLink}>
              Resume
            </NavLink>
            <NavLink to="/projects" activeClassName={classes.activeLink}>
              Projects
            </NavLink>
            <NavLink to="/contact" activeClassName={classes.activeLink}>
              Contact
            </NavLink>
          </Hidden>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            open={state.left}
            onClose={toggleDrawer("left", false)}
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default Navbar;
