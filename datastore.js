import { createClient } from '@supabase/supabase-js';
import { SUPABASE_SERVICE_KEY, SUPABASE_URL } from './config.js';

export const client = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
