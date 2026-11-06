// ============================================================
//  KOSSOMI CYBERGUARD - SETTINGS (edit this file only)
// ============================================================

// 1) SUPABASE (login, database, file uploads, emails) - see docs/SETUP-GUIDE.md
//    Supabase > Project Settings > API. Use the "anon public" key only. NEVER the service_role key.
var SUPABASE_URL = '';       // example: 'https://abcdxyz.supabase.co'
var SUPABASE_ANON_KEY = '';  // example: 'eyJhbGciOi...'

// 2) YOUR EMAIL (the free-demo and payment-proof forms open an email to this address)
var EMAIL = 'YOUR-EMAIL@example.com';

// 3) PAYMENT DETAILS shown on the website
var PAY={cur:'XAF',
  mm:[],   /* example: [{op:'Airtel Money',name:'Account holder name',num:'+235 66 00 00 00'}] */
  bank:{name:'',acc:'',num:'',iban:''},   /* bank name, account name, account number, IBAN/RIB */
  cash:'',   /* example: 'Pay at our office in N’Djamena, Mon–Fri 9:00–17:00' */
  prices:[]  /* example: [50000,0,150000,100000,0,0] one fee per course, in the same order as the courses */
};
