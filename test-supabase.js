const { createClient } = require('@supabase/supabase-js');

const url = 'https://sjbphadcydmvbywkymzt.supabase.co';
const key = 'sb_publishable_3zu7eUvAK2May_YYt1pa_g_01gtfp5G';

const supabase = createClient(url, key);

async function test() {
    try {
        console.log('Testing connection...');
        const { data, error } = await supabase.from('cx_users').select('*').limit(1);
        if (error) {
            console.error('Supabase query error:', error);
        } else {
            console.log('Supabase connection success! Data:', data);
        }
    } catch (e) {
        console.error('Exception caught:', e);
    }
}

test();
