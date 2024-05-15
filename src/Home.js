import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles";
import "./index.css";
import {
	PushToTalkButton,
	PushToTalkButtonContainer,
	ErrorPanel,
} from "@speechly/react-ui";
import Data from "./components/Data/Data";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "./components/Navbar/navbar";

const Home = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const auth = getAuth();

	const logOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
			});
		// localStorage.clear();
		// history.push("/");
	};

	return (
		<div className="home">
			<Navbar/>
			<Data />
			<Grid
				className={classes.grid}
				container
				spacing={0}
				alignItems="center"
				justifyContent="center"
			>
				<Grid item xs={12} sm={3} className={classes.mobile}>
					<Details title="Income" />
				</Grid>

				<Grid item xs={12} sm={3} className={classes.main}>
					<Main />
				</Grid>

				{/* <Grid item xs={12} sm={3} className={classes.desktop}>
					<Details title="Income" />
				</Grid> */}

				<Grid item xs={12} sm={3} className={classes.last}>
					<Details title="Expense" />
				</Grid>
			</Grid>
			{/* <PushToTalkButtonContainer>
				<PushToTalkButton />
				<ErrorPanel />
			</PushToTalkButtonContainer> */}
		</div>
	);
};

export default Home;
