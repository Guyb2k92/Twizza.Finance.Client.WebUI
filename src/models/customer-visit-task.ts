﻿import { VisitTask } from './visit-task';
import moment from 'moment';

export class CustomerVisitTask {
  Id: number;
  CustomerVisitId: number;
  VisitTaskId: number;
  VisitTaskTime: moment.Moment;

  VisitTask: VisitTask;

  constructor();
  constructor(src: CustomerVisitTask);
  constructor(src?: CustomerVisitTask) {
    if (src) {
      this.Id = src.Id;
      this.CustomerVisitId = src.CustomerVisitId;
      this.VisitTaskId = src.VisitTaskId;
      this.VisitTaskTime = src.VisitTaskTime;

      if (src.VisitTask) {
        this.VisitTask = new VisitTask(src.VisitTask);
      }
    }
  }
}
