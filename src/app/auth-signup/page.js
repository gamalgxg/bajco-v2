"use client";
import React, { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import RedirectToHome from "../componants/RedirectToHome";
const url = "http://localhost:8000";

export default function Login() {
  const router = useRouter();

  const [route, setRoute] = useState("/");
  const [redirect, setRedirect] = useState("  ");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [loading, setLoading] = useState(false);

  const submitUser = async (e) => {
    e.preventDefault();
    const res = await axios
      .post(`${url}/api/v1/auth/signup`, {
        name,
        email,
        password,
        passwordConfirm,
      })
      .then(function (response) {
        if (response.status == 201) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", response.data.data.name);

          setEmail("");
          setName("");
          setPassword("");
          setPasswordConfirm("");
        }

        setRedirect("تم تسجيل مستخد جديد سيتم نقلك الى الرئيسية");
        setTimeout(() => {
          router.push(route);
        }, 2000);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };
  function handleFirstNameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
        <div
          style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
          className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"></div>
        <div className="container z-3">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
              <Link href="/">
                <Image
                  src="/images/logo-icon-64.png"
                  className="mx-auto"
                  alt=""
                  width={64}
                  height={64}
                />
              </Link>
              <h5 className="my-6 text-xl font-semibold">تسجيل مستخدم جديد</h5>
              <form
                onClick={submitUser}
                className="ltr:text-left rtl:text-right"
              >
                <input
                  onChange={handleFirstNameChange}
                  value={name}
                  id="RegisterName"
                  type="text"
                  className="form-input mt-3"
                  placeholder="اسم المستخدم"
                />

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="LoginEmail"
                  type="email"
                  className="form-input mt-3"
                  placeholder="ايميلك"
                />

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  className="form-input mt-3"
                  placeholder="كلمة السر:"
                />

                <input
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  value={passwordConfirm}
                  type="password"
                  className="form-input mt-3"
                  placeholder="إعادة كلمة السر:"
                />

                <div className="mb-4">
                  <Link
                    onClick={submitUser}
                    href=""
                    className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                  >
                    تسجيل
                  </Link>
                </div>

                <div className="text-center">
                  <span className="text-slate-400 me-2">
                    هل لديك حساب ؟ سجل الدخول من هنا
                  </span>{" "}
                  <Link
                    href="/auth-login"
                    className="text-black dark:text-white font-bold"
                  >
                    <br />
                    تسجيل الدخول
                  </Link>
                  <div>{redirect}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
