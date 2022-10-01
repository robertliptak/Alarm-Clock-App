import React from "react";

import { FaPlus } from "react-icons/fa";

const AlarmList = ({ showHandler, alarmClocks }) => {
  return (
    <div>
      <div>
        <button>
          <FaPlus onClick={() => showHandler()} />
        </button>
      </div>
      <div>
        <ul>
          {alarmClocks.map((alarmClock) => (
            <li>
              {alarmClock.time} {alarmClock.day} {alarmClock.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlarmList;
