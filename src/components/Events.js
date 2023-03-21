import './css/Events.css'
import Navbar from './Navbar';
import Strokebtn from './Strokebtn';
import Cards from './BuyCard';
function App() {
  return (
    <>
      <div className="eventbanner">
        <Navbar />
        <div className='page-name'>
          <h1 className='title'>Events</h1>
          <Strokebtn title="Create Event" fill="btn fill" />
        </div>
      </div>
      <div className="eventList">
        <h1>Upcoming Events</h1>
        <div className="lists">
          <div className="evcard">
            <Cards href="/details"/>
          </div>
          <div className="evcard">
            <Cards href="/details"/>
          </div>
          <div className="evcard">
            <Cards href="/details"/>
          </div>
          <div className="evcard">
            <Cards href="/details"/>
          </div>
          <div className="evcard">
            <Cards href="/details"/>
          </div>
          <div className="evcard">
            <Cards href="/details"/>
          </div>
          <div className="evcard">
            <Cards href="/details"/>
          </div>
        
        </div>
      </div>

    </>
  );
}

export default App;
