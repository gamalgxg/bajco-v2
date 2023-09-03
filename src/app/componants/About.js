import Link from "next/link";
import Image from "next/image";

import "../../../node_modules/react-modal-video/scss/modal-video.scss";

export default function About() {
  return (
    <>
      <div className="container lg:mt-24 mt-16">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-5">
            <div className="relative">
              <Image
                src="/images/مغسلة_رخام_تصميم.jpg"
                className="rounded-xl shadow-md"
                alt="مغسلة رخام اسود"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="lg:ms-4">
              <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold text-slate-400">
                مغاسل رخام <br /> وتنفيذ
              </h4>
              <p className="text-slate-400 max-w-xl">
                يُعتبر الرخام أحد أبرز وأشهر المواد المستخدمة في الديكور
                والتصميم الداخلي. يعود استخدام الرخام إلى العصور القديمة، وهو
                يتميز بجماله وألوانه المتنوعة وقوته ومتانته. يتم استخدام الرخام
                في تطبيقات مختلفة مثل الأرضيات والجدران والمطابخ والحمامات وحتى
                الأثاث. يتم قطع وتشكيل الرخام لإنشاء أشكال وتصاميم متنوعة تتناسب
                مع أذواق واحتياجات كل شخص.
              </p>

              <div className="mt-4">
                <Link
                  href="/مغاسل_رخام"
                  className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3"
                >
                  شاهد مغاسل الرخام{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
