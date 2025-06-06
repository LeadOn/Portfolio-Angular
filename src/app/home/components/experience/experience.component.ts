import { Component } from '@angular/core';

@Component({
  selector: 'app-home-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  standalone: false,
})
export class HomeExperienceComponent {
  experiences = [
    {
      type: 'achievement',
      title: 'Certified Technical Architect - June 2025',
      shortDesc: 'Certified Technical Architect',
      desc: 'Validates my experience after 5 years.',
    },
    {
      type: 'achievement',
      title: 'Gen AI Accreditation - May 2025',
      shortDesc: 'RampCamp Gen AI Accreditation',
      desc: 'Obtained during Knowledge 2025, Las Vegas, NV, USA.',
    },
    {
      type: 'learn',
      title: 'Knowledge 2025 - May 2025',
      shortDesc: 'ServiceNow Event',
      desc: "Discovering what's next for the ServiceNow platform, and latest innovations.",
    },
    {
      type: 'learn',
      title: 'Now Summit AI Paris - March 2025',
      shortDesc: 'ServiceNow Event',
      desc: 'Showing our experience around AI Agents, the day it goes live to clients',
    },
    {
      type: 'learn',
      title: 'World Forum Paris - November 2024',
      shortDesc: 'ServiceNow Event',
      desc: "Discovering what's next for the ServiceNow platform, and latest innovations + Representing Yunit",
    },
    {
      type: 'achievement',
      title: 'CIS CSM - June 2024',
      shortDesc:
        'Certified Implementation Specialist - Customer Service Management',
      desc: 'Last step required to be eligible for CTA.',
    },
    {
      type: 'work',
      title: 'Yunit - since April 2024',
      shortDesc: 'Innovation Laboratory Manager',
      desc: 'Managing the Innovation Laboratory, creating new applications around innovative technologies such as Generative AI, ...',
    },
    {
      type: 'achievement',
      title: 'GenAI Accreditation - May 2024',
      shortDesc: 'Partner Sales GenAI+ Accreditation',
      desc: 'Obtained during Knowledge 2024, Las Vegas, NV, USA.',
    },
    {
      type: 'learn',
      title: 'Knowledge 2024 - May 2024',
      shortDesc: 'ServiceNow Event',
      desc: "Discovering what's next for the ServiceNow platform, and latest innovations.",
    },
    {
      type: 'work',
      title: 'Yunit - since January 2024',
      shortDesc: 'Senior Consultant',
      desc: 'Developping new business apps / new Service Portals on ServiceNow, helping clients to switch to ServiceNow from scratch',
    },
    {
      type: 'work',
      title: 'Yunit - Sept 2022 - Jan 2024',
      shortDesc: 'Consultant',
      desc: 'Developping new business apps / new Service Portals on ServiceNow, helping clients to switch to ServiceNow from scratch',
    },
    {
      type: 'achievement',
      title: 'CAD - October 2023',
      shortDesc: 'Certified Application Developer',
      desc: 'Validated Knowledge obtained over the years.',
    },
    {
      type: 'learn',
      title: 'Knowledge 2023 - May 2023',
      shortDesc: 'ServiceNow Event',
      desc: "Discovering what's next for the ServiceNow platform, and latest innovations.",
    },
    {
      type: 'achievement',
      title: 'CIS ITSM - March 2023',
      shortDesc: 'Certified Implementation Specialist - IT Service Management',
      desc: 'Obtained while working on multiple side of the ServiceNow platform (SecOps, ITSM, Agile, Performance Analytics...)',
    },
    {
      type: 'work',
      title: 'IN-IT - March 2020 to August 2022',
      shortDesc: 'Junior ITSM consultant',
      desc: 'Developping new business apps / new Service Portals on ServiceNow, helping clients to switch to ServiceNow from scratch, developping custom producers for Apache Kafka',
    },
    {
      type: 'achievement',
      title: 'CSA - August 2020',
      shortDesc: 'Certified System Administator',
      desc: 'Obtained during my internship at IN-IT, obtained all deltas since',
    },
    {
      type: 'achievement',
      title: 'Vice-President of Student Council',
      shortDesc: '2020-2022',
      desc: 'Organizing cool activities with students, help school on their side projects',
    },
    {
      type: 'achievement',
      title: 'Microsoft Student Ambassador',
      shortDesc: 'Year 2020-2021',
      desc: 'Decided to be part of the Microsoft experience while being at DIIAGE.',
    },
    {
      type: 'learn',
      title: 'DIIAGE',
      shortDesc: 'Full-Stack Developper diploma obtained on november 2022',
      desc: 'Studying at DIIAGE, to obtain an Full-Stack Developper diploma, in France.',
    },
  ];
}
