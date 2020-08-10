import React,{ useState, useCallback} from 'react'
import Count from './Count'
import Title from './Titile'
import CustButton from './CustButton'


function UseCallBack(){
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  const ageIncrement = useCallback(() => {
    setAge(age+1)
  },[age])
  const salaryIncrement = useCallback(() => {
    setSalary(salary+20000)
  },[salary])
  return(
    <>
<div>
<Title />
<Count text="Age" count={age}/>
<CustButton handleClick={ageIncrement}>Age</CustButton>
<Count text="Salary" count={salary}/>
<CustButton handleClick={salaryIncrement}>Salary</CustButton>
</div>
    </>
  )
}

export default UseCallBack