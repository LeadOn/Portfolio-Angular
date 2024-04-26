import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class HomeExperienceComponent {
  infoIcon = faInfoCircle;
  experiences = [
    {
      position: false,
      type: 'work',
      title: 'Yunit - since April 2024',
      shortDesc: 'Innovation Laboratory Manager',
      desc: 'Managing the Innovation Laboratory, creating new applications around innovative technologies such as Generative AI, ...',
    },
    {
      position: true,
      type: 'work',
      title: 'Yunit - since January 2024',
      shortDesc: 'Senior Consultant',
      desc: 'Developping new business apps / new Service Portals on ServiceNow, helping clients to switch to ServiceNow from scratch',
    },
    {
      position: false,
      type: 'work',
      title: 'Yunit - Sept 2022 - Jan 2024',
      shortDesc: 'Consultant',
      desc: 'Developping new business apps / new Service Portals on ServiceNow, helping clients to switch to ServiceNow from scratch',
    },
    {
      position: true,
      type: 'achievement',
      title: 'ServiceNow Certification - October 2023',
      shortDesc: 'Certified Application Developer',
      desc: 'Validated Knowledge obtained over the years.',
    },
    {
      position: false,
      type: 'learn',
      title: 'Knowledge 2023 - May 2023',
      shortDesc: 'ServiceNow conference',
      desc: "Discovering what's next for the ServiceNow platform, and latest innovations.",
    },
    {
      position: true,
      type: 'achievement',
      title: 'ServiceNow Certification - March 2023',
      shortDesc: 'Certified Implementation Specialist - IT Service Management',
      desc: 'Obtained while working on multiple side of the ServiceNow platform (SecOps, ITSM, Agile, Performance Analytics...)',
    },
    {
      position: false,
      type: 'work',
      title: 'IN-IT - March 2020 to August 2022',
      shortDesc: 'Junior ITSM consultant',
      desc: 'Developping new business apps / new Service Portals on ServiceNow, helping clients to switch to ServiceNow from scratch, developping custom producers for Apache Kafka',
    },
    {
      position: true,
      type: 'achievement',
      title: 'ServiceNow Certification - August 2020',
      shortDesc: 'Certified System Administator',
      desc: 'Obtained during my internship at IN-IT, obtained all deltas since',
    },
    {
      position: false,
      type: 'achievement',
      title: 'Vice-President of Student Council',
      shortDesc: '2020-2022',
      desc: 'Organizing cool activities with students, help school on their side projects',
    },
    {
      position: true,
      type: 'achievement',
      title: 'Microsoft Student Ambassador',
      shortDesc: 'Year 2020-2021',
      desc: 'Decided to be part of the Microsoft experience while being at DIIAGE.',
    },
    {
      position: false,
      type: 'learn',
      title: 'DIIAGE',
      shortDesc: 'Full-Stack Developper diploma obtained on november 2022',
      desc: 'Studying at DIIAGE, to obtain an Full-Stack Developper diploma, in France.',
    },
  ];
}
