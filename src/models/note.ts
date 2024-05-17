import { UserAccount } from "@twizzadev/twizza-common-webui";
import moment from "moment";

export class Note {
  Id: number;
  Value: string;
  EffectiveTime: moment.Moment;
  AuthorUserId: number;
  AuthorDomainRole: string;
  EntityType: string;
  EntityId: string;
  PredefinedNoteId: number;
  IsDeleted: boolean;

  AuthorUser: UserAccount;

  constructor();
  constructor(src: Note);
  constructor(src?: Note) {
    if (src) {
      this.Id = src.Id;
      this.Value = src.Value;
      this.EffectiveTime = src.EffectiveTime;
      this.AuthorUserId = src.AuthorUserId;
      this.AuthorDomainRole = src.AuthorDomainRole;
      this.EntityType = src.EntityType;
      this.EntityId = src.EntityId;
      this.PredefinedNoteId = src.PredefinedNoteId;
      this.IsDeleted = src.IsDeleted;

      if (src.AuthorUser) {
        this.AuthorUser = new UserAccount(src.AuthorUser);
      }
    }
  }
}
