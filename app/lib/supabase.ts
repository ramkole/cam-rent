
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.SUPBASE_URL as string, process.env.SUPABASE_ANON_KEY as string)