import React from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
let moment = require('moment');

const CalendarComponent = ({events}) => {

  const localizer = momentLocalizer(moment);

  return (
    <div>
      <Calendar
          localizer={localizer}
          events={events}
          views={['month', 'week', 'day']}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
      />
    </div>
  );
};

export default CalendarComponent;