import mongoose, { Schema } from "mongoose";

export const myCustomPlugin = (schema: Schema) => {
  // schema.add({
  //   lastVisited: { type: mongoose.Types.Subdocument },
  // });

  schema.add({
    backup: { type: Object },
    backupA: { type: Object },
  });

  // schema.post(["find", "findOne"], async function (docs) {
  // if (!Array.isArray(docs)) {
  //   docs = [docs];
  // }
  // for (const doc of docs) {
  //   const now = new Date();
  //   if (doc) {
  //     await this.updateOne(
  //       { _id: doc._id },
  //       {
  //         lastVisited: now,
  //       }
  //     ).clone();
  //     doc.lastVisited = now;
  //   }
  // }
  // });

  schema.pre("updateOne", async function (next) {
    const a = await this.findOne((this as any)._conditions).clone();
    // if (a) {
    //   await this.findOneAndUpdate({_id: a._id,}, { backup: a }).clone();
    // }
    (this as any)._update.backupA = a;
    console.log(this);
    next();
  });
};
