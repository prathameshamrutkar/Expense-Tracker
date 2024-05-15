import React,{useContext} from 'react'
import {Card, CardHeader, CardContent,Typography,Grid,Divider, List} from '@material-ui/core';
import useStyles from  './styles';
import Form from './Form/Form';
import Lists from './List/List';
import useTransactions from '../../useTransactions';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard';


const Main = () => {
    const classes = useStyles();

    const {balance} = useContext(ExpenseTrackerContext);
  
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by speechly"/>
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance ₹{balance}</Typography>
            <Typography variant='subtitle1' style={{lineHeight:'1.5rem',marginTop:'20px'}}>
                   <InfoCard/>
               
            </Typography>
            <Divider className={classes.divider}/>
           <Form/>
             
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Lists/>
                </Grid>
            </Grid>

        </CardContent>


    </Card>
  );
}

export default Main