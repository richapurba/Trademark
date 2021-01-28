import React from 'react';
import './LoginHeader.css';
import logo from './dark.png';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HistoryIcon from '@material-ui/icons/History';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BuildIcon from '@material-ui/icons/Build';
import MenuIcon from '@material-ui/icons/Menu';

function LoginHeader() {
	return (
		<div className="navbar">
			<input type="checkbox" id="menu" />
			<div className="upperNav">
				<img className="header__logo" src={logo} alt="trademark logo" />
				<p className="logout">Logout</p>
				<label for="menu" className="menu__bar">
					<MenuIcon className="sidebar__logo sidebar__menu"/>
				</label>
			</div>
			<div className="sidebar">
				<center>
					<VerifiedUserIcon className="user__badge" style={{fontSize: '120px'}}/>
					<br/><br/>
					<h2>Hello, User Name</h2>
				</center>
				<br/>
				<div className="sidebar__menu">
					<AccountCircleIcon className="sidebar__logo" />
					<p className="sidebar__text">Profile</p>
				</div>
				<div className="sidebar__menu">
					<NotificationsIcon className="sidebar__logo" />
					<p className="sidebar__text">Notifications</p>
				</div>
				<div className="sidebar__menu">
					<TrendingUpIcon className="sidebar__logo" />
					<p className="sidebar__text">Dashboard</p>
				</div>
				<div className="sidebar__menu">
					<MonetizationOnIcon className="sidebar__logo" />
					<p className="sidebar__text">Cryptocurrency</p>
				</div>
				<div className="sidebar__menu">
					<HistoryIcon className="sidebar__logo" />
					<p className="sidebar__text">Recent</p>
				</div>
				<div className="sidebar__menu">
					<BuildIcon className="sidebar__logo" />
					<p className="sidebar__text">Settings</p>
				</div>
				<div className="sidebar__menu">
					<p className="sidebar__text logging__out">Logout</p>
				</div>
			</div>
		</div>
	);
}

export default LoginHeader;