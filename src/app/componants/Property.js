import Link from "next/link";
import Image from "next/image";

const url = "https://api.bajco-sa.com";
import * as Unicons from "@iconscout/react-unicons";

async function getData() {
  const res = await fetch(`${url}/api/v1/products/`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Property() {
  const data = await getData();
  const ArrayData = data.data;

  return (
    <>
      <div className="container lg:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-slate-200">
            صور مغاسل رخام
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            شاهد صور أعمالنا في مغاسل رخام في الرياض
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {ArrayData.map((item, index) => {
            return (
              <>
                {item.title ? (
                  <div
                    className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500"
                    key={item._id}
                  >
                    <div className="relative">
                      <Image
                        src={item.imageCover}
                        alt={item.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        priority
                      />

                      {/* <div className="absolute top-4 end-4">
                  <Link
                    href="#"
                    className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                  >
                    <i className="mdi mdi-heart mdi-18px"></i>
                  </Link>
                </div> */}
                    </div>

                    <div className="p-6">
                      <div className="pb-6">
                        <Link
                          href={`/مغاسل_رخام/${item.id}`}
                          className="text-lg hover:text-green-600 font-medium ease-in-out duration-500"
                        >
                          {item.title}
                        </Link>
                      </div>

                      <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center justify-around list-none">
                        <li className="flex items-center flex-col	 me-4">
                          <Unicons.UilArrowResizeDiagonal className="me-2 text-green-600" />
                          <span>{item.size}</span>
                        </li>

                        <li className="flex flex-col items-center me-4">
                          <i className="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                          <Unicons.UilBath className="me-2 text-green-600" />
                          <span>{item.hood}</span>
                        </li>

                        <li className="flex flex-col	 items-center">
                          <Unicons.UilPalette className="me-2 text-green-600" />
                          <span>{item.color}</span>
                        </li>
                      </ul>

                      <ul className="pt-6 flex justify-between items-center list-none">
                        <li className="flex flex-col items-center me-4">
                          <span className="text-slate-400">السعر</span>
                          <p className="text-lg font-medium text-green-600">
                            SR {item.price}
                          </p>
                        </li>

                        <li className="flex flex-col items-center me-4">
                          <span className="text-slate-400 text-center">
                            التقيم
                          </span>
                          <ul className="text-lg font-medium text-amber-400 list-none">
                            <li className="inline ms-1">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline ms-1">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline ms-1">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline ms-1">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline ms-1">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline ms-1 text-black dark:text-white">
                              {item.ratingsQuantity}(30)
                            </li>
                          </ul>
                        </li>
                      </ul>
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
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
