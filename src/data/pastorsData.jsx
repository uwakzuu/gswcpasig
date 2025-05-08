const imageModules = import.meta.glob('../assets/img/Pastors/*.{jpg,jpeg,png}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, module]) => {
    const fileName = path.split('/').pop();
    return [fileName, module.default];
  })
);

const greg = images['greg.jpg'];
const luke = images['luke.jpg'];
const cory = images['cory.jpg'];
const jr = images['jr.jpg'];
const james = images['james.jpg'];
const vincent = images['vincent.jpg'];
const jhun = images['jhun.jpg'];
const rj = images['rj.jpg'];
const rod = images['rod.jpg'];
const ryan = images['ryan.jpg'];
const digi = images['digi.jpg'];
const julius = images['julius.jpg'];
const renz = images['renz.jpg'];
//const rogerAkers = images['.jpg'];
const joel = images['joel.jpg'];
const arnel = images['arnel.jpg'];
const luis = images['luis.jpg'];
const lito = images['lito.jpg'];
const ianc = images['ianc.jpg'];
const johnny = images['johnny.jpg'];
const je = images['je.jpg'];
const marlon = images['marlon.jpg'];
const isaac = images['isaac.jpg'];
const fong = images['fong.jpg'];
const roberto = images['roberto.jpg'];
const arnold1 = images['arnold1.jpg'];
const rodno = images['rodno.jpg'];
const marc = images['marc.jpg'];
const arnold = images['arnold.jpg'];
const dhax2 = images['dhax2.jpg'];
const gino = images['gino.jpg'];
const roy = images['roy.jpg'];
const chris = images['chris.jpg'];
const wilson = images['wilson.jpg'];
//const levi = images['.jpg'];
//const geph = images['.jpg'];
const alex = images['alex.jpg'];
const edwin = images['edwin.jpg'];
const ian = images['ian.jpg'];
const saldy = images['saldy.jpg'];
const rodel = images['rodel.jpg'];
const aguire = images['aguire.jpg'];
const rasul = images['rasul.jpg'];
//const jeremy = images['.jpg'];
//const phonny = images['.jpg'];
//const rowel = images['.jpg'];
//const jesus = images['.jpg'];
const roger = images['roger.jpg'];

export const PastorsData = [
    { name: "Dr Greg Lyons", church: "Worship Center - Pasig", position: "Senior Pastor", img: greg },
    { name: "Luke Lyons", church: "Worship Center - Pasig", position: "Executive Pastor", img: luke },
    { name: "Cory Lyons", church: "Worship Center - Pasig", position: "Executive Pastor", img: cory },
    { name: "Jireh Rufin", church: "Worship Center - Pasig", position: "Executive Pastor", img: jr },
    { name: "James Macadangdang", church: "Worship Center - Pasig", position: "Executive Pastor", img: james },
    { name: "Vicent Vicencio", church: "Worship Center - Pasig", position: "Pastor", img: vincent },
    { name: "Jun Mostrales", church: "Worship Center - Pasig", position: "Pastor", img: jhun },
    { name: "Rj Lizarondo III", church: "Worship Center - Pasig", position: "Pastor", img: rj },
    { name: "Rod Bautista", church: "Worship Center - Pasig", position: "Pastor", img: rod },
    { name: "Ryan Obasan", church: "Worship Center - Pasig", position: "Pastor", img: ryan },
    { name: "Digi Antonio", church: "Worship Center - Pasig", position: "Pastor", img: digi },
    { name: "Julius Veloso", church: "Worship Center - Floodway", position: "Pastor", img: julius },
    { name: "Renz Limpin", church: "Worship Center - Cogeo", position: "Pastor", img: renz },
    { name: "Roger Akers", church: "Worship Center - Cainta", position: "Senior Pastor", img: "" },
    { name: "Joel Suaiso", church: "Worship Center - Cainta", position: "Pastor", img: joel },
    { name: "Arnel Cruz", church: "Worship Center - San Mateo", position: "Pastor", img: arnel },
    { name: "Luis Faller", church: "Worship Center - TayTay", position: "Pastor", img: luis },
    { name: "Lito Lipata", church: "Worship Center - Cavite", position: "Pastor", img: lito },
    { name: "Adrian Fedoc", church: "Worship Center - Cavite", position: "Pastor", img: ianc },
    { name: "Johnny Royo", church: "Worship Center - Manila", position: "Pastor", img: johnny },
    { name: "Je Nacion", church: "Worship Center - Antipolo", position: "Pastor", img: je },
    { name: "Marlon Peregrin", church: "Worship Center - Mandaluyong", position: "Pastor", img: marlon },
    { name: "Isaac Basilio", church: "Worship Center - Pasay", position: "Senior Pastor", img: isaac },
    { name: "Fong Layug", church: "Worship Center - Pasay", position: "Pastor", img: fong },
    { name: "Roberto Dela Paz", church: "Worship Center - Caloocan", position: "Pastor", img: roberto },
    { name: "Arnold Dequila", church: "Worship Center - Bulacan", position: "Pastor", img: arnold1 },
    { name: "Rodno Tamba", church: "Worship Center - Jenny's", position: "Pastor", img: rodno },
    { name: "Marc Buxton", church: "Worship Center - Marikina", position: "Senior Pastor", img: marc },
    { name: "Arnold Aduca", church: "Worship Center - Masinag", position: "Pastor", img: arnold },
    { name: "Mark Reyes", church: "Worship Center - Baliwag", position: "Pastor", img: dhax2 },
    { name: "Gino Rodeo", church: "Worship Center - Paranaque", position: "Pastor", img: gino },
    { name: "Roy Veloso", church: "Worship Center - PFCI", position: "Pastor", img: roy },
    { name: "Chris Nicodemus", church: "Worship Center - Pampanga", position: "Pastor", img: chris },
    { name: "Wilson Nepomuceno", church: "Worship Center - Pulilan", position: "Pastor", img: wilson },
    { name: "Levi Nacion", church: "Worship Center - Antipolo", position: "Pastor", img: "" },
    { name: "Geph Ignacio", church: "Worship Center - Antipolo", position: "Pastor", img: "" },
    { name: "Alex Vargas", church: "Worship Center - Malabon", position: "Pastor", img: alex },
    { name: "Edwin Tabia", church: "Worship Center - San Mateo", position: "Pastor", img: edwin },
    { name: "Ian Geanga", church: "Worship Center - San Pablo", position: "Pastor", img: ian },
    { name: "Saldy Bautista", church: "Worship Center - Damayan", position: "Pastor", img: saldy },
    { name: "Rodelle Macale", church: "Worship Center - Tumana", position: "Pastor", img: rodel },
    { name: "Rogelio Aguirre", church: "Worship Center - Negros", position: "Pastor", img: aguire },
    { name: "Rasul Tungao", church: "Worship Center - Cambodia", position: "Pastor", img: rasul },
    { name: "Jeremy Flores", church: "Worship Center - Floodway", position: "Pastor", img: "" },
    { name: "Phonny Jorquia", church: "Worship Center Taytay", position: "Pastor", img: "" },
    { name: "Rowel Del Mundo", church: "Vines Church", position: "Pastor", img: "" },
    { name: "Jesus Garando", church: "Dasmariñas Community Bible Baptist Church", position: "Pastor", img: "" },
    { name: "Roger Villanueva", church: "Emmanuel Baptist Community Church", position: "Pastor", img: roger }
];
  