import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/classes/Skill';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent implements OnInit {
  @Input()
  skill: Skill = new Skill('Unknown', faCode);

  selectedIcon: IconDefinition = faCode;

  constructor() {}

  ngOnInit(): void {
    this.selectedIcon = this.skill.icon;
  }
}
