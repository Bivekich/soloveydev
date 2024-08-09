export const navItems = [
  { name: "О нас", link: "#about" },
  { name: "Проекты", link: "#projects" },
  { name: "Отзывы", link: "#testimonials" },
  { name: "Связаться с нами", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Мы приоритизируем сотрудничество с клиентами, способствуя открытому общению",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Мы очень гибки в вопросах коммуникации по разным временным зонам",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Наш стек",
    description: "Мы постоянно стараемся улучшать его",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Мы - технические энтузиасты увлеченные разработкой",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "В данный момент мы разрабатываем свою экосистему",
    description: "Закулисные подробности",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Хотите начать проект вместе?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "Solovey 3D",
    des: "Промо сайт для компании Solovey 3D.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "solovey3d.tech",
  },
];

export const testimonials = [
  {
    quote:
      "Мы искали надежного партнера для создания нашего промосайта, и команда, с которой мы работали, превзошла все ожидания. Новый сайт для Solovey 3D идеально отражает нашу специализацию на 3D-печати и представляет наши услуги в лучшем свете. Работа была выполнена профессионально, оперативно и с высоким уровнем качества. Мы довольны результатом и рады продолжать сотрудничество!",
    name: "Соловьев Максим",
    title: "Владелец Solovey 3D",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Разработка веб-сайтов",
    desc: "Создаем уникальные и адаптивные сайты, отвечающие всем вашим бизнес-потребностям.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Продвижение и SEO",
    desc: "Оптимизируем ваш сайт для поисковых систем и привлекаем органический трафик для улучшения видимости.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Разработка контента",
    desc: "Создаем качественный контент, который привлекает и удерживает вашу аудиторию.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Дизайн пользовательского интерфейса (UI/UX)",
    desc: "Создаем качественный контент, который привлекает и удерживает вашу аудиторию.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/tg.svg",
    link: "https://t.me/solovey_dev"
  },
  {
    id: 2,
    img: "/vk.svg",
    link: "https://vk.com/soloveydev"
  },
];
