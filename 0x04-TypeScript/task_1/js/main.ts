interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows adding any additional property
}
interface Directors extends Teacher {
  numberOfReports: number;
}



export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher({ firstName, lastName }: { firstName: string; lastName: string; }): string {
  return `${firstName[0]}. ${lastName}`;
}






const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
// J. Doe

// Output: J. Doe

// Interface describing the constructor
export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the class
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
export class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}



