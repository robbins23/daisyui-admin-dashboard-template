import { CALENDAR_EVENT_STYLE } from "../../components/CalendarView/util"

const THEME_BG = CALENDAR_EVENT_STYLE

function CalendarEventsBodyRightDrawer({filteredEvents}){
    return(
        <>
             {
                filteredEvents.map((e, k) => {
                    return <div key={k} className={`grid mt-3 card  rounded-box p-3 ${THEME_BG[e.theme] || ""}`}>
                            {e.title}
                        </div> 
                })
            }
        </>
    )
}

export default CalendarEventsBodyRightDrawer