import { Schema } from "mongoose";

export const myCustomPlugin = (schema: Schema, options) => {
  schema.add({
    lastVisited: { type: Date },
  });

  schema.post(["find", "findOne"], async function (docs) {
    if (!Array.isArray(docs)) {
      docs = [docs];
    }
    for (const doc of docs) {
      const now = new Date();
      if (doc) {
        await this.updateOne(
          { _id: doc._id },
          {
            lastVisited: now,
          }
        ).clone();
        doc.lastVisited = now;
      }
    }
  });
};
