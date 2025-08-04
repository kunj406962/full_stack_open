const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part=(props)=>{
  return(
    <p>
      {props.part} {props.excercise}
    </p>
  )
}

const Content=(props)=>{
  
  return(
    <div>
      <Part part={props.part[0].name} excercise={props.part[0].exercises}/>
      <Part part={props.part[1].name} excercise={props.part[1].exercises}/>
      <Part part={props.part[2].name} excercise={props.part[2].exercises}/>
    </div>
  )
}

const Total=(props)=>{
  return(
    <p>
      Number of exercises {props.part[0].exercises+props.part[1].exercises+props.part[2].exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course}/>
      <Content part= {parts}/>
      <Total part={parts} />
    </div>
  )
}

export default App