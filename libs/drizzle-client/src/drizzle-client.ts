import { drizzle } from "drizzle-orm/neon-http";
import { NeonQueryFunction } from "@neondatabase/serverless";
import { NeonHttpDatabase } from "drizzle-orm/neon-http";

export class DrizzleDb {
  private url: string;
  public db: NeonHttpDatabase<Record<string, never>> & {
    $client: NeonQueryFunction<any, any>;
  };

  constructor(url: string = process.env.DATABASE_URL!) {
    this.url = url;
    this.db = drizzle(this.url);
  }
}
