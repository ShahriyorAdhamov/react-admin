import { Agenda, Day, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule'

function Scheduler(props) {
  return (
  <div>
    <ScheduleComponent>
      <Inject services={[ Day, Week, Month, WorkWeek, Agenda ]}/>
    </ScheduleComponent>
  </div>
  )

}


export default Scheduler
