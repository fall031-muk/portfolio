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

export interface ContributionItem {
  title: string;
  details: string[];
}

export interface ContributionGroup {
  title: string;
  items: ContributionItem[];
}

export interface Project {
  name: string;
  repository: string;
  description: string;
  role: string;
  period: string;
  techStack: string[];
  contributions: string[];
  contributionGroups?: ContributionGroup[];
  commits?: Commit[];
  problemSolutions?: ProblemSolution[];
}
