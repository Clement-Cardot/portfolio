export class Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    status: string;
    created_at: Date;
    updated_at: Date;

    constructor(id: number, title: string, description: string, images:string[], status: string, created_at: Date, updated_at: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.images = images;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
