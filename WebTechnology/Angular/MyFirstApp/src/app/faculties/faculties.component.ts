import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Faculty } from '../faculty';
@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css'],
})
export class FacultiesComponent {
  faculties: Faculty[] = [
    {
      FacultyId: 1,
      FacultyAge: 25,
      FacultyName: 'Dr. Gopi Sanghani',
      FacultyDesignation: 'Dean - School of Computer Science',
      FacultyEducationQualification: 'Ph.D. , M.E. (CE)',
      FacultyExperience: '22+ Years',
      FacultyWorkingSince: 'Jul-2012',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/5---21-06-2021-10-50-15.jpg',
    },
    {
      FacultyId: 2,
      FacultyAge: 25,
      FacultyName: 'Dr. Nilesh Gambhava',
      FacultyDesignation: 'Professor',
      FacultyEducationQualification: 'Ph.D. , M.E. (CE)',
      FacultyExperience: '19+ Years',
      FacultyWorkingSince: 'Jul-2009',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/01CENMG%20(2)_19042019_063552AM_21052019_044853AM.jpg',
    },
    {
      FacultyId: 3,
      FacultyAge: 25,
      FacultyName: 'Dr. Pradyumansinh Jadeja',
      FacultyDesignation: 'Associate Professor',
      FacultyEducationQualification: 'Ph.D. , M.E. (CE)',
      FacultyExperience: '17+ Years',
      FacultyWorkingSince: 'Jul-2009',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/02CEPUJ_19042019_063653AM.jpg',
    },
    {
      FacultyId: 4,
      FacultyAge: 25,
      FacultyName: 'Prof. Maulik Trivedi',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.Tech. (CSE)',
      FacultyExperience: '14+ Years',
      FacultyWorkingSince: 'Jun-2009',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/CEMDT01_25042019_022618PM.jpg',
    },
    {
      FacultyId: 5,
      FacultyAge: 25,
      FacultyName: 'Prof. Dixita Kagathara',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.Tech. (Web Technology)',
      FacultyExperience: '13+ Years',
      FacultyWorkingSince: 'Jul-2009',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/9---20-06-2021-10-41-42.jpg',
    },
    {
      FacultyId: 6,
      FacultyAge: 25,
      FacultyName: 'Prof. Rupesh Vaishnav',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.E. (CE)',
      FacultyExperience: '14+ Years',
      FacultyWorkingSince: 'May-2013',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/07CERGV_19042019_063838AM.jpg',
    },
    {
      FacultyId: 7,
      FacultyAge: 25,
      FacultyName: 'Prof. Swati Sharma',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.Tech. (CSE)',
      FacultyExperience: '14+ Years',
      FacultyWorkingSince: 'May-2013',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/11---20-06-2021-10-40-26.jpg',
    },
    {
      FacultyId: 8,
      FacultyAge: 25,
      FacultyName: 'Prof. Arjun Bala',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.Tech. (CSE)',
      FacultyExperience: '12+ Years',
      FacultyWorkingSince: 'Jul-2013',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/09CEAVB_19042019_063947AM.jpg',
    },
    {
      FacultyId: 9,
      FacultyAge: 25,
      FacultyName: 'Prof. Mayur Padia',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.E. (CE)',
      FacultyExperience: '13+ Years',
      FacultyWorkingSince: 'Jul-2011',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/10CEMSP_19042019_064012AM.jpg',
    },
    {
      FacultyId: 10,
      FacultyAge: 25,
      FacultyName: 'Prof. Vijay Shekhat',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.E. (CE)',
      FacultyExperience: '10+ Years',
      FacultyWorkingSince: 'Jun-2012',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/CEVMS01_19042019_082302AM.jpg',
    },
    {
      FacultyId: 11,
      FacultyAge: 25,
      FacultyName: 'Prof. Naimish Vadodariya',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.E. (CE)',
      FacultyExperience: '9+ Years',
      FacultyWorkingSince: 'Jun-2015',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/12CENRV_19042019_064035AM.jpg',
    },
    {
      FacultyId: 12,
      FacultyAge: 25,
      FacultyName: 'Prof. UmeshKumar Thoriya',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.Tech. (CSE)',
      FacultyExperience: '9+ Years',
      FacultyWorkingSince: 'Jul-2015',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/14CEUHT_19042019_070801AM.jpg',
    },
    {
      FacultyId: 13,
      FacultyAge: 25,
      FacultyName: 'Prof. Jayesh Vagadiya',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.E (CE)',
      FacultyExperience: '7+ Years',
      FacultyWorkingSince: 'Jul-2015',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/16CEJDV_19042019_064225AM.jpg',
    },
    {
      FacultyAge: 25,
      FacultyId: 14,
      FacultyName: 'Prof. Krunal Vyas',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.Tech.(ICT), B.E. (EC)',
      FacultyExperience: '8+ Years',
      FacultyWorkingSince: 'Jul-2018',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/18CEKDV_19042019_064425AM.jpg',
    },
    {
      FacultyId: 15,
      FacultyAge: 25,
      FacultyName: 'Prof. Jay Dhamsaniya',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'M.E. (E.C.), B.Tech. (E.C.)',
      FacultyExperience: '10+ Years',
      FacultyWorkingSince: 'Jul-2012',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/46---20-06-2021-10-27-43.jpg',
    },
    {
      FacultyId: 16,
      FacultyAge: 25,
      FacultyName: 'Prof. Mehul Bhundiya',
      FacultyDesignation: 'Assistant Professor',
      FacultyEducationQualification: 'BE (CE), ME (CE)',
      FacultyExperience: '8+ Years',
      FacultyWorkingSince: 'Aug-2018',
      FacultyImage:
        'https://darshan.ac.in/U01/Faculty-Photo/CEMDB03_10022019_045347AM.JPG',
    },
  ];
  deleteFaculty(i: any) {
    this.faculties.splice(i, 1);
  }
  myForm = new FormGroup({
    FacultyAge: new FormControl(0),
    FacultyId: new FormControl(0),
    FacultyName: new FormControl(''),
    FacultyDesignation: new FormControl(''),
    FacultyEducationQualification: new FormControl(''),
    FacultyExperience: new FormControl(''),
    FacultyWorkingSince: new FormControl(''),
    FacultyImage: new FormControl(''),
  });
  insert() {
    if (this.idToEdit == -1) {
      this.faculties.push(<Faculty>this.myForm.value);
    } else if (this.idToEdit > -1) {
      this.faculties[this.idToEdit] = <Faculty>this.myForm.value;
    }
    this.myForm.controls.FacultyId.setValue(0);
    this.myForm.controls.FacultyAge.setValue(0);

    this.myForm.controls.FacultyName.setValue('');
    this.myForm.controls.FacultyDesignation.setValue('');
    this.myForm.controls.FacultyEducationQualification.setValue('');
    this.myForm.controls.FacultyExperience.setValue('');
    this.myForm.controls.FacultyWorkingSince.setValue('');
    this.myForm.controls.FacultyImage.setValue('');
    this.idToEdit = -1;
  }
  idToEdit: number = -1;
  edit(i: any) {
    this.idToEdit = i;
    this.myForm.controls.FacultyId.setValue(this.faculties[i].FacultyId);
    this.myForm.controls.FacultyAge.setValue(this.faculties[i].FacultyAge);
    this.myForm.controls.FacultyName.setValue(this.faculties[i].FacultyName);
    this.myForm.controls.FacultyDesignation.setValue(
      this.faculties[i].FacultyDesignation
    );
    this.myForm.controls.FacultyEducationQualification.setValue(
      this.faculties[i].FacultyEducationQualification
    );
    this.myForm.controls.FacultyExperience.setValue(
      this.faculties[i].FacultyExperience
    );
    this.myForm.controls.FacultyWorkingSince.setValue(
      this.faculties[i].FacultyWorkingSince
    );
    this.myForm.controls.FacultyImage.setValue(this.faculties[i].FacultyImage);
  }
}
