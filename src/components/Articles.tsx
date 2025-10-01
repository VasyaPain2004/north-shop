import { Article } from "@/types/articles";
import Image from "next/image";
import ViewAllButton from "./ViewAllButton";

const Articles = async () => {
  let articles: Article[] = [];
  let error = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/articles`)
    console.log('res',res)
    articles = await res.json()
  } catch (err) {
    error = "Ошибка получения статей"
    console.log(articles)
    console.error('Ошибка в компоненте Article', err)
  }

  if (error) {
    return <div className="text-red-500">Ошибка: {error}</div>
  }

  return (
    <section>
      <div className="flex flex-col justify-center xl:max-w-[1208px] text-[#414141]">
        <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
          <h2 className="text-2xl xl:text-4xl text-left font-bold">Статьи</h2>
          <ViewAllButton btnText="Все статьи" href="articles"/>
        </div>

        {/* Список статей */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <li key={article._id} className="h-75 md:h-105">
              <article className="bg-white h-full flex flex-col rounded overflow-hidden shadow-(--shadow-card) hover:shadow-(--shadow-article) duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover"
                    quality={100} 
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="p-2.5 flex-1 flex flex-col gap-y-2.5 leading-[1.5]">
                  <time className="text-[8px] text-[#8f8f8f]">
                    {new Date(article.createdAt).toLocaleDateString("ru-RU")}
                  </time>
                  <h3 className="text-[#414141] text-base font-bold xl:text-lg">
                    {article.title}
                  </h3>
                  <p className="text-[#414141] line-clamp-3 text-xs xl:text-base">
                    {article.text}
                  </p>
                  <button className="rounded mt-auto w-37.5 h-10 bg-[#E5FFDE] text-base text-[#70C05B] hover:bg-(--color-primary) hover:shadow-(--shadow-button-default) hover:text-white active:shadow-(--shadow-button-active) duration-300 cursor-pointer">
                    Подробнее
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Articles;