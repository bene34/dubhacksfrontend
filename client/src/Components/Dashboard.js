import React, { useEffect } from 'react';
import CompleteHeader from './Header/CompleteHeader';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Typography from '@mui/material/Typography';
import {getCompanyAverages} from '../Actions/Actions'

const Dashboard = () => {
  // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
  // [averages, setAverages] = useState([]);

  useEffect(() => {
    //logic to get company averages
    // setAverages([12,13,15,16]);

    async function asyncGetCompanyAverages() {
      const report = await getCompanyAverages(4);
      console.log(report);
    }
    asyncGetCompanyAverages();
  }, [])

  return (
    <CompleteHeader>
      <div>
      <Typography variant="h4">Your home for employee-employer harmony</Typography>
      
      </div>
    </CompleteHeader>
  );
};

export default Dashboard;