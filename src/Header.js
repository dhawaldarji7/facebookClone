import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div class="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/512px-Facebook_Logo_%282019%29.png"
          alt=""
        />

        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div class="header__center">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <FlagIcon />
        </div>
        <div className="header__option">
          <SubscriptionOutlinedIcon />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon />
        </div>
      </div>

      <div class="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
