import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
  },
  infoCard: {
    display: 'flex', flexDirection: 'column', textAlign: 'center',
  },
  container1: {
    padding: '0 5%', width: '100%', marginTop:0, marginLeft:'10%'
  },
  container2: {
    padding: '0 5%', width: '100%', marginTop:"70%",
  },
});
