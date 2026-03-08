interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string
  readonly PUBLIC_SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface User {
  uid: string;
  email?: string;
}

declare namespace App {
  interface Locals {
    user: import("firebase-admin/auth").UserRecord | null;
  }
}