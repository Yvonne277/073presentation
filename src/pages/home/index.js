import oneImg from '../../assets/1.jpg';
import teamdetail from '../../assets/teamdetails.jpeg';
import { Box, Button, TextField, Typography, InputAdornment } from '@mui/material';
import PageWrapper from '../../components/pagewrapper';
import NavBarWrapper from '../../components/navbarwrapper';
import Navpagewrapper from '../../components/navpagewrapper';
import ItemCard from '../../components/itemcard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([{
    id: 1,
    cover: teamdetail,
    title: 'Team details',
    description: 'There are 5 people in our team and divided into two parts.',
  }, {
    id: 2,
    cover: oneImg,
    title: 'Overall requirement',
    description: 'Our objective is to create a Recipe Sharing Website, which includes many functionality.',
  }, {
    id: 3,
    cover: oneImg,
    title: 'Design',
    description: 'UI Design on Figma.',
  }, {
    id: 4,
    cover: oneImg,
    title: 'Technologies used',
    description: 'We use the MERN ful stack to develop our project.',
  }, {
    id: 5,
    cover: oneImg,
    title: 'Communication tools used',
    description: 'Daily chat and meeting tools.',
  }, {
    id: 6,
    cover: oneImg,
    title: 'What was delivered',
    description: '',
  }, {
    id: 7,
    cover: oneImg,
    title: 'Key challenges',
    description: 'Includ academic challenges and teamwork challenges.',
  }, {
    id: 8,
    cover: oneImg,
    title: 'Key accomplishments',
    description: 'balabala',
  }, {
    id: 9,
    cover: oneImg,
    title: 'Live Demo',
    description: 'Have a look about how is going now!',
  }])
  return (
    <PageWrapper>
      <NavBarWrapper>
        <Box sx={{ width:'100%', height: '64px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h5'>COMP30022--Team073</Typography>
        </Box>
      </NavBarWrapper>
      <Navpagewrapper>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: '35px' }}>
          <Box sx={{ width: '100%', maxWidth: '1000px' }}>
            {data.map(e => <ItemCard
              onClick={() => navigate('/detail/' + e.id)}
              sx={{ mb: '30px'}}
              key={e.id}
              title={e.title}
              cover={e.cover}
              description={e.description}
            />)}
          </Box>
        </Box>
      </Navpagewrapper>
    </PageWrapper>
  );
}

export default Home;