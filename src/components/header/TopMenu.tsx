import Image from "next/image";

const TopMenu = () => {
  return (
    <ul className="flex flex-row gap-x-6 items-end">
      <li className="flex flex-col items-center gap-2.5 md:hidden w-11 cursor-pointer">
        <Image
          src="/icons-header/menu-transparent.svg"
          alt="мобильное меню"
          width={24}
          height={24}
          className="object-contain w-6 h-6"
        />{" "}
        <span>Каталог</span>
      </li>
      <li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
        <Image
          src="/icons-header/favorite.svg"
          alt="Избранное"
          width={24}
          height={24}
          className="object-contain w-6 h-6"
        />{" "}
        <span>Избранное</span>
      </li>
      <li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
        <Image
          src="/icons-header/order-box.svg"
          alt="Заказы"
          width={24}
          height={24}
          className="object-contain w-6 h-6"
        />{" "}
        <span>Заказы</span>
      </li>
      <li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
        <Image
          src="/icons-header/cart.svg"
          alt="Корзина"
          width={24}
          height={24}
          className="object-contain w-6 h-6"
        />{" "}
        <span>Корзина</span>
      </li>
    </ul>
  );
};

export default TopMenu;
