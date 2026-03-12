import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function ConnectToDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    if (!MONGO_URI) {
      console.error("❌ MONGO_URI is not defined");
      return;
    }

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongooseInstance) => {
      console.log("✅ MongoDB connected (singleton)");
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("❌ MongoDB connection failed", e);
    throw e;
  }

  return cached.conn;
}