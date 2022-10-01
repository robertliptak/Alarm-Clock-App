import { useState } from "react";
import "./App.css";
import AlarmList from "./components/AlarmList";
import AddAlarm from "./components/AddAlarm";
//import Clock from "./components/Clock";

function App() {
  const [show, setShow] = useState(false);
  const [alarmClocks, setAlarmClocks] = useState([]);

  const showHandler = () => {
    setShow((prevState) => !prevState);
  };

  const addAlarmClock = (alarmClock) => {
    setAlarmClocks((prevState) => [...prevState, alarmClock]);
  };

  console.log(alarmClocks);

  return (
    <div className="App">
      {!show ? <h1>Alarm Clock</h1> : <h1> Add Alarm Clock</h1>}
      <div>
        {!show ? (
          <AlarmList showHandler={showHandler} alarmClocks={alarmClocks} />
        ) : (
          <AddAlarm showHandler={showHandler} addAlarmClock={addAlarmClock} />
        )}
      </div>
    </div>
  );
}

export default App;
