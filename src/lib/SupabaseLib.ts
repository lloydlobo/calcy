import { createClient } from '@supabase/supabase-js';
import { variables } from '$lib/variables/';

// const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseUrl = variables.basePath;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey); // get the env variable from vite setup

// cspell:ignore supabase
