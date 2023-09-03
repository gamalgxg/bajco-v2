"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Mail, MessageSquare, PhoneIncoming } from "react-feather";
const url = "http://localhost:8000";
import axios from "axios";
import { useRouter } from "next/navigation";

//
//
//
export default function Login() {
  // const router = useRouter();
  // const [route, setRoute] = useState("/");

  // //
  // const [redirect, setRedirect] = useState("  ");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const token = localStorage.getItem("token");

  // login user
  // const submitUser = async () => {
  //   const res = await axios
  //     .post(`${url}/api/v1/auth/login`, {
  //       email,
  //       password,
  //     })
  //     .then(function (response) {
  //       if (response.data.token) {
  //         setEmail("");
  //         setPassword("");
  //         localStorage.setItem("token", response.data.token);
  //         localStorage.setItem("user", response.data.data.name);
  //       }

  //       setRedirect("تم تسجيل  الدخول بنجاح سيتم نقلك الى الرئيسية");

  //       setTimeout(() => {
  //         router.push(route);
  //       }, 2000);
  //     })
  //     .catch(function (error) {
  //       console.log(error.response.status);
  //       if (error.response.status) {
  //         localStorage.removeItem("token");
  //       }
  //     });
  // };
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
                  src="/images/bajco_black.png"
                  className="mx-auto"
                  alt=""
                  width={200}
                  height={64}
                />
              </Link>
              <h5 className="my-6 text-xl font-semibold">تواصل معنا :</h5>
              <form className="ltr:text-left rtl:text-right">
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-medium" htmlFor="LoginEmail">
                      واتساب:
                    </label>
                    <div className="mb-4">
                      <a
                        href="https://api.whatsapp.com/message/MX2TCIPEFATOK1?autoload=1&app_absent=0"
                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                      >
                        تواصل على واتساب
                        <span className="pr-2">
                          <MessageSquare />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="font-medium" htmlFor="LoginPassword">
                      تواصل على الجوال:
                    </label>
                    <div className="mb-4">
                      <a
                        href="tel:0507773403"
                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                      >
                        اتصال : 0507773403
                        <span className="pr-2">
                          <PhoneIncoming />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="font-medium" htmlFor="LoginPassword">
                      ايميل:
                    </label>
                    <div className="mb-4">
                      <Link
                        href="info@bajco.co"
                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                      >
                        info@bajco.co
                        <span className="pr-2">
                          <Mail />
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      اذهب الى الصفحة الرئيسية:
                    </span>{" "}
                    <Link
                      href="/"
                      className="text-black dark:text-white font-bold"
                    >
                      باجكو
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
