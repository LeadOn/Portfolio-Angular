import { Component } from '@angular/core';

@Component({
  selector: 'app-home-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class HomeExperienceComponent {
  experiences = [
    {
      position: false,
      title: 'Yunit - since September 2022',
      shortDesc: 'ITSM consultant',
      desc: 'Developping new business apps / new Service Portals on ServiceNow<br />Helping clients to switch to ServiceNow from scratch',
    },
    {
      position: true,
      title: 'Knowledge 2023 - May 2023',
      shortDesc: 'ServiceNow conference',
      desc: "Discovering what's next for the ServiceNow platform, and latest innovations.",
    },
    {
      position: false,
      title: 'ServiceNow Certification - March 2023',
      shortDesc: 'Certified Implementation Specialist - IT Service Management',
      desc: 'Obtained while working on multiple side of the ServiceNow platform (SecOps, ITSM, Agile, Performance Analytics...)',
    },
    {
      position: true,
      title: 'IN-IT - March 2020 to August 2022',
      shortDesc: 'Junior ITSM consultant',
      desc: 'Developping new business apps / new Service Portals on ServiceNow<br />Helping clients to switch to ServiceNow from scratch<br />Developping custom producers for Apache Kafka',
    },
    {
      position: false,
      title: 'ServiceNow Certification - August 2020',
      shortDesc: 'Certified System Administator',
      desc: 'Obtained during my internship at IN-IT, obtained all deltas since',
    },
    {
      position: true,
      title: 'Vice-President of Student Council',
      shortDesc: '2020-2022',
      desc: 'Organizing cool activities with students, help school on their side projects',
    },
    {
      position: false,
      title: 'Microsoft Student Ambassador',
      shortDesc: 'Year 2020-2021',
      desc: 'Decided to be part of the Microsoft experience while being at DIIAGE.',
    },
    {
      position: true,
      title: 'DIIAGE',
      shortDesc: 'Full-Stack Developper diploma obtained on november 2022',
      desc: 'Studying at DIIAGE, to obtain an Full-Stack Developper diploma, in France.',
    },
  ];
}
