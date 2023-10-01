// Дату и время вывести в формате- час, минута, день, месяц словом, год.

export class IssueRow {
    date: string;
    header: string;
    text: string;
    linkUrl: string;

    static dateOptions:any = {hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'long', year: 'numeric'};

    constructor(date: string, header: string, text: string, linkUrl: string) {
        this.date = date;
        this.header = header;
        this.text = text;
        this.linkUrl = linkUrl;
    }
}

