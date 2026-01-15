import Header from "./components/Header"
import CourseGoals from "./components/CourseGoals"
import NewGoal from "./components/NewGoal"
import goalsImg from './assets/goals.jpg'
import { useState } from "react"
import { type Goal } from './components/CourseGoals'

const App = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Learn React',
      description: 'Learn React by building a course goals app'
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      description: 'Learn TypeScript by building a course goals app'
    }
  ]);

  const handleGoalDelete = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter(goal => goal.id !== id))
  }

  const handleGoalAdd = (goal: Goal) => {
    setGoals((prevGoals) => [goal, ...prevGoals])
  }

  return (
    <main>
      <Header image={{src: goalsImg, alt: 'List of goals'}} >
        <h1>Your Course Goals</h1>
      </Header>
      <div className="content-grid">
        <NewGoal onAddGoal={handleGoalAdd} />
        <CourseGoals goals={goals} onDelete={handleGoalDelete} />
      </div>
    </main>
  )
}

export default App