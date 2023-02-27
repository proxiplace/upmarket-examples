import React, { MouseEventHandler } from "react";

type LoginProps = {
    onLoggedInClicked: MouseEventHandler<HTMLButtonElement>
}

function Login(props:LoginProps) {
  const {onLoggedInClicked} = props;

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5" id="form1">
            <div className="form-data">
              <div className="forms-inputs mb-4">
                {" "}
                <span>Email or username</span>
                <input
                  autoComplete="off"
                  type="email"
                  value="john.doe@email.com"
                />
              </div>
              <div className="forms-inputs mb-4">
                {" "}
                <span>Password</span>
                <input
                  autoComplete="off"
                  type="password"
                  value="samplepass"
                />
                <div className="invalid-feedback">
                  Password must be 8 character!
                </div>
              </div>
              <div className="mb-3">
                <button className="btn btn-dark w-100" onClick={onLoggedInClicked}>Login</button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
