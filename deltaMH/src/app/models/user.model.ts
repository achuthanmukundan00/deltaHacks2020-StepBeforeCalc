export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  journals?: Journal[];
}

export interface Journal {
  date: string;
  entry: string;
}
