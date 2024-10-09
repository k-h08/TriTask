export interface task {
    id: string;
    title: string;
    category: Category;
    day : Date;
    completed: boolean;
}

export type Category = '午前' | '午後' | 'スキマ';
