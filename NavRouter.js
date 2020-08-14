import React, { Component, Suspense, lazy } from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'

import Loader from 'react-loader-spinner'

const Home = React.lazy(() => import('./Home'));
const Card = React.lazy(() => import('./Card/Card'));
const ImageGallery = React.lazy(() => import('./ImageGallery/SearchBarImageGallery'));
const Form = React.lazy(()=> import('./Form/Form'));
const Login = React.lazy(()=> import('./Form/Login'));
const UseParams = React.lazy(()=> import('./UseParams/UseParams'));
const UseLocation = React.lazy(()=> import('./UseLocation/UseLocation'));
const UseMemo = React.lazy(()=> import('./UseMemo/UseMemo'))
const UseCallBack = React.lazy(()=> import('./UseCallBack/UseCallBack'))
const UseRef = React.lazy(()=> import('./UseRef/UseRef'))
const CustomHooks = React.lazy(()=> import('./CustomHooks/CustomHooks'))
const UseReducer = React.lazy(() => import('./UseReducer/UseReducer'))
const UseStateFetchingAPI = React.lazy(() => import('./UseStateVsUseRedcuer-FetchAPI/UseStateFetchingAPI'))

const NavRouter=()=>{
  return(
    <>
   <Router>
        <Suspense fallback={<div><Loader type="ThreeDots" color="#00BFFF" height={80} width={80} timeout={3000}/>Loading...</div>}>
      <div className="body">
      <Link to="/Home" className="link">Home </Link>
      <Link to="/Card" className="link">Cards</Link>
      <Link to="/ImageGallery" className="link">ImageGallery</Link>
      <Link to="/Form" className="link">Form</Link> 
      <Link to="/Login" className="link">Login</Link> 
      <Link to="/UseParams" className="link">UseParams </Link>
      <Link to="/UseLocation" className="link">UseLocation </Link>
      <Link to="/UseMemo" className="link">UseMemo </Link>
      <Link to="/UseCallBack" className="link">UseCallBack </Link>
      <Link to="/UseRef" className="link">UseRef </Link>
      <Link to="/CustomHooks" className="link">CustomHooks </Link>
      <Link to="/UseReducer" className="link">useReducer</Link>
      <Link to="/UseStateFetchingAPI" className="link">UseState-Vs-UseRedcuer-FetchAPI</Link>

  <Route exact path="/" component={Home} />  
  <Route path="/Home" component={Home} />  
  <Route path="/Card" component={Card} />  
  <Route path="/ImageGallery" component={ImageGallery} /> 
  <Route path="/Form" component={Form} /> 
  <Route path="/Login" component={Login} /> 
  <Route path="/UseMemo" component={UseMemo} />
  <Route path="/UseCallBack" component={UseCallBack} />
  <Route path="/UseRef" component={UseRef} />
  <Route path="/CustomHooks" component={CustomHooks} />
  <Route path="/UseReducer" component={UseReducer} />
  <Route path="/UseStateFetchingAPI" component={UseStateFetchingAPI} />
  {/* when below redirect tag is there useParams is not working check more by removing it*/}
  {/*<Route path="/UseParams/:fname" component={UseParams} /> */} 
{/*End of useParams*/}
  <Route path="/UseLocation/" component={UseLocation} /> 
<Route path="*">  
{/*<Redirect to="/Home"/>*/}
  </Route>

</div>
      </Suspense>

      </Router>
    </>
  )
}

export default NavRouter