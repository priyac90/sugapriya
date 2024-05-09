import React from 'react'
import './../../../src/style.css'
import { Link } from 'react-router-dom'
import Logo from './../../assets/images/Logo.png'
const SignUpConfirmation = () => {
    return (
        <div className="SignUp Confirmation template d-flex justify-content-center align-items-center vh-100">
          <div className="form_container p-5 rounded">
            <form>
            <div className="text-center">
            <img src={Logo} className="img-responsive img-fluid" alt="Responsive image" />
          </div>
              <div className="mb-2 mt-2">
                <p className="text-center text-white">User Successfully Registered</p>
              </div>
              <div className="d-grid mt-3">
                <div className="btn-group">
                  <Link to="/login" className="btn btn-light">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
}

export default SignUpConfirmation