// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qtfbhurxmtlncvqbadlf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0ZmJodXJ4bXRsbmN2cWJhZGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMjg2NzUsImV4cCI6MjA1NzkwNDY3NX0.6euFF78C2CofXmxehNMerpBs2qzUXvc6wPKX0fMbDYo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);