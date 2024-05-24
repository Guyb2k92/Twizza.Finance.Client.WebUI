export class Home {
    keywords: string;

    currentDate = new Date();
    time;
    date;

    constructor() {
        this.updateTime(); // Update time initially
        setInterval(() => this.updateTime(), 60000);
    }
    updateTime() {
        this.currentDate = new Date(); // Refresh the current date
        this.time = this.currentDate.getHours() + ':' + this.currentDate.getMinutes();

        this.date =
            this.currentDate.getDate() +
            '/' +
            (this.currentDate.getMonth() + 1) + // Months are zero-indexed, so add 1
            '/' +
            this.currentDate.getFullYear();
    }
}
