import React, { useRef } from "react";

const AddAlarm = ({ showHandler, addAlarmClock }) => {
  const timeRef = useRef();
  const dayRef = useRef();
  const textRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const time = timeRef.current.value;
    const day = dayRef.current.value;
    const text = textRef.current.value;

    const alarmData = {
      time,
      day,
      text,
      id: Math.random(),
    };

    addAlarmClock(alarmData);
    showHandler();
  };

  return (
    <div>
      <div>
        <div>
          <button onClick={() => showHandler()}>Cancel</button>
        </div>
        <div>
          <h3>Add Alarm Clock</h3>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <input type="time" ref={timeRef} />
            <select ref={dayRef}>
              <option value="">Never</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            <input type="text" placeholder="Alarm Clock" ref={textRef} />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAlarm;
