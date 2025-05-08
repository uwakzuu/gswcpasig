// branchesData.jsx or a separate images.js file
const imageModules = import.meta.glob('../assets/img/Branches/*.{jpg,jpeg,png}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, module]) => {
    const fileName = path.split('/').pop();
    return [fileName, module.default];
  })
);

const Pasig = images['pasig2.jpg'];
const Manggahan = images['pasig11.jpg'];
const Marikina = images['marikina1.jpg'];
const Cogeo = images['cogeo.jpg'];
const Antipolo = images['antipolo1.jpg'];
//const Angono = images['.jpg'];
const Bacolod = images['bago1.jpg'];
const BetterLife = images['betterlife1.jpg'];
const Cainta = images['antioch1.jpg'];
const Caloocan = images['caloocan1.jpg'];
const Cavite = images['cavite1.jpg'];
//const Damayan = images['.jpg'];
const Floodway = images['floodway1.jpg'];
const Laguna = images['laguna1.jpg'];
const Malabon = images['malabon.jpg'];
const Mandaluyong = images['mandaluyong1.jpg'];
const Manila = images['manila1.jpg'];
const Masinag = images['masinag1.jpg'];
const Negros = images['bacolod1.jpg'];
//const NorthCaloocan = images['.jpg'];
const Pampanga = images['grace.jpg'];
const Paranaque = images['paranaque1.jpg'];
const Pasay = images['pasay1.jpg'];
const PFCI = images['pcfi1.jpg'];
const Plaridel = images['plaridel1.jpg'];
const Pulilan = images['pulilan1.jpg'];
const Rosario = images['jennys1.jpg'];
const SanMateo = images['sanmateo1.jpg'];
const SanPablo = images['sanpablo1.jpg'];
//const Taytay = images['.jpg'];
const Tumana = images['tumana1.jpg'];
const ValleyGolf = images['valleygolf1.jpg'];

