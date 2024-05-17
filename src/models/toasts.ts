import { computedFrom } from 'aurelia-binding';

export class Toasts {
  private static nextId = 1;

  ToastId: string;
  Message: string;
  Type: string;
  Delay = 5000;

  constructor(src: Partial<Toasts>) {
    this.ToastId = `${src.Type}-notification-${Toasts.nextId}`;
    Toasts.nextId++;

    this.Message = src.Message;
    this.Type = src.Type;
    this.Delay = src.Delay !== undefined ? src.Delay : 5000;
  }

  @computedFrom('Type')
  get CustomClass(): string {
    if (this.Type === 'success') {
      return 'bg-success force-colour-white';
    }
    if (this.Type === 'error') {
      return 'bg-danger force-colour-white';
    }
    if (this.Type === 'warning') {
      return 'bg-warning force-colour-white';
    }
    if (this.Type === 'info') {
      return 'bg-info force-colour-white';
    }
  }
  @computedFrom('Type')
  get CustomIcon(): string {
    if (this.Type === 'success') {
      return 'fa fa-check force-colour-white';
    }
    if (this.Type === 'warning') {
      return 'fa fa-exclamation-triangle force-colour-white';
    }
    if (this.Type === 'error') {
      return 'fa fa-exclamation force-colour-white';
    }
    if (this.Type === 'info') {
      return 'fa fa-info force-colour-white';
    }
  }
}
