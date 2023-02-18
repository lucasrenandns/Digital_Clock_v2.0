import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState("")
  const [seconds, setSeconds] = useState("")
  const [period, setPeriod] = useState("")
  const [periodText, setTextPeriod] = useState("")
  const [monthFormat, setMonth] = useState("")
  const [dateFormat, setDate] = useState("")
  const [yearFormat, setYear] = useState("")
  const [dayText, setDayText] = useState("")
  const [monthText, setMonthText] = useState("")
  const [dateText, setDateText] = useState("")
  const [yearText, setYearText] = useState("")

  const getDateText = () => {
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const now = new Date()

    setDayText(daysArray[now.getDay()] + ",")
    setMonthText(monthArray[now.getMonth()])
    setDateText(addValue(now.getDate()) + ",")
    setYearText(now.getFullYear())
  }

  const getDate = () => {
    const now = new Date()
    
    setYear(now.getFullYear() + " /")
    setMonth(addValue(now.getMonth() + 1) + " /")
    setDate(addValue(now.getDate()))
  }

  const addValue = (element) => {
    if(element < 10) {
      return "0" + element
    }
    else {
      return element
    }
  }

  const clock = () => {
    const now = new Date()

    setHours(addValue(now.getHours()))
    setMinutes(addValue(now.getMinutes()))
    setSeconds(addValue(now.getSeconds()))
    
    if(hours < 12) {
      setPeriod("AM")
      setTextPeriod("Ante miridiem")
    }
    else {
      setPeriod("PM")
      setTextPeriod("Post meridiem")
    }
    setInterval(clock, 1000)
  }

  useEffect(clock)
  useEffect(getDate)
  useEffect(getDateText)

  return (
    <main className="container">
      <h1>Digital Clock</h1>

      <div className="time-container">
        <div className="time">
          <h2>{hours}</h2>
          <small>Hours</small>
        </div>{/*End time*/}

        <div className="time">
          <h2>{minutes}</h2>
          <small>Minutes</small>
        </div>{/*End time*/}

        <div className="time">
          <h2>{seconds}</h2>
          <small>Seconds</small>
        </div>{/*End time*/}

        <div className="time">
          <h2>{period}</h2>
          <small>{periodText}</small>
        </div>{/*End time*/}
      </div>{/*End time container*/}

      <div className="date-container date-container1">
        <span>{dayText}</span>
        <span>{monthText}</span>
        <span>{dateText}</span>
        <span>{yearText}</span>
      </div>{/*End date container*/}

      <div className="date-container">
        <span>{yearFormat}</span>
        <span>{monthFormat}</span>
        <span>{dateFormat}</span>
      </div>{/*End date container*/}
    </main>//End container
  )
}

export default App