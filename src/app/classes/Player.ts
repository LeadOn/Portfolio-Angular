export class Player {
  fullName: string = 'John Doe';
  nickname: string = 'Johndoe';
  imgUrl: string =
    'https://media.licdn.com/dms/image/D4E03AQGpk_EvdcLi1w/profile-displayphoto-shrink_800_800/0/1684249003276?e=1696464000&v=beta&t=0SYFAz3I2F0xeEtwv0901-XjHmxGVdkq-SfJbER3PK4';

  constructor(fullName: string, imgUrl: string) {
    this.fullName = fullName;
    this.imgUrl = imgUrl;
  }
}
