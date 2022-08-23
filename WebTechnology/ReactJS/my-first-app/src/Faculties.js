// let Faculties = (props) => {
const arr = [
  {
    FacultyName: "Tyler",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1052.jpg",
    FacultyMobile: "(976) 706-1573 x8720",
    FacultyEmail: "Dax_Corwin19@yahoo.com",
    id: "25",
  },
  {
    FacultyName: "Evie",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/341.jpg",
    FacultyMobile: "1-704-647-2166 ",
    FacultyEmail: "Vida_Mraz37@hotmail.com",
    id: "27",
  },
  {
    FacultyName: "Greta",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/465.jpg",
    FacultyMobile: "1-744-289-3688 x5191",
    FacultyEmail: "Gerhard_Stracke66@hotmail.com",
    id: "29",
  },
  {
    FacultyName: "Violette",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/414.jpg",
    FacultyMobile: "(371) 814-3805",
    FacultyEmail: "Velva6@yahoo.com",
    id: "30",
  },
  {
    FacultyName: "Caesar",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/238.jpg",
    FacultyMobile: "1-938-601-3533 x2120",
    FacultyEmail: "Delbert15@gmail.com",
    id: "31",
  },
  {
    FacultyName: "Michelle",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/363.jpg",
    FacultyMobile: "464.295.6233 x902",
    FacultyEmail: "Patsy26@hotmail.com",
    id: "33",
  },
  {
    FacultyName: "Kattie",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/924.jpg",
    FacultyMobile: "266-622-6679 x57708",
    FacultyEmail: "Ayla.Ebert72@hotmail.com",
    id: "34",
  },
  {
    FacultyName: "Baylee",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/870.jpg",
    FacultyMobile: "387-459-5686 x1550",
    FacultyEmail: "Adriana.Halvorson95@yahoo.com",
    id: "35",
  },
  {
    FacultyName: "Mary",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/151.jpg",
    FacultyMobile: "(267) 646-0153",
    FacultyEmail: "Emerson51@yahoo.com",
    id: "36",
  },
  {
    FacultyName: "Holly",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/919.jpg",
    FacultyMobile: "(941) 543-8205",
    FacultyEmail: "Lucas.Welch15@gmail.com",
    id: "37",
  },
  {
    FacultyName: "Bethany",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/128.jpg",
    FacultyMobile: "1-935-899-2963 x475",
    FacultyEmail: "Tremaine.Crooks@gmail.com",
    id: "38",
  },
  {
    FacultyName: "Xzavier",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1046.jpg",
    FacultyMobile: "(814) 445-4040",
    FacultyEmail: "Rickie56@gmail.com",
    id: "39",
  },
  {
    FacultyName: "Gonzalo",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/326.jpg",
    FacultyMobile: "617.626.0748 x008",
    FacultyEmail: "Jordyn.Marquardt@hotmail.com",
    id: "40",
  },
  {
    FacultyName: "Litzy",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/344.jpg",
    FacultyMobile: "(723) 560-0967",
    FacultyEmail: "Conor.Hermann@yahoo.com",
    id: "41",
  },
  {
    FacultyName: "Trever",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/267.jpg",
    FacultyMobile: "1-393-480-1583 x72885",
    FacultyEmail: "Noel_Pfeffer75@hotmail.com",
    id: "42",
  },
  {
    FacultyName: "Jackie",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/719.jpg",
    FacultyMobile: "933-565-2063 x1182",
    FacultyEmail: "Jakob.Lakin@hotmail.com",
    id: "43",
  },
  {
    FacultyName: "Elias",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1235.jpg",
    FacultyMobile: "1-358-828-1383 x803",
    FacultyEmail: "Bert.Anderson@gmail.com",
    id: "44",
  },
  {
    FacultyName: "Rodger",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/798.jpg",
    FacultyMobile: "741-603-4266 x555",
    FacultyEmail: "Ashley_Walsh@yahoo.com",
    id: "45",
  },
  {
    FacultyName: "Margaret",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/491.jpg",
    FacultyMobile: "600.448.0388 x132",
    FacultyEmail: "Jude55@hotmail.com",
    id: "46",
  },
  {
    FacultyName: "Bert",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/134.jpg",
    FacultyMobile: "(301) 743-9463 x5431",
    FacultyEmail: "Drew.Bailey51@hotmail.com",
    id: "47",
  },
  {
    FacultyName: "Myriam",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/503.jpg",
    FacultyMobile: "(686) 992-5245 x46830",
    FacultyEmail: "Pablo_Zieme88@gmail.com",
    id: "48",
  },
  {
    FacultyName: "Cedrick",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/198.jpg",
    FacultyMobile: "1-217-907-0791 x4250",
    FacultyEmail: "Gabrielle_Rau@hotmail.com",
    id: "49",
    Name: "Dr. Nilesh Gambhava",
    Mobile: "9727747310",
    Email: "vp@darshan.ac.in",
    Experience: "20 Years",
    WorkingSince: "Since 2008",
    Seating: "A-108",
    Description:
      "Dr. Nilesh Gambhava is working as a professor at Computer Engineering Department. He has pursued B.E. from GCET, Vallabh Vidyanagar in 2001 and M.E. from BVM, Vallabh Vidyanagar in 2004.",
    Specialization: "Web Mining, Social Networking",
    SubjectsTaught:
      "C, C++, Discrete Mathematics, DBMS, Algorithm, Unix, Software Engineering",
    Image:
      "https://darshan.ac.in/U01/Faculty-Photo/01CENMG%20(2)_19042019_063552AM_21052019_044853AM.jpg",
  },
  {
    FacultyName: "Gus",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/807.jpg",
    FacultyMobile: "512-465-1824",
    FacultyEmail: "Newell_Kassulke87@hotmail.com",
    id: "51",
  },
  {
    FacultyName: "Gilberto",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/224.jpg",
    FacultyMobile: "233.539.4141 x15929",
    FacultyEmail: "Rebeka20@hotmail.com",
    id: "52",
  },
  {
    FacultyName: "Dangelo",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/302.jpg",
    FacultyMobile: "(966) 619-6533 x915",
    FacultyEmail: "Isaias.Mayer@gmail.com",
    id: "53",
  },
  {
    FacultyName: "Mitchel",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1214.jpg",
    FacultyMobile: "200-697-4674",
    FacultyEmail: "Antwan_Mohr@hotmail.com",
    id: "54",
  },
  {
    FacultyName: "Glenna",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1122.jpg",
    FacultyMobile: "278.660.4970 x934",
    FacultyEmail: "Zackary.Hessel56@yahoo.com",
    id: "54",
  },
  {
    FacultyName: "Vincent",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/955.jpg",
    FacultyMobile: "637.282.8958",
    FacultyEmail: "Isadore.Medhurst46@gmail.com",
    id: "55",
  },
  {
    FacultyName: "Dorris",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    FacultyMobile: "266.961.5914",
    FacultyEmail: "Vaughn_Swaniawski12@hotmail.com",
    id: "56",
  },
  {
    FacultyName: "asdf",
    FacultyImage: "asdf",
    FacultyMobile: "asdf",
    FacultyEmail: "asdf",
    id: "58",
  },
  {
    FacultyName: "arjun",
    FacultyImage: "arjun",
    FacultyMobile: "arjun",
    FacultyEmail: "arjun",
    id: "59",
  },
  {
    FacultyName: "arjun",
    FacultyImage: "arjun",
    FacultyMobile: "arjun",
    FacultyEmail: "arjun",
    id: "60",
  },
  {
    FacultyName: "FacultyName 61",
    FacultyImage: "FacultyImage 61",
    FacultyMobile: "FacultyMobile 61",
    FacultyEmail: "FacultyEmail 61",
    id: "61",
  },
  {
    FacultyName: "FacultyName 62",
    FacultyImage: "FacultyImage 62",
    FacultyMobile: "FacultyMobile 62",
    FacultyEmail: "FacultyEmail 62",
    id: "62",
  },
  {
    FacultyName: "FacultyName 63",
    FacultyImage: "FacultyImage 63",
    FacultyMobile: "FacultyMobile 63",
    FacultyEmail: "FacultyEmail 63",
    id: "63",
  },
  {
    FacultyName: "Liso",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1218.jpg",
    FacultyMobile: "(822) 912-7189 x447",
    FacultyEmail: "Montana15@gmail.com",
    id: "64",
  },
  {
    FacultyName: "FacultyName 65",
    FacultyImage: "FacultyImage 65",
    FacultyMobile: "FacultyMobile 65",
    FacultyEmail: "FacultyEmail 65",
    id: "65",
  },
  {
    FacultyName: "FacultyName 66",
    FacultyImage: "FacultyImage 66",
    FacultyMobile: "FacultyMobile 66",
    FacultyEmail: "FacultyEmail 66",
    id: "66",
  },
  {
    FacultyName: "FacultyName 66",
    FacultyImage: "FacultyImage 66",
    FacultyMobile: "FacultyMobile 66",
    FacultyEmail: "FacultyEmail 66",
    id: "66",
  },
  {
    FacultyName: "FacultyName 67",
    FacultyImage: "FacultyImage 67",
    FacultyMobile: "FacultyMobile 67",
    FacultyEmail: "FacultyEmail 67",
    id: "67",
    Name: "Dr. Nilesh Gambhava",
    Mobile: "9727747310",
    Email: "vp@darshan.ac.in",
    Experience: "20 Years",
    WorkingSince: "Since 2008",
    Seating: "A-108",
    Description:
      "Dr. Nilesh Gambhava is working as a professor at Computer Engineering Department. He has pursued B.E. from GCET, Vallabh Vidyanagar in 2001 and M.E. from BVM, Vallabh Vidyanagar in 2004.",
    Specialization: "Web Mining, Social Networking",
    SubjectsTaught:
      "C, C++, Discrete Mathematics, DBMS, Algorithm, Unix, Software Engineering",
    Image:
      "https://darshan.ac.in/U01/Faculty-Photo/01CENMG%20(2)_19042019_063552AM_21052019_044853AM.jpg",
  },
  {
    FacultyName: "FacultyName 68",
    FacultyImage: "FacultyImage 68",
    FacultyMobile: "FacultyMobile 68",
    FacultyEmail: "FacultyEmail 68",
    id: "68",
    Name: "Dr. Nilesh Gambhava",
    Mobile: "9727747310",
    Email: "vp@darshan.ac.in",
    Experience: "20 Years",
    WorkingSince: "Since 2008",
    Seating: "A-108",
    Description:
      "Dr. Nilesh Gambhava is working as a professor at Computer Engineering Department. He has pursued B.E. from GCET, Vallabh Vidyanagar in 2001 and M.E. from BVM, Vallabh Vidyanagar in 2004.",
    Specialization: "Web Mining, Social Networking",
    SubjectsTaught:
      "C, C++, Discrete Mathematics, DBMS, Algorithm, Unix, Software Engineering",
    Image:
      "https://darshan.ac.in/U01/Faculty-Photo/01CENMG%20(2)_19042019_063552AM_21052019_044853AM.jpg",
  },
  {
    FacultyName: "FacultyName 69",
    FacultyImage: "FacultyImage 69",
    FacultyMobile: "FacultyMobile 69",
    FacultyEmail: "FacultyEmail 69",
    id: "69",
  },
  {
    FacultyName: "FacultyName 70",
    FacultyImage: "ety",
    FacultyMobile: "FacultyMobile 70",
    FacultyEmail: "FacultyEmail 70",
    id: "70",
  },
  {
    FacultyName: "FacultyName 72",
    FacultyImage: "FacultyImage 72",
    FacultyMobile: "FacultyMobile 72",
    FacultyEmail: "FacultyEmail 72",
    id: "72",
  },
  {
    FacultyName: "FacultyName 73",
    FacultyImage: "FacultyImage 73",
    FacultyMobile: "FacultyMobile 73",
    FacultyEmail: "FacultyEmail 73",
    id: "73",
  },
  {
    FacultyName: "dinesh",
    FacultyImage: "FacultyImage 74",
    FacultyMobile: "FacultyMobile 74",
    FacultyEmail: "FacultyEmail 74",
    id: "74",
    FacultyDesignation: "ghgh jhjhns",
    FacultytEducation: "22 hhsbsn",
    FacultyExperience: "jkjkljm,m ",
    FacultyWorkingSince: "xnmns,m",
  },
  {
    FacultyName: "dinesh",
    FacultyImage: "FacultyImage 75",
    FacultyMobile: "FacultyMobile 75",
    FacultyEmail: "FacultyEmail 75",
    id: "75",
  },
  {
    FacultyName: "dineshg",
    FacultyImage: "FacultyImage 76",
    FacultyMobile: "FacultyMobile 76",
    FacultyEmail: "FacultyEmail 76",
    id: "76",
  },
  {
    FacultyName: "dineshg",
    FacultyImage: "FacultyImage 77",
    FacultyMobile: "FacultyMobile 77",
    FacultyEmail: "FacultyEmail 77",
    id: "77",
  },
  {
    FacultyName: "h",
    FacultyImage: "y",
    FacultyMobile: "u",
    FacultyEmail: "u",
    id: "78",
  },
  {
    FacultyName: "4814",
    FacultyImage: "ihhu",
    FacultyMobile: "dhaiia",
    FacultyEmail: "cxvc@",
    id: "80",
  },
  {
    FacultyName: "4814",
    FacultyImage: "ihhu",
    FacultyMobile: "dhaiia",
    FacultyEmail: "cxvc@",
    id: "81",
  },
  {
    FacultyName: "Prof. Jayesh Vagadiya",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/16CEJDV_19042019_064225AM.jpg",
    FacultyMobile: "FacultyMobile 82",
    FacultyEmail: "FacultyEmail 82",
    id: "82",
    FacultyDesignation: "Assistant Professor",
    FacultyHighestEducation: "M.E (CE)",
    FacultyWorkingSince: "2015",
    FacultyMobileNumber: "555652312320",
    FacultyEmailAddress: "jayesh@​darshan.ac.in",
    FacultySeating: "C-202",
    FacultyProfileDescription:
      "Prof. J. D. Vagadiya received his diploma degree in Computer Engineering from Christ Polytechnic Institute, Rajkot and B.E. from GEC",
    FacultyAreaSpecialization: " Load balancing",
    FacultySubjectsTaught: "Java Programming",
    FacultyExperienceInYears: "7",
  },
  {
    FacultyName: "FacultyName 83",
    FacultyImage: "FacultyImage 83",
    FacultyMobile: "FacultyMobile 83",
    FacultyEmail: "FacultyEmail 83",
    id: "83",
    facultyname: "rohit",
    facultymobilenumber: "4857575757",
    facultyemailaddress: "fdnbv@",
    facultyworkingsince: "8 years",
    facultyseating: "32",
    facultyprofiledescription: "pSKDJSAKDHuaofgasdgi",
    facultysubjectstaught: "maths",
    facultydesignation: "proffesor",
  },
  {
    FacultyName: "FacultyName 83",
    FacultyImage: "FacultyImage 83",
    FacultyMobile: "FacultyMobile 83",
    FacultyEmail: "FacultyEmail 83",
    id: "83",
    facultyname: "rohit",
    facultymobilenumber: "4857575757",
    facultyemailaddress: "fdnbv@",
    facultyworkingsince: "8 years",
    facultyseating: "32",
    facultyprofiledescription: "pSKDJSAKDHuaofgasdgi",
    facultysubjectstaught: "maths",
    facultydesignation: "proffesor",
  },
  {
    FacultyName: "FacultyName 84",
    FacultyImage: "FacultyImage 84",
    FacultyMobile: "FacultyMobile 84",
    FacultyEmail: "FacultyEmail 84",
    id: "84",
    facultyname: "rohit",
  },
  {
    FacultyName: "ikjrohdng",
    FacultyImage: "fdg",
    FacultyMobile: "FacultyMobile 85",
    FacultyEmail: "FacultyEmail 85",
    id: "85",
  },
  {
    FacultyName: "js",
    FacultyImage:
      "data:image/jpeg;base64,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",
    FacultyMobile: "216542325456",
    FacultyEmail: "cdfxfg@gc.as",
    id: "86",
  },
  {
    FacultyName: "dixit",
    FacultyImage: "FacultyImage 87",
    FacultyMobile: "90033",
    FacultyEmail: "5451251",
    id: "87",
  },
  {
    FacultyName: " mnxjkden",
    FacultyImage:
      "data:image/jpeg;base64,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",
    FacultyMobile: "22565623003",
    FacultyEmail: "mxnhdx@.com",
    id: "88",
  },
  {
    FacultyName: "Gonzalo",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/326.jpg",
    FacultyMobile: "617.626.0748 x008",
    FacultyEmail: "Jordyn.Marquardt@hotmail.com",
    id: "89",
  },
  {
    FacultyName: "khush",
    FacultyImage: "sjd",
    FacultyMobile: "123",
    FacultyEmail: "fhk@d,.com",
    id: "90",
    Facultyseting: "df",
    FacultyDesignation: "h",
    FacultyHighestEducation: "wkirh",
  },
];
const Fa = () => {
  const Name = arr.map((fac) => {
    return (
      <>
        <h1>{fac.FacultyName}</h1>
      </>
    );
  });
};
// return Name;
export default Fa;
