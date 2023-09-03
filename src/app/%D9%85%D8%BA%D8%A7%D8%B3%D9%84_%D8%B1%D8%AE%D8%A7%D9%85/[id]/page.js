import Link from "next/link";
import Image from "next/image";
import * as Unicons from "@iconscout/react-unicons";
import { notFound } from "next/navigation";

let bgGreen = "bg-green-600 text-white";
let bgOrange = "bg-blue-400 text-gray-950 ";
let bgRed = "bg-red-700 text-gray-100";

const url = "https://api.bajco-sa.com";

async function getData(id) {
  const res = await fetch(`${url}/api/v1/products/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  const dataOne = data.data;
  return {
    title: dataOne.title,
    description: dataOne.desc,
  };
}

export default async function PropertiesDetail({ params }) {
  const data = await getData(params.id);
  const property = data.data;

  const urlFrontend = "http://localhost:3000";
  return (
    <>
      <section className="relative md:pb-24 pb-16 mt-20">
        {property?.images ? (
          <div className="container-fluid">
            <div className="md:flex mt-4">
              <div className="lg:w-1/2 md:w-1/2 p-1">
                <div className="group relative overflow-hidden">
                  <Image
                    src={property?.images[0]}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                  <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                    <Link
                      href="#"
                      className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                    >
                      <Unicons.UilCamera width={18} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 md:w-1/2">
                <div className="flex">
                  <div className="w-1/2 p-1">
                    <div className="group relative overflow-hidden">
                      <Image
                        src={property?.images[1]}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        priority
                      />
                      <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                        <Link
                          href="#"
                          // onClick={() => handleCLick(1)}
                          className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                        >
                          <Unicons.UilCamera width={18} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/2 p-1">
                    <div className="group relative overflow-hidden">
                      <Image
                        src={property?.images[2]}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        priority
                      />
                      <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                        <Link
                          href="#"
                          // onClick={() => handleCLick(2)}
                          className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                        >
                          <Unicons.UilCamera width={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-1/2 p-1">
                    <div className="group relative overflow-hidden">
                      <Image
                        src={property?.images[3]}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        priority
                      />
                      <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                        <Link
                          href="#"
                          // onClick={() => handleCLick(3)}
                          className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                        >
                          <Unicons.UilCamera width={18} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/2 p-1">
                    <div className="group relative overflow-hidden">
                      <Image
                        src={property?.images[4]}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        priority
                      />
                      <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                        <Link
                          href="#"
                          // onClick={() => handleCLick(4)}
                          className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                        >
                          <Unicons.UilCamera width={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class=" flex place-content-center items-center min-h-screen">
            <div
              class="inline-block text-green-600 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                يتم تحميل البيانات من السيرفر
              </span>
            </div>
          </div>
        )}

        <div className="container md:mt-24 mt-16">
          <div className="md:flex">
            <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
              <h1 className="text-2xl font-medium text-white">
                {property?.title}
              </h1>

              <ul className="py-6 flex items-center list-none">
                <li className="flex flex-col items-center lg:me-6 me-4">
                  <Unicons.UilCompressArrows className=" lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className=" pt-2 lg:text-xl">
                    المقاس: ({property?.size} م.ط)
                  </span>
                </li>

                <li className="flex flex-col items-center lg:me-6 me-4">
                  <i className="uil uil-bed-double lg:text-3xl text-2xl me-2 text-green-600"></i>
                  <Unicons.UilBath className=" lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">الأحواض({property?.hood})</span>
                </li>

                <li className="flex flex-col items-center">
                  <Unicons.UilPalette className=" lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">
                    اللون: ({property?.color}){" "}
                  </span>
                </li>
              </ul>
              {/* UilPalette UilBath */}

              <p className="text-slate-400 mt-4">{property?.descMain}</p>
              <h2 className="text-green-600 mt-4">{property?.h2}</h2>
              <p className="text-slate-400 mt-4">{property?.description}</p>
              <h3 className="text-green-600 mt-4">{property?.h3}</h3>
              <p className="text-slate-400 mt-4">{property?.description}</p>
              <h4 className="text-green-600 mt-4">{property?.h4}</h4>
              <p className="text-slate-400 mt-4">{property?.paragraph}</p>

              <div className="w-full leading-[0] border-0 mt-6">
                {/* <iframe
                  title="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                  style={{ border: "0" }}
                  className="w-full h-[500px]"
                  allowFullScreen
                ></iframe> */}
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
              <div className="sticky top-20">
                <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h5 className="text-2xl font-medium">السعر:</h5>
                      <p className="text-2xl font-medium text-green-600">
                        {property?.price} ريال
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-medium">الحالة:</span>

                      <span
                        className={`${
                          property?.status == "مكتملة"
                            ? bgGreen
                            : property?.status == "تصميم"
                            ? bgOrange
                            : bgRed
                        }  text-sm px-2.5 py-0.75 rounded h-6`}
                      >
                        {property?.status}
                      </span>
                    </div>

                    <ul className="list-none mt-4">
                      <li className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">
                          نوع الرخام:
                        </span>
                        <span className="font-medium text-sm">
                          {property?.typeMarble}
                        </span>
                      </li>

                      <li className="flex justify-between items-center mt-2">
                        <span className="text-slate-400 text-sm">
                          تاريخ التحميل:
                        </span>
                        <span className="font-medium text-sm">
                          {property?.createdAt}
                        </span>
                      </li>

                      <li className="flex justify-between items-center mt-2">
                        <span className="text-slate-400 text-sm">
                          مدة التنفيذ:
                        </span>
                        <span className="font-medium text-sm">
                          {property?.timeOfFinish}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex">
                    <div className="p-1 w-1/2">
                      <a
                        href={`https://web.whatsapp.com/send?text=${urlFrontend}/property-detail/64eca60429aad6ff858f327d`}
                        data-action="share/whatsapp/share"
                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                      >
                        ارسال واتس
                      </a>
                    </div>
                    <div className="p-1 w-1/2">
                      <a
                        href="tel:0507773403"
                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                      >
                        اتصل بنا
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">
                    لديك أسئلة؟ تواصل معنا على واتساب
                  </h3>

                  <div className="mt-6">
                    <a
                      href="https://api.whatsapp.com/message/MX2TCIPEFATOK1?autoload=1&app_absent=0"
                      className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"
                    >
                      <i className="uil uil-phone align-middle me-2"></i> واتساب
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
