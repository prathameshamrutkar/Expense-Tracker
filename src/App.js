import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/Authentication/login';
import SignupForm from './components/Authentication/signup';
import Dashboard from './components/DashBoard/Dashboard';
import ForgotPassword from './components/Authentication/forgotpassword';
import Home from './Home';

const App = () => {
    return(
        <div className="main">
            <Routes>
                <Route path='/' element={<LoginForm/>}></Route>
                <Route path='/signup' element={<SignupForm/>}></Route>
                <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes> 
            {/* <SignupForm /> */}
            {/* <LoginForm /> */}
        </div>
    )
}

export default App;

// import React,{useEffect,useRef} from 'react'
// import {Grid} from '@material-ui/core';
// import Details from './components/Details/Details';
// import Main from './components/Main/Main';
// import useStyles from './styles';
// import { PushToTalkButton,PushToTalkButtonContainer,ErrorPanel } from '@speechly/react-ui';

// const App = () => {
//   const classes = useStyles();
  
//   return (
//     <div>
//       <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent='center' style={{height: '100vh' }}>

//         <Grid item xs={12} sm={3} className={classes.mobile}>
//           <Details title="Income"/>
//         </Grid>

//         <Grid item xs={12} sm={3} className={classes.main}>
//           <Main/>
//         </Grid>

//         <Grid item xs={12} sm={3} className={classes.desktop}>
//           <Details title="Income"/>
//         </Grid>

//         <Grid item xs={12} sm={3} className={classes.last}> 
//           <Details title="Expense"/>
//         </Grid>

//       </Grid>
//       <PushToTalkButtonContainer>
//         <PushToTalkButton/>
//         {/* <ErrorPanel /> */}
//       </PushToTalkButtonContainer>

//     </div>
//   );
// }

// export default App
