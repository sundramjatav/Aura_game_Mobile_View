import Game from '../Components/Game';
import banner from '../assets/banner.jpg'
const Dashboard = () => {
  return (
    <div>
      <div className='h-screen'>
        <div className='w-full h-fit'>
          <img
            className='w-full h-full object-cover'
            src={banner}
            alt=""
          />
        </div>
        <Game/>
      </div>
    </div>
  );
};

export default Dashboard;
