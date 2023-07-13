"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from 'axios'
// primerreact
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

// styles
import style from "../../style/login.module.css";

export default function page() {

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setSowhPassword] = useState("");

  const [message, setMessage] = useState("");






  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setSowhPassword(!showPassword);
  };

  const SendDataUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users/adduser', {
        username: username,
        phone: phone,
        email: email,
        password: password
      });
      setMessage(response.data);
      if (response.data === "تم إنشاء الحساب  بنجاح") {
        setTimeout(() => {
          window.location.href = "/login";
        }, 2500)
      }
    } catch (error) {
      console.log(error);
      setMessage("حدث خطأ أثناء إنشاء الحساب");
    }
  };




  return (
    <>
      <div style={{ display: "flex" }}>
        <div className={style.divsignin}>
          <div className={style.detalis}>
            <form onSubmit={SendDataUser}>
              <div>
                <InputText
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className={style.input}
                  placeholder="إسم المستخدم"
                />


              </div>
              <div>
                <InputText
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className={style.input}
                  placeholder="رقم الهاتف"
                />
                
              </div>
              <div>
                <InputText
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={style.input}
                  placeholder="البريد الإلكتروني"
                />
              </div>

              <div>
                <InputText
                  className={style.input}
                  onChange={handlePasswordChange}
                  type={showPassword ? "text" : "password"}
                  style={{ position: "relative", left: "25px" }}
                  placeholder="كلمة المرور"
                  required

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

              {message && (
                <div>{message}</div>
              )}

              <div>
                <Button
                  className={style.input}
                  label="إنشاء حساب"
                  severity="secondary"
                  raised
                />
              </div>
            </form>
            <div>
              <Link href='/login'>

                <Button
                  className={style.input}
                  label="تسجيل الدخول"
                  severity="secondary"
                  raised
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={style.signin}></div>
      </div>
    </>
  );
}
