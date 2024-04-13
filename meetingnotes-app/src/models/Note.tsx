export interface ActionItem {
  text: string;
  completed: boolean;
}

export interface Note {
  _id: string,
  title: string;
  content: string;
  actionItems: ActionItem[];
  createdAt: Date;
  updatedAt?: Date;
}
