import React,{ useState} from 'react'
import Count from './Count'
import Title from './Titile'
import Button from './Button'


function UseCallBack(){
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  const ageIncrement = () => {
    setAge(age+1)
  }
  const salaryIncrement = () => {
    setSalary(salary+20000)
  }
  return(
    <>
<div>
<Title />
<Count text="Age" Count={age}/>
<Button handleClick={ageIncrement}>Age</Button>
<Count text="Salary" Count={salary}/>
<Button handleClick={salaryIncrement}>Salary</Button>
</div>
    </>
  )
}

export default UseCallBack