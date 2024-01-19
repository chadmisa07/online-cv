export interface Social {
  icon: string;
  link: string;
}

export interface Skills {
  icon: string;
  label: string;
  type?: string;
  level: number;
}

type Company = {
  name: string;
  overview: string;
  address: string;
};

export interface Experience {
  company: Company;
  title: string;
  date: string;
  tasks: string[];
  borderClassName: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}
