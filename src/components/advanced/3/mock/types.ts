export type School = {
  id: number;
  name: string;
};

export type Course = {
  id: number;
  schId: number;
  name: string;
  code: string;
};
