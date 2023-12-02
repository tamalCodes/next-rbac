import { Schema, models, model } from "mongoose";

const PermissionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: String,
    },
  ],
});

export default models.Permission ?? model("Permission", PermissionSchema);
