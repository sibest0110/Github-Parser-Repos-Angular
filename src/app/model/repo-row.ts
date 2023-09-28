// Дату и время вывести в формате- день, месяц, год, часы, минуты.

export class RepoRow {
    name: string;
    language: string;
    dateOfLastPush: string;
    isArch: string;
    linkUrl: string;

    static dateOptions:any = {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'};

    constructor(name: string, language: string, dateOfLastPush: string, isArch: string, linkUrl: string) {
        this.name = name;
        this.language = language;
        this.dateOfLastPush = dateOfLastPush;
        this.isArch = isArch;
        this.linkUrl = linkUrl;
    }
}