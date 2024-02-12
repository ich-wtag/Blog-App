export class User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  about: string;

  constructor(
    id: number,
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    image: string,
    about: string
  ) {
    this.id = id;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.image = image;
    this.about = about;
  }
}
