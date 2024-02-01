import React from "react";
import { FcGoogle } from "react-icons/fc";
import Form from "./Form";
function Section2() {
  return (
    <div className="section2_top">
      <div>
        <h1>Sign In</h1>
        <p>Sign in to your account</p>
      </div>
      <div className="auth">
        <div className="google">
            <div><FcGoogle />
</div>
            <div>Sign in with Google</div>
        </div>
        <div className="google">
            <div><FcGoogle />
</div>
            <div>Sign in with Google</div>
        </div>
      </div>
      <div>
        <Form/>
      </div >
      <div className="part">Don't have an account? {" "}
        <span>Resister here</span>
      </div>
    </div>
  );
}

export default Section2;
