export class Repository {
  id: number = 0;
  name: string = 'Name';
  html_url: string = 'URL';
  description: string = 'Description';
  language: string = 'Language';
  git_url: string = 'https://github.com/LeadOn';
  updated_at: Date = new Date();
  created_at: Date = new Date();
  topics: string[] = [];
}
