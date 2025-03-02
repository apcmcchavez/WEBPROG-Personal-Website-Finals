import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fylozuroogwzgyggvvlo.supabase.co'  // Replace with your actual Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5bG96dXJvb2d3emd5Z2d2dmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMjcwMzUsImV4cCI6MjA1MzYwMzAzNX0.jKDjOiTAfGTaFgu-JHatUg1kzUbO4yaybupGI4JkW7c'  // Replace with your actual Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
