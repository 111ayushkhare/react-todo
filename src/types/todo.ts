export interface Todo {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  isStarred: boolean;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
