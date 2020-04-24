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
import { Link } from "react-router-dom";

const drawerWidth = 240;

// ************ start of styles ************
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& a": {
      textDecoration: "none",
      marginRight: "20px",
      color: "white",
      padding: "7px 0",
    },
    "& a:hover": {
      textDecoration: "none",
      color: "blue",
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
      background: "inherit",
      boxShadow: "none",
    },

    [theme.breakpoints.down("xs")]: {
      background: "inherit",
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

  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
    background: "white",
    paddingTop: "15px",
    "& a": {
      color: 'black',
      marginBottom: "20px",
      marginLeft: "10px",
      fontSize: "20px",
      textDecoration: "none"
    },
  },

  content: {
    padding: theme.spacing(2),
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

  //This content will display navigation links
  const drawer = (
    <div>
      {/* when drawer is open, onClick of each link, the drawer will close */}
      <List alignItems="center">
        <ListItem>
          <Link exact to="/" onClick={toggleDrawer("left", false)}>
            About
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/resume" onClick={toggleDrawer("left", false)}>
            Resume
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/projects" onClick={toggleDrawer("left", false)}>
            Projects
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/contact" onClick={toggleDrawer("left", false)}>
            Contact
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Appbar is similar to a navbar */}
      <AppBar position="fixed" classes={{ root: classes.appBarRoot }}>
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

            <Link to="/">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            
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

      {/* content for links in appbar */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default Navbar;
