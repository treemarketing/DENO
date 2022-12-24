import { serve } from "https://deno.land/std@0.167.0/http/mod.ts";


serve((_req) => new Response("Hello, world"));