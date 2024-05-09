import React, { Component, Suspense } from 'react'
import {Route, Routes } from 'react-router-dom'
import './../src/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
//const DashBoardLayout = React.lazy(() => import('./layout/DefaultLayout'))
const SignUpLayout = React.lazy(() => import('./Scenes/SignUpPage/Signup'))
const SignUpConfirmation = React.lazy(() => import('./Scenes/SignUpPage/SignUpConfirmation'))
const LoginLayout = React.lazy(() => import('./Scenes/LoginPage/Login'))
const ForgotPasswordLayout = React.lazy(() =>
  import('./Scenes/ForgotPasswordPage/ForgotPassword'),
)
const FrgtPassVerificationLayout = React.lazy(() =>
  import('./Scenes/ForgotPasswordPage/ForgotPasswordVerification'),
)
const SetNewPasswordLayout = React.lazy(() =>
  import('./Scenes/ForgotPasswordPage/SetNewPassword'),
)
const SuccessfullySavedPassLayout = React.lazy(() =>
  import('./Scenes/ForgotPasswordPage/SuccessfullySavedPassword'),
)
const DashBoardPage = React.lazy(() =>
  import('./Scenes/DashBoard/DashBoard'),
)
const ProductList = React.lazy(() =>
  import('./Scenes/ProductList/ProductList'),
)
const EditProductPage = React.lazy(() =>
  import('./Scenes/Product/Product'),
)
const NewProduct = React.lazy(() =>
  import('./Scenes/newProduct/NewProduct'),
)
class App extends Component {
  render() {
    return (
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<SignUpLayout />}/>
            <Route path="/login" element={<LoginLayout />}></Route>
            <Route path="/forgotPassword" element={<ForgotPasswordLayout />}></Route>
            <Route path="/passwordVerification" element={<FrgtPassVerificationLayout />}></Route>
            <Route path="/setNewPassword" element={<SetNewPasswordLayout />}></Route>
            <Route
              path="/successfullySavedPassword"
              element={<SuccessfullySavedPassLayout />}
            ></Route>
             <Route
              path="/SignUpConfirmation"
              element={<SignUpConfirmation />}
            ></Route>
             <Route
              path="/DashBoardPage"
              element={<DashBoardPage />}
            ></Route>
            <Route
              path="/ProductList"
              element={<ProductList />}
            ></Route>
            <Route
              path="/product/:id"
              element={<EditProductPage />}
            ></Route>
            <Route 
              path="/newProductPage"
              element={<NewProduct />}
            ></Route>
          </Routes>
        </Suspense>
    )
  }
}

export default App