export const BranchesData = [
    {
        id: 1,
        name: "Worship Center Pasig",
        address: "H38G+GGX, Dr. Sixto Antonio Ave., Pasig, 1606 Metro Manila, Philippines",
        phone: "09228097513 / 09178685053",
        services: "Sunday: 9:00 AM & 11:00 AM & 4PM",
        image: Pasig,
        mapUrl: "https://maps.app.goo.gl/h8QuBufKYpg4kfSK8",
        coordinates: { lat: 14.5663595, lng: 121.0763473 },
      },
      {
        id: 2,
        name: "Worship Center Manggahan",
        address: "J432+7RG, Pasig, Metro Manila",
        phone: "09255823967",
        services: "Sunday: 4PM",
        image: Manggahan,
        mapUrl: "https://maps.app.goo.gl/Fi7TzoTQVCfPRta9A",
        coordinates: { lat: 14.6031935, lng: 121.102084 },
      },
      {
        id: 3,
        name: "Worship Center Marikina",
        address: "East Jacinto Street, Marikina, Metro Manila",
        phone: "09178589498",
        services: "Saturday: 6PM",
        image: Marikina,
        mapUrl: "https://www.google.com/maps/search/East+Jacinto+Street,+Marikina,+Metro+Manila/@14.6359477,121.0941399,675m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D",
        coordinates: { lat: 14.6359477, lng: 121.0941399 },
      },
      {
        id: 4,
        name: "Worship Center Cogeo",
        address: "2/F XRC COGEO COMMERCIAL BLDG., MARCOS HIGHWAY, 2 COGEO Ave, SANTA CRUZ, Antipolo, 1870 Rizal",
        phone: "09089343030",
        services: "Saturday: 4PM & Sunday 9AM",
        image: Cogeo,
        mapUrl: "https://maps.app.goo.gl/N3rkbxbTRtPVmxwh7",
        coordinates: { lat: 14.6207002, lng: 121.1684221 },
      },
      {
        id: 5,
        name: "Worship Center Antipolo",
        address: "Antipolo, 1870 Rizal",
        phone: "09227879978",
        services: "Saturday 5PM & 7PM",
        image: Antipolo,
        mapUrl: "https://maps.app.goo.gl/vaKUxiBCg5bp7uox8",
        coordinates: { lat: 14.5887522, lng: 121.1757288 },
      },
      {
        id: 6,
        name: "Worship Center Angono",
        address: "Unknown",
        phone: "Unknown",
        services: "Unknown",
        image: "",
        mapUrl: "",
        coordinates: { lat: 0, lng: 0 },
      },
      {
        id: 7,
        name: "Worship Center Bacolod",
        address: "Sampinit, Negros Occidental, Philippines",
        phone: "09152492373",
        services: "Sunday: 8:30AM & 10AM & 3PM",
        image: Bacolod,
        mapUrl: "https://maps.app.goo.gl/Z8LHEiVZkpzcqJ7n7",
        coordinates: { lat: 10.5381376, lng: 122.8563952 },
      },
      {
        id: 8,
        name: "Better Life Church",
        address: "",
        phone: "",
        services: "",
        image: BetterLife,
        mapUrl: "",
        coordinates: { lat: 0, lng: 0 },
      },
      {
        id: 9,
        name: "Worship Center Cainta",
        address: "56 A Bonifacio Ave, Cainta, 1900 Rizal",
        phone: "09763500315 / 09228666059",
        services: "Sunday: 2:30PM",
        image: Cainta,
        mapUrl: "https://maps.app.goo.gl/ApH7C4MEPoCWWJp4A",
        coordinates: { lat: 14.5766652, lng: 121.1176433 },
      },
      {
        id: 10,
        name: "Worship Center Caloocan",
        address: "Tatampal Alley Caloocan, Metro Manila",
        phone: "09155867210",
        services: "Sunday: 3PM",
        image: Caloocan,
        mapUrl: "https://maps.app.goo.gl/uK6eTbUFVfwXAFb77",
        coordinates: { lat: 14.6493033, lng: 120.9690937 },
      },
      {
        id: 11,
        name: "Worship Center Cavite",
        address: "San Marino City Subdivision Brgy. Salawag 4114 Dasmariñas, Philippines",
        phone: "09366409540",
        services: "Sunday: 2:30PM",
        image: Cavite,
        mapUrl: "https://maps.app.goo.gl/P6k2aPCPrhrhXteEA",
        coordinates: { lat: 14.3241329, lng: 120.9797167 },
      },
      {
        id: 12,
        name: "Worship Center Damayan",
        address: "",
        phone: "09432166387",
        services: "Sunday: 3PM",
        image: "",
        mapUrl: "",
        coordinates: { lat: 0, lng: 0 },
      },
      {
        id: 13,
        name: "Worship Center Floodway",
        address: "205 90 Railroad St, Pasig, 1608 Metro Manila",
        phone: "09430327107",
        services: "Friday: 5PM & Saturday: 7PM & Sunday: 9AM",
        image: Floodway,
        mapUrl: "https://maps.app.goo.gl/PakkvkPq1YbSGaf87",
        coordinates: { lat: 14.5766815, lng: 121.1029383 },
      },
      {
        id: 14,
        name: "Worship Center Laguna",
        address: "Bayanijuan Southville 7 Calauan, Philippines",
        phone: "09334083054",
        services: "Saturday: 4PM",
        image: Laguna,
        mapUrl: "https://maps.app.goo.gl/dmUQwoyYT6c2a5dy7",
        coordinates: { lat: 14.1728222, lng: 121.341364 },
      },
      {
        id: 15,
        name: "Worship Center Malabon",
        address: "133 A MH Del pilar Malabon, Philippines",
        phone: "09267154731",
        services: "Sunday: 10AM",
        image: Malabon,
        mapUrl: "https://maps.app.goo.gl/XmtMR2Awn2rAQsi47",
        coordinates: { lat: 14.6656979, lng: 120.966457 },
      },
      {
        id: 16,
        name: "Worship Center Mandaluyong",
        address: "1550 Boni Ave, Mandaluyong, 1550 Metro Manila",
        phone: "09183631045",
        services: "Sunday: 10:45AM",
        image: Mandaluyong,
        mapUrl: "https://maps.app.goo.gl/abW6eJZo4YBooGoJA",
        coordinates: { lat: 14.5855907, lng: 121.0265779 },
      },
      {
        id: 17,
        name: "Worship Center Manila",
        address: "2130 Juan Luna St, Tondo, Manila, 1013 Metro Manila",
        phone: "09331678654",
        services: "Saturday 4PM & Sunday 10AM",
        image: Manila,
        mapUrl: "https://maps.app.goo.gl/JM4eahG12CGpjBwb7",
        coordinates: { lat: 14.628737, lng: 120.974046 },
      },
      {
        id: 18,
        name: "Worship Center Masinag",
        address: "Maries Village 2 Phase 2 Antipolo, 1870 Rizal",
        phone: "09434828103",
        services: "Sunday: 9AM",
        image: Masinag,
        mapUrl: "https://maps.app.goo.gl/WmT1K52BH9MzCYbv8",
        coordinates: { lat: 14.62511510, lng: 121.1282898 },
      },
      {
        id: 19,
        name: "Worship Center Negros",
        address: "Purok Kasilingan, Barangay Tangub, Bacolod, 6100 Negros Occidental",
        phone: "09152492373",
        services: "Saturday: 3PM",
        image: Negros,
        mapUrl: "https://maps.app.goo.gl/PHbXVZivcUSkTyHd7",
        coordinates: { lat: 10.6346803, lng: 122.9394914 },
      },
      {
        id: 20,
        name: "Worship Center North Caloocan",
        address: "Amparo Talisay, Novaliches, Caloocan, Metro Manila, Philippines",
        phone: "09778073002",
        services: "Sunday 10AM",
        image: "",
        mapUrl: "https://maps.app.goo.gl/8hKqduqRxvNqhZay9",
        coordinates: { lat: 14.742192, lng: 121.0420815 },
      },
      {
        id: 21,
        name: "Worship Center Pampanga",
        address: "Purok 1, Don Ignacio Dimson 2005 Lubao, Philippines",
        phone: "09988594475",
        services: "Sunday: 6PM",
        image: Pampanga,
        mapUrl: "https://maps.app.goo.gl/PbjDWh6udEihKvtc6",
        coordinates: { lat: 14.9617168, lng: 120.5704808 },
      },
      {
        id: 22,
        name: "Worship Center Paranaque",
        address: "F294+WVP, San Pedro, Parañaque, 1700 Metro Manila, Philippines",
        phone: "09328694475",
        services: "Sunday 9AM & 11AM",
        image: Paranaque,
        mapUrl: "https://maps.app.goo.gl/NUYJtp1uamesyMnJ7",
        coordinates: { lat: 14.4690221, lng: 121.0067393 },
      },
      {
        id: 23,
        name: "Worship Center Pasay",
        address: "D.Jorge, Pasay, Metro Manila",
        phone: "09561627586",
        services: "Sunday 9AM",
        image: Pasay,
        mapUrl: "https://maps.app.goo.gl/vmH7nH8y1KuPgdSe9",
        coordinates: { lat: 14.5469293, lng: 121.0083331 },
      },
      {
        id: 24,
        name: "Worship Center PFCI",
        address: "281 Sampaguita, Cainta, 1900 Lalawigan ng Rizal",
        phone: "09234083054",
        services: "Sunday: 10:30AM",
        image: PFCI,
        mapUrl: "https://maps.app.goo.gl/ErigfMjkTzoCwqtG6",
        coordinates: { lat: 14.574207, lng: 121.1037218 },
      },
      {
        id: 25,
        name: "Worship Center Plaridel",
        address: "VV65+3FG, Calle Rizal, Sta. Rita, Guiguinto, 3015 Bulacan",
        phone: "09236834718",
        services: "Sunday: 9:30AM",
        image: Plaridel,
        mapUrl: "https://maps.app.goo.gl/JFQ6XVfsfita2Ww77",
        coordinates: { lat: 14.8586964, lng: 120.8572561 },
      },
      {
        id: 26,
        name: "Worship Center Pulilan",
        address: "PulilanBulacan, Philippines",
        phone: "09988591969",
        services: "Sunday 8AM & 10AM",
        image: Pulilan,
        mapUrl: "https://maps.app.goo.gl/hM4R8VuTY71tKPXq5",
        coordinates: { lat: 14.9124488, lng: 120.8457963 },
      },
      {
        id: 27,
        name: "Worship Center Rosario",
        address: "Rosario Pasig, Metro Manila",
        phone: "09264725070",
        services: "Sunday: 9AM",
        image: Rosario,
        mapUrl: "https://maps.app.goo.gl/MsQHqp591P7f35Fv8",
        coordinates: { lat: 14.592388, lng: 121.0879674 },
      },
      {
        id: 28,
        name: "Worship Center San Mateo",
        address: "Gen Luna Street, Ampid 1 1850 San Mateo, Philippines",
        phone: "09227189209",
        services: "Sunday: 10:30AM",
        image: SanMateo,
        mapUrl: "https://maps.app.goo.gl/WszRW9xoTXmFGU6V8",
        coordinates: { lat: 14.6799, lng: 121.1138029 },
      },
      {
        id: 29,
        name: "Worship Center San Pablo",
        address: "VI-E (Pob.)San Pablo City, Laguna",
        phone: "09061262640",
        services: "Sunday: 10AM & 5PM",
        image: SanPablo,
        mapUrl: "https://maps.app.goo.gl/kVr3beanCj6v3KeZ8",
        coordinates: { lat: 14.0750654, lng: 121.3177041 },
      },
      {
        id: 30,
        name: "Worship Center Taytay",
        address: "Roma Taytay, 1920 Rizal",
        phone: "09428473377",
        services: "Wednesday 6:30PM & Saturday: 2PM & 5PM & Sunday: 10:30AM & 6:30PM",
        image: "",
        mapUrl: "https://maps.app.goo.gl/Dj2utRLVY4FPwVWN8",
        coordinates: { lat: 14.5456966, lng: 121.1475172 },
      },
      {
        id: 31,
        name: "Worship Center Tumana",
        address: "45 Sunkist Street Road, 3 Doña Petra, Marikina",
        phone: "09985630012",
        services: "Sunday 9AM",
        image: Tumana,
        mapUrl: "https://maps.app.goo.gl/ED4SkrZrbY41SiN47",
        coordinates: { lat: 14.6594801, lng: 121.0999537 },
      },
      {
        id: 32,
        name: "Worship Center Valley Golf",
        address: "4 Golf, Cainta, 1870 Rizal",
        phone: "09456443978",
        services: "Sunday: 9:30AM",
        image: ValleyGolf,
        mapUrl: "https://maps.app.goo.gl/WiH3J6eCdSnXt5wg8",
        coordinates: { lat: 14.6043236, lng: 121.1195024 },
      },
    ];