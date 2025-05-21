export default class Project {
  constructor({ id, title, description, date, tasks }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.tasks = tasks;
  }
}
