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



