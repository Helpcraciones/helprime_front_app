import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VUE_APP_URL_API
const supabaseAnonKey = process.env.VUE_APP_APIKEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)