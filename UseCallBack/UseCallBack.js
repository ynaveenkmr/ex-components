import React,{ useState} from 'react'
import Count from './Count'
import Title from './Titile'
import CustButton from './CustButton'


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
<CustButton handleClick={ageIncrement}>Age</CustButton>
<Count text="Salary" Count={salary}/>
<CustButton handleClick={salaryIncrement}>Salary</CustButton>
</div>
    </>
  )
}

export default UseCallBack