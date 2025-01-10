
import axios from 'axios';

const Axiose = axios.create({
   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export default Axiose;
