import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export class Skill {
  name: string = 'Unknown';
  icon: IconDefinition = faCode;

  constructor(name: string, icon: IconDefinition) {
    this.name = name;
    this.icon = icon;
  }
}
