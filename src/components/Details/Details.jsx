
import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from '../../useTransactions';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense} >
      <CardHeader title={title} />
      <CardContent>
        <Typography variant='h5'>₹{total}</Typography>
        {/* <div style={{height:'60vh'}}> 
            <Doughnut data={chartData}/>

            </div> */}

        <Doughnut data={chartData} />

        {/* <Doughnut
            data={chartData}
            width={50}
            height={80}
            options={{ maintainAspectRatio: true }}
          /> */}

      </CardContent>


    </Card>
  )
}

export default Details