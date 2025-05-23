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
        desc: "\"We aim to reach out young people through dancing and help them to enchance their talents.\"",
        bottom: 24,
        mdBottomClass: "md:bottom-[-8.5rem]",
        lgBottomClass: "lg:bottom-[-8.5rem]",
        xl2BottomClass: "2xl:bottom-[-7.5rem]"
    },
    {
        name: "Arte Ministry",
        img: drama1,
        desc: "Touching Lives Through Acting Ministry \"Performing To An Audience Of One\"",
        bottom: 24,
        mdBottomClass: "md:bottom-[-7.2rem]",
        lgBottomClass: "lg:bottom-[-7.2rem]",
        xl2BottomClass: "2xl:bottom-[-6rem]"
    },
    {
        name: "Honest Deceiver Ministries",
        img: hdm1,
        desc: "\"HDM utilizes the art of magic and the skills of professional illusionists to present the Gospel\"",
        bottom: 24,
        mdBottomClass: "md:bottom-[-8.5rem]",
        lgBottomClass: "lg:bottom-[-8.5rem]",
        xl2BottomClass: "2xl:bottom-[-7.5rem]"
    },
    {
        name: "Hoop Heaven International",
        img: hh1,
        desc: "\"Using basketball to share Christ and build character, leadership, and community among the youth.\"",
        bottom: 24,
        mdBottomClass: "md:bottom-[-8.5rem]",
        lgBottomClass: "lg:bottom-[-8.5rem]",
        xl2BottomClass: "2xl:bottom-[-7.5rem]"
    },
    {
        name: "Kids At Church",
        img: kac1,
        desc: "\"Helping kids know Jesus through fun, learning, worship, and foundational Bible teaching.\"",
        bottom: 24,
        mdBottomClass: "md:bottom-[-8.5rem]",
        lgBottomClass: "lg:bottom-[-8.5rem]",
        xl2BottomClass: "2xl:bottom-[-7.5rem]"
    },
    {
        name: "Kids Jam",
        img: kj1,
        desc: "\"We are passionate and dedicated leaders who is committed to helping children grow in their faith\"",
        bottom: 24,
        mdBottomClass: "md:bottom-[-8.5rem]",
        lgBottomClass: "lg:bottom-[-8.5rem]",
        xl2BottomClass: "2xl:bottom-[-7.5rem]"
    },
    {
        name: "Praise Team",
        img: praise1,
        desc: "\"Leading people into God’s presence through passionate and Spirit-led worship.\"",
        bottom: 24,
        mdBottomClass: "md:bottom-[-7.2rem]",
        lgBottomClass: "lg:bottom-[-7.2rem]",
        xl2BottomClass: "2xl:bottom-[-6rem]"
    },
    {
        name: "Production",
        img: prod1,
        desc: "\"Behind the scenes, bringing excellence in media, lights, and sound for God’s glory.\"",
        bottom: 24,
        mdBottomClass: "md:bottom-[-7.2rem]",
        lgBottomClass: "lg:bottom-[-7.2rem]",
        xl2BottomClass: "2xl:bottom-[-6rem]"
    },
    {
        name: "ToughGuys International",
        img: tg1,
        desc: "\"TGI teach you not only self defense but helps you to develop discipline, character and attitude.\"",
        bottom: 24,
        mdBottomClass: "md:bottom-[-8.5rem]",
        lgBottomClass: "lg:bottom-[-8.5rem]",
        xl2BottomClass: "2xl:bottom-[-7.5rem]"
    },
    {
        name: "Youth Jam",
        img: yj1,
        desc: "\"Magkaroon ng impact sa buhay ng bawat kabataan, sa loob ng tahanan at sa Komunidad\"",
        bottom: 24,
        mdBottomClass: "md:bottom-[-7.2rem]",
        lgBottomClass: "lg:bottom-[-7.2rem]",
        xl2BottomClass: "2xl:bottom-[-7.5rem]"
    },
];