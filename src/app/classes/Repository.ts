export class Repository {
  id: number = 0;
  name: string = 'Name';
  html_url: string = 'URL';
  description: string = 'Description';
  language: string = 'Language';
  updated_at: Date = new Date();
  created_at: Date = new Date();
  topics: string[] = [];
  topicsTransformed: string[] = [];
}
