import React, { Component } from 'react';
import './App.css';
/*class App extends React.Component
{
  render()
  {
    return (
      <div> 
          <Navigate/>
      </div>
      );
  }
}
*/

class App extends React.Component
{
  render()
  {
    
    return(
          <div>
            <nav className="navbar navbar-default">
              <div className="navbar-header" style={{display:'flex'}}>
                <a href="/" className="navbar-brand">
                  <h4 id="title" style={{display:'flex'}}>Easy Collab</h4>
                </a>                
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation" style={{position:'absolute',top:10+'px',right:10+'px'}}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
              </div>
              <div className="collapse navbar-collapse header-nav navbar-right" id="navigation">
                <ul className="nav navbar-nav">
                  <li className="text-center">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-center dropdown">
                    <a href="" data-toggle="dropdown" className="dropdown-toggle">menu 1
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="text-center"><a href="">sub 1</a></li>
                      <li className="text-center"><a href="">sub 2</a></li>
                      <li className="text-center"><a href="">sub 3</a></li>
                      <li className="text-center"><a href="">sub 4</a></li>
                    </ul>
                  </li>
                  <li className="text-center dropdown">
                    <a href="" className="dropdown-toggle" data-toggle="dropdown">
                      Menu 2
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="text-center"><a href="">sub 1a</a></li>
                      <li className="text-center"><a href="">sub 2a</a></li>
                      <li className="text-center"><a href="">sub 3a</a></li>
                      <li className="text-center"><a href="">sub 4a</a></li>
                    </ul>
                  </li>
                  <li className="text-center dropdown">
                    <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                      Menu 3
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="text-center"><a href="">sub 1b</a></li>
                      <li className="text-center"><a href="">sub 2b</a></li>
                      <li className="text-center"><a href="">sub 3b</a></li>
                      <li className="text-center"><a href="">sub 4b</a></li>
                    </ul>
                  </li>
                  <li className="text-center dropdown">
                    <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                      Menu 4
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="text-center"><a href="">sub 1c</a></li>
                      <li className="text-center"><a href="">sub 2c</a></li>
                      <li className="text-center"><a href="">sub 3c</a></li>
                      <li className="text-center"><a href="">sub 4c</a></li>
                    </ul>
                  </li>
                  <li>
                      <a data-toggle="modal" className="btn" data-target="#data" id="datamodal">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <Modal/>
          </div>
    );  
  }
}

class Modal extends Component
{
  render()
  {
    return(
        <div className="modal fade" id="data" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header text-center" style = {{ display : 'flex'}}>
                    <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                </div>
                <div className="modal-body mx-3">
                  <form>
                    <div className="md-form mb-5">
                        <input type="email" id="defaultForm-email" className="form-control validate" />
                        <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your email</label>
                    </div>

                    <div className="md-form mb-4">
                        <input type="password" id="defaultForm-pass" className="form-control validate" />
                        <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-default" id="login">Login</button>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
