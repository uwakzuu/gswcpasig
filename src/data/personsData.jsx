import DefaultImg from "../assets/img/defaultIMG.jpg";
const getImageSrc = (src) => src || DefaultImg; 

export const PersonsData = [
  {
    "pfp": getImageSrc(""),
    "name": "John Doe",
    "position": "Developer",
    "phoneNum": "+123-456-7890",
    "gmailEmail": "johndoe@gmail.com",
    "outlookEmail": "johndoe@outlook.com",
    "Address": "123 Main St, Anytown, USA",
  },
  {
    "pfp": getImageSrc(""),
    "name": "Jane Smith",
    "position": "Designer",
    "phoneNum": "+987-654-3210",
    "gmailEmail": "janesmith@gmail.com",
    "outlookEmail": "janesmith@outlook.com",
    "Address": "456 Elm St, Othertown, USA",
  },
  {
    "pfp": getImageSrc(""),
    "name": "Alice Johnson",
    "position": "Product Manager",
    "phoneNum": "+555-123-4567",
    "gmailEmail": "alicejohnson@gmail.com",
    "outlookEmail": "alicejohnson@outlook.com",
    "Address": "789 Maple Ave, Sometown, USA",
  },
  {
    "pfp": getImageSrc(""),
    "name": "Bob Brown",
    "position": "Marketing Specialist",
    "phoneNum": "+321-654-0987",
    "gmailEmail": "bobbrown@gmail.com",
    "outlookEmail": "bobbrown@outlook.com",
    "Address": "321 Oak St, Anycity, USA",
  },
];