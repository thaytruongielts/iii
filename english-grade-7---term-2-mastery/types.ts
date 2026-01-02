
export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  TEXT_INPUT = 'TEXT_INPUT'
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  category: string;
  subcategory: string;
  text: string;
  options?: Option[];
  correctAnswer: string;
}

export interface UserAnswers {
  [key: number]: string;
}
