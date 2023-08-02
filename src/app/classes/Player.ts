export class Player {
  id: number = 0;
  fullName: string = 'John Doe';
  nickname: string = 'Johndoe';
  profilePictureUrl: string =
    'https://media.licdn.com/dms/image/D4E03AQGpk_EvdcLi1w/profile-displayphoto-shrink_800_800/0/1684249003276?e=1696464000&v=beta&t=0SYFAz3I2F0xeEtwv0901-XjHmxGVdkq-SfJbER3PK4';
  createdOn: Date = new Date();
  wins: number = 0;
  losses: number = 0;
  draws: number = 0;
  matchPlayed: number = 0;
}
