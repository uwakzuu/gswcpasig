const imageModules = import.meta.glob('../assets/img/Ministries/*.{jpg,jpeg,png}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, module]) => {
    const fileName = path.split('/').pop();
    return [fileName, module.default];
  })
);

const bigj1 = images['bigj1.jpg'];
const drama1 = images['drama1.jpg'];
const hdm1 = images['hdm1.jpg'];
const hh1 = images['hh1.jpg'];
const kac1 = images['kac1.jpg'];
const kj1 = images['kj1.jpg'];
const praise1 = images['praise1.jpg'];
const prod1 = images['prod1.jpg'];
const tg1 = images['tg1.jpg'];
const yj1 = images['yj1.jpg'];

export const ministriesData = [
    {
        name: "BigJ",
        img: bigj1,
        desc: "",
    },
    {
        name: "Arte Ministry",
        img: drama1,
        desc: "",
    },
    {
        name: "Honest Deceiver Ministries",
        img: hdm1,
        desc: "",
    },
    {
        name: "Hoop Heaven International",
        img: hh1,
        desc: "",
    },
    {
        name: "Kids At Church",
        img: kac1,
        desc: "",
    },
    {
        name: "Kids Jam",
        img: kj1,
        desc: "",
    },
    {
        name: "Praise Team",
        img: praise1,
        desc: "",
    },
    {
        name: "Production",
        img: prod1,
        desc: "",
    },
    {
        name: "ToughGuys International",
        img: tg1,
        desc: "",
    },
    {
        name: "Youth Jam",
        img: yj1,
        desc: "",
    },
];