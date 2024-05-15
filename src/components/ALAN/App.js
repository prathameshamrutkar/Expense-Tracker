import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useNavigate } from 'react-router-dom';
import "./alan.css";
import logo from './images/logo.png';
import { NewsCards, Modal } from './components';
import useStyles from './styles';

const App = () => {
	const [activeArticle, setActiveArticle] = useState(0);
	const [newsArticles, setNewsArticles] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const classes = useStyles();

	const navigate = useNavigate()
	const home = () => {

		navigate('/home')
	}

	useEffect(() => {
		alanBtn({
			key: process.env.ALAN_KEY,
			onCommand: ({ command, articles, number }) => {

				console.log(articles)
				if (command === 'newHeadlines') {
					setNewsArticles(articles);
					setActiveArticle(-1);
				} else if (command === 'highlight') {
					setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
				} else if (command === 'open') {
					const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
					const article = articles[parsedNumber - 1];

					if (parsedNumber > articles.length) {
						alanBtn().playText('Please try that again...');
					} else if (article) {
						window.open(article.url, '_blank');
						alanBtn().playText('Opening...');
					} else {
						alanBtn().playText('Please try that again...');
					}
				}
			},
		});
	}, []);

	return (
		<div>
			<button className='alanbtn' onClick={home}>home</button>
			{/* <div className={classes.logoContainer}>
				{newsArticles.length ? (
					<div className={classes.infoContainer}>
						<div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
						<div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
					</div>
				) : null}
				<img src="images/Ai.jpeg" className={classes.alanLogo} alt="logo" />
			</div> */}
			<div className={classes.newscard}>
				<NewsCards articles={newsArticles} activeArticle={activeArticle} />
			
			</div>
		</div>
	);
};

export default App;
