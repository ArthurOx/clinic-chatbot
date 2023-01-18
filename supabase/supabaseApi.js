import axios from 'axios';
import { createClient } from '@supabase/supabase-js'
import { SUPABASE_SERVICE_KEY, SUPABASE_URL } from "../config";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

const getData = async (language) => {
    let { data, error } = await supabase
        .from('translations')
        .select('content')
        .eq('language', language)
    return data
};

export default getData;