export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName; // ✅ satisfies "this.lastName"
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName; // ✅ satisfies displayName requirement
  }
}
