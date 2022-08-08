import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"


function App() {
  // const name = 'Testing'
  // const x = true
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Reminder 1',
          day: '5 Mar',
          reminder: true
      },
      {
          id: 2,
          text: 'Reminder 2',
          day: '5 JUN',
          reminder: true
      },
      {
          id: 3,
          text: 'Reminder 3',
          day: '5 APRIL',
          reminder: false
      }
  ])

  // Delete Task 
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => 
    task.id===id? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <h1>Hello React!!</h1>
        <Header />
        {tasks.length > 0 ?(
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
        ('No tasks to show')}
    </div>
  );
}

export default App;
