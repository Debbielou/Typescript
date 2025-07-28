type MultipleChoice = {
  kind: 'multiple-choice'; //discriminant property
  question: string;
  studentAnswer: string;
  correctAnswer: string;
};

type CodingLesson = {
  kind: 'coding'; //discriminant property
  studentCode: string;
  solutionCode: string;
};

type Lesson = MultipleChoice | CodingLesson; //discriminated union

export function isCorrect(lesson: Lesson): boolean {
  switch(lesson.kind){
    case 'multiple-choice':
        return lesson.studentAnswer === lesson.correctAnswer;
    case 'coding':
        return lesson.studentCode === lesson.solutionCode;
  }
  
}