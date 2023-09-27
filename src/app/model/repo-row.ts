export class RepoRow {
    name: string;
    language: string;
    dateOfLastPush: Date;
    isArch: boolean;
    linkUrl: string;

    constructor(name: string, language: string, dateOfLastPush: Date, isArch: boolean, linkUrl: string) {
        this.name = name;
        this.language = language;
        this.dateOfLastPush = dateOfLastPush;
        this.isArch = isArch;
        this.linkUrl = linkUrl;
    }
}