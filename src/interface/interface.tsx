export interface ILevel {
  title: string;
}

export interface ILevels {
  level_1: ILessons;
  level_2: Array<ILesson>;
  level_3: Array<ILessons>;
  level_4: Array<ILesson>;
}

export interface ILessons {
  parent: string;
  title: string;
  lessons: ILesson[];
}

export interface ILesson {
  chapter: number;
  definedId: string;
  description: string;
  errors: number;
  extended_metadata: [];
  icon: string;
  id: number;
  name: string;
  score: number;
  tags: string;
  time: number;
  type: string;
  isUnlocked: boolean | null;
  parent?: number;
}

export interface IChapter {
  description: string;
  id: number;
  parent: any | null;
  title: string;
}

export interface IDatas {
  chapters: Array<IChapter>;
  id: number;
  lessons: Array<ILesson>;
  mAuthorId: number;
  userId: number;
  userName: string;
  isAdaptive: boolean;
}

export interface ICollection {
  data: IDatas;
  type: string;
}

export interface ICollectionExternalResources {
  type: string;
  data: {
    courseId: number;
    externalResources:
      | {
          course: number;
          course_external_id: string;
          cover: string;
          external_id: string;
          label: string;
          url: string;
        }[]
      | [];
  };
}

export interface ICollectionCustomTOCFirstVisitDate {
  type: string;
  data: {
    id: number;
    collectionCustomTOCFirstVisitDate: string;
  };
}

export interface ILessonPaginatedResultsData {
  lessonID: number;
  lessonPaginatedResults: [];
}

export interface ICollectionLessonsPaginatedResultsData {
  type: string;
  data: {
    id: number;
    lessonsPaginatedResults: ILessonPaginatedResultsData[];
  };
}

export interface IBadge {
  title: string;
  urlLink: string;
  time: string;
}

export interface ILevel {
  title: string;
  level: string;
  subject: string;
  data: Array<string>;
  isCompletion: boolean;
  dataTitle: Array<string>;
}
