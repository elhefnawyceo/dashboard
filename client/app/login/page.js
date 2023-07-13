"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

// primerreact
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

// styles
import style from "../../style/login.module.css";

export default function page() {
  const [showPassword, setSowhPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");


  const handlePasswordChange = (event) => {
    setpassword(event.target.value);

  };

  const handleTogglePassword = () => {
    setSowhPassword(!showPassword);
  };

  const loginuser = async (e) => {

    e.preventDefault();
    
    try {

        await axios.post('http://localhost:5000/users/adduser', {

        email: email,
        password: password

      });
    } catch (error) {
      console.log(error);

    }




    
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className={style.divsignin}>

            <div className={style.detalis}>

              <form onSubmit={loginuser}>

              <div>
                <InputText
                  className={style.input}
                  placeholder="البريد الإلكتروني"
                  onChange={(e) => { setEmail(e.target.value) }}
                />
              </div>

              <div>

                <InputText
                  className={style.input}
                  onChange={handlePasswordChange}
                  type={showPassword ? "text" : "password"}
                  style={{ position: "relative", left: "25px" }}
                  placeholder="كلمة المرور"
                />

                <Button
                  icon={showPassword ? "pi pi-eye-slash" : "pi pi-eye"}
                  rounded
                  text
                  onClick={handleTogglePassword}
                  style={{
                    position: "relative",
                    right: "30px",
                    bottom: "3px",
                    color: "#1abbcd",
                  }}
                />
              </div>

              <div style={{ paddingTop: "10px" }}>
                <Link href="/signin" className={style.linkCreateAccount}>

                  ! إنشاء حساب
                </Link>


              </div>

              <div>
                <Button
                  className={style.input}
                  label="تسجيل الدخول"
                  severity="secondary"
                  raised
                />


              </div>

              <div style={{ paddingTop: "10px" }}>
                <Link href="/" className={style.linkCreateAccount}>
                  {" "}
                  هل نسيت كلمة السر ؟{" "}
                </Link>
              </div>

              </form>
            </div>

        </div>
        <div className={style.signin}></div>
      </div>
    </>
  );
}
