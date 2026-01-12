export interface Commit {
  message: string;
  date: string;
  url?: string;
}

export interface ProblemSolution {
  title: string;
  situation: string;
  solution: string;
  result: string;
}

export interface Project {
  name: string;
  repository: string;
  description: string;
  role: string;
  period: string;
  techStack: string[];
  contributions: string[];
  commits?: Commit[];
  problemSolutions?: ProblemSolution[];
}
