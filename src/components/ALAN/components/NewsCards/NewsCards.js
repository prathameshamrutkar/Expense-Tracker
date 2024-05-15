import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import NewsCard from "./NewsCard/NewsCard";
import useStyles from "./styles.js";

const infoCards = [
	{
		color: "#1565c0",
		title: "News by Categories",
		info: "Business, Real estate, Stocks, Banking",
		text: "Give me the latest Business news",
	},
	{
		color: "#4527a0",
		title: "News by Terms",
		info: "Nifty, Sensex, Stock market, Public investments, Bank investments",
		text: "What's up with Nifty",
	},
	{
		color: "#1565c0",
		title: "News by Sources",
		info: "CNN, BBC News, Time, IGN,  ABC News...",
		text: "Give me the news from CNN",
	},
];
// #283593

const NewsCards = ({ articles, activeArticle }) => {
	const classes = useStyles();

	if (!articles.length) {
		return (
			<Grow in>
				<Grid
					className={classes.container1}
					container
					alignItems="stretch"
					spacing={3}
				>
					{infoCards.map((infoCard) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							lg={3}
							className={classes.infoCard}
						>
							<div
								className={classes.card}
								style={{ backgroundColor: infoCard.color }}
							>
								<Typography variant="h5" component="h5">
									{infoCard.title}
								</Typography>
								{infoCard.info ? (
									<Typography variant="h6" component="h6">
										<strong>{infoCard.title.split(" ")[2]}</strong>: <br />
										{infoCard.info}
									</Typography>
								) : null}
								<Typography variant="h6" component="h6">
									Try saying: <br /> <i>{infoCard.text}</i>
								</Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</Grow>
		);
	}

	return (
		<Grow in>
			<Grid
				className={classes.container2}
				container
				alignItems="stretch"
				spacing={3}
			>
				{articles.map((article, i) => (
					<Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
						<NewsCard activeArticle={activeArticle} i={i} article={article} />
					</Grid>
				))}
			</Grid>
		</Grow>
	);
};

export default NewsCards;
