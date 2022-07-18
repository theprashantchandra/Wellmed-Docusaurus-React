// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";

// // import InputControl from "../InputControl/InputControl";
// import { auth } from "./firebase";

// // import styles from "./Login.module.css";

// function Login() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     email: "",
//     pass: "",
//   });

//   const handleSubmission = () => {
//     if (!values.email || !values.pass) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     signInWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async () => {
//         ;
//       })
      
//   };
//   return (
//     <div >
//       <div >
       

       

//         <div >
          
//           <button disabled={submitButtonDisabled} onClick={handleSubmission}>
//             Login
//           </button>
//           <p>
//             Already have an account?{" "}
//             <span>
//               {/* <Link to="/login">Login</Link>
//               <Link to="/login1">sigma Rule</Link> */}
//               Email: <input   type="text"/>
//               <input   type="text"/>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
