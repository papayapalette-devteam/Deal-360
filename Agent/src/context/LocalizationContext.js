import { createContext, useContext, useState, useEffect } from 'react';



export const countries = [
  // Asia
  {
    code: 'IN',
    name: 'India',
    regions: [
      { code: 'DL', name: 'Delhi' },
      { code: 'MH', name: 'Maharashtra' },
      { code: 'KA', name: 'Karnataka' },
      { code: 'TN', name: 'Tamil Nadu' },
      { code: 'UP', name: 'Uttar Pradesh' },
      { code: 'WB', name: 'West Bengal' },
      { code: 'GJ', name: 'Gujarat' },
      { code: 'RJ', name: 'Rajasthan' },
      { code: 'KL', name: 'Kerala' },
      { code: 'AP', name: 'Andhra Pradesh' },
      { code: 'TS', name: 'Telangana' },
      { code: 'MP', name: 'Madhya Pradesh' },
      { code: 'PB', name: 'Punjab' },
      { code: 'HR', name: 'Haryana' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
      { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
    ],
    currency: { code: 'INR', symbol: '₹', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Kolkata',
  },
  {
    code: 'CN',
    name: 'China',
    regions: [
      { code: 'BJ', name: 'Beijing' },
      { code: 'SH', name: 'Shanghai' },
      { code: 'GD', name: 'Guangdong' },
      { code: 'ZJ', name: 'Zhejiang' },
      { code: 'JS', name: 'Jiangsu' },
      { code: 'SC', name: 'Sichuan' },
    ],
    languages: [
      { code: 'zh', name: 'Chinese', native: '中文' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'CNY', symbol: '¥', position: 'before' },
    dateFormat: 'YYYY-MM-DD',
    defaultTimezone: 'Asia/Shanghai',
  },
  {
    code: 'JP',
    name: 'Japan',
    regions: [
      { code: 'TK', name: 'Tokyo' },
      { code: 'OS', name: 'Osaka' },
      { code: 'KY', name: 'Kyoto' },
      { code: 'HK', name: 'Hokkaido' },
      { code: 'FK', name: 'Fukuoka' },
    ],
    languages: [
      { code: 'ja', name: 'Japanese', native: '日本語' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'JPY', symbol: '¥', position: 'before' },
    dateFormat: 'YYYY/MM/DD',
    defaultTimezone: 'Asia/Tokyo',
  },
  {
    code: 'KR',
    name: 'South Korea',
    regions: [
      { code: 'SE', name: 'Seoul' },
      { code: 'BS', name: 'Busan' },
      { code: 'IC', name: 'Incheon' },
      { code: 'DG', name: 'Daegu' },
    ],
    languages: [
      { code: 'ko', name: 'Korean', native: '한국어' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'KRW', symbol: '₩', position: 'before' },
    dateFormat: 'YYYY-MM-DD',
    defaultTimezone: 'Asia/Seoul',
  },
  {
    code: 'SG',
    name: 'Singapore',
    regions: [
      { code: 'SG', name: 'Singapore' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
      { code: 'zh', name: 'Chinese', native: '中文' },
      { code: 'ms', name: 'Malay', native: 'Bahasa Melayu' },
    ],
    currency: { code: 'SGD', symbol: 'S$', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Singapore',
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    regions: [
      { code: 'DXB', name: 'Dubai' },
      { code: 'AUH', name: 'Abu Dhabi' },
      { code: 'SHJ', name: 'Sharjah' },
      { code: 'AJM', name: 'Ajman' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
      { code: 'ar', name: 'Arabic', native: 'العربية' },
    ],
    currency: { code: 'AED', symbol: 'د.إ', position: 'after' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Dubai',
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    regions: [
      { code: 'RUH', name: 'Riyadh' },
      { code: 'JED', name: 'Jeddah' },
      { code: 'MKH', name: 'Makkah' },
      { code: 'DMM', name: 'Dammam' },
    ],
    languages: [
      { code: 'ar', name: 'Arabic', native: 'العربية' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'SAR', symbol: 'ر.س', position: 'after' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Riyadh',
  },
  {
    code: 'ID',
    name: 'Indonesia',
    regions: [
      { code: 'JK', name: 'Jakarta' },
      { code: 'BA', name: 'Bali' },
      { code: 'JT', name: 'Central Java' },
      { code: 'JB', name: 'West Java' },
    ],
    languages: [
      { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'IDR', symbol: 'Rp', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Jakarta',
  },
  {
    code: 'MY',
    name: 'Malaysia',
    regions: [
      { code: 'KL', name: 'Kuala Lumpur' },
      { code: 'SL', name: 'Selangor' },
      { code: 'JH', name: 'Johor' },
      { code: 'PN', name: 'Penang' },
    ],
    languages: [
      { code: 'ms', name: 'Malay', native: 'Bahasa Melayu' },
      { code: 'en', name: 'English', native: 'English' },
      { code: 'zh', name: 'Chinese', native: '中文' },
    ],
    currency: { code: 'MYR', symbol: 'RM', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Kuala_Lumpur',
  },
  {
    code: 'TH',
    name: 'Thailand',
    regions: [
      { code: 'BKK', name: 'Bangkok' },
      { code: 'CNX', name: 'Chiang Mai' },
      { code: 'PKT', name: 'Phuket' },
    ],
    languages: [
      { code: 'th', name: 'Thai', native: 'ไทย' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'THB', symbol: '฿', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Bangkok',
  },
  {
    code: 'PH',
    name: 'Philippines',
    regions: [
      { code: 'NCR', name: 'Metro Manila' },
      { code: 'CEB', name: 'Cebu' },
      { code: 'DVO', name: 'Davao' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
      { code: 'tl', name: 'Filipino', native: 'Filipino' },
    ],
    currency: { code: 'PHP', symbol: '₱', position: 'before' },
    dateFormat: 'MM/DD/YYYY',
    defaultTimezone: 'Asia/Manila',
  },
  {
    code: 'VN',
    name: 'Vietnam',
    regions: [
      { code: 'HN', name: 'Hanoi' },
      { code: 'SG', name: 'Ho Chi Minh City' },
      { code: 'DN', name: 'Da Nang' },
    ],
    languages: [
      { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'VND', symbol: '₫', position: 'after' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Ho_Chi_Minh',
  },
  {
    code: 'PK',
    name: 'Pakistan',
    regions: [
      { code: 'PB', name: 'Punjab' },
      { code: 'SD', name: 'Sindh' },
      { code: 'KP', name: 'Khyber Pakhtunkhwa' },
      { code: 'BL', name: 'Balochistan' },
    ],
    languages: [
      { code: 'ur', name: 'Urdu', native: 'اردو' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'PKR', symbol: '₨', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Karachi',
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    regions: [
      { code: 'DH', name: 'Dhaka' },
      { code: 'CG', name: 'Chittagong' },
      { code: 'KH', name: 'Khulna' },
    ],
    languages: [
      { code: 'bn', name: 'Bengali', native: 'বাংলা' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'BDT', symbol: '৳', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Dhaka',
  },
  // North America
  {
    code: 'US',
    name: 'United States',
    regions: [
      { code: 'CA', name: 'California' },
      { code: 'TX', name: 'Texas' },
      { code: 'NY', name: 'New York' },
      { code: 'FL', name: 'Florida' },
      { code: 'IL', name: 'Illinois' },
      { code: 'WA', name: 'Washington' },
      { code: 'PA', name: 'Pennsylvania' },
      { code: 'OH', name: 'Ohio' },
      { code: 'GA', name: 'Georgia' },
      { code: 'NC', name: 'North Carolina' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
      { code: 'es', name: 'Spanish', native: 'Español' },
    ],
    currency: { code: 'USD', symbol: '$', position: 'before' },
    dateFormat: 'MM/DD/YYYY',
    defaultTimezone: 'America/New_York',
  },
  {
    code: 'CA',
    name: 'Canada',
    regions: [
      { code: 'ON', name: 'Ontario' },
      { code: 'QC', name: 'Quebec' },
      { code: 'BC', name: 'British Columbia' },
      { code: 'AB', name: 'Alberta' },
      { code: 'MB', name: 'Manitoba' },
      { code: 'SK', name: 'Saskatchewan' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
      { code: 'fr', name: 'French', native: 'Français' },
    ],
    currency: { code: 'CAD', symbol: 'C$', position: 'before' },
    dateFormat: 'YYYY-MM-DD',
    defaultTimezone: 'America/Toronto',
  },
  {
    code: 'MX',
    name: 'Mexico',
    regions: [
      { code: 'CMX', name: 'Mexico City' },
      { code: 'JAL', name: 'Jalisco' },
      { code: 'NLE', name: 'Nuevo León' },
      { code: 'YUC', name: 'Yucatán' },
    ],
    languages: [
      { code: 'es', name: 'Spanish', native: 'Español' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'MXN', symbol: '$', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'America/Mexico_City',
  },
  // South America
  {
    code: 'BR',
    name: 'Brazil',
    regions: [
      { code: 'SP', name: 'São Paulo' },
      { code: 'RJ', name: 'Rio de Janeiro' },
      { code: 'MG', name: 'Minas Gerais' },
      { code: 'BA', name: 'Bahia' },
      { code: 'RS', name: 'Rio Grande do Sul' },
    ],
    languages: [
      { code: 'pt', name: 'Portuguese', native: 'Português' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'BRL', symbol: 'R$', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'America/Sao_Paulo',
  },
  {
    code: 'AR',
    name: 'Argentina',
    regions: [
      { code: 'BA', name: 'Buenos Aires' },
      { code: 'CB', name: 'Córdoba' },
      { code: 'SF', name: 'Santa Fe' },
      { code: 'MD', name: 'Mendoza' },
    ],
    languages: [
      { code: 'es', name: 'Spanish', native: 'Español' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'ARS', symbol: '$', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'America/Argentina/Buenos_Aires',
  },
  {
    code: 'CO',
    name: 'Colombia',
    regions: [
      { code: 'DC', name: 'Bogotá' },
      { code: 'ANT', name: 'Antioquia' },
      { code: 'VAC', name: 'Valle del Cauca' },
    ],
    languages: [
      { code: 'es', name: 'Spanish', native: 'Español' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'COP', symbol: '$', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'America/Bogota',
  },
  {
    code: 'CL',
    name: 'Chile',
    regions: [
      { code: 'RM', name: 'Santiago Metropolitan' },
      { code: 'VS', name: 'Valparaíso' },
      { code: 'BI', name: 'Biobío' },
    ],
    languages: [
      { code: 'es', name: 'Spanish', native: 'Español' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'CLP', symbol: '$', position: 'before' },
    dateFormat: 'DD-MM-YYYY',
    defaultTimezone: 'America/Santiago',
  },
  // Europe
  {
    code: 'GB',
    name: 'United Kingdom',
    regions: [
      { code: 'ENG', name: 'England' },
      { code: 'SCT', name: 'Scotland' },
      { code: 'WLS', name: 'Wales' },
      { code: 'NIR', name: 'Northern Ireland' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'GBP', symbol: '£', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Europe/London',
  },
  {
    code: 'DE',
    name: 'Germany',
    regions: [
      { code: 'BY', name: 'Bavaria' },
      { code: 'NW', name: 'North Rhine-Westphalia' },
      { code: 'BW', name: 'Baden-Württemberg' },
      { code: 'NI', name: 'Lower Saxony' },
      { code: 'HE', name: 'Hesse' },
      { code: 'BE', name: 'Berlin' },
    ],
    languages: [
      { code: 'de', name: 'German', native: 'Deutsch' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'EUR', symbol: '€', position: 'before' },
    dateFormat: 'DD.MM.YYYY',
    defaultTimezone: 'Europe/Berlin',
  },
  {
    code: 'FR',
    name: 'France',
    regions: [
      { code: 'IDF', name: 'Île-de-France' },
      { code: 'ARA', name: 'Auvergne-Rhône-Alpes' },
      { code: 'NAQ', name: 'Nouvelle-Aquitaine' },
      { code: 'OCC', name: 'Occitanie' },
      { code: 'PAC', name: 'Provence-Alpes-Côte d\'Azur' },
    ],
    languages: [
      { code: 'fr', name: 'French', native: 'Français' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'EUR', symbol: '€', position: 'after' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Europe/Paris',
  },
  {
    code: 'IT',
    name: 'Italy',
    regions: [
      { code: 'LOM', name: 'Lombardy' },
      { code: 'LAZ', name: 'Lazio' },
      { code: 'CAM', name: 'Campania' },
      { code: 'VEN', name: 'Veneto' },
      { code: 'TOS', name: 'Tuscany' },
    ],
    languages: [
      { code: 'it', name: 'Italian', native: 'Italiano' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'EUR', symbol: '€', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Europe/Rome',
  },
  {
    code: 'ES',
    name: 'Spain',
    regions: [
      { code: 'MD', name: 'Madrid' },
      { code: 'CT', name: 'Catalonia' },
      { code: 'AN', name: 'Andalusia' },
      { code: 'VC', name: 'Valencia' },
      { code: 'PV', name: 'Basque Country' },
    ],
    languages: [
      { code: 'es', name: 'Spanish', native: 'Español' },
      { code: 'en', name: 'English', native: 'English' },
      { code: 'ca', name: 'Catalan', native: 'Català' },
    ],
    currency: { code: 'EUR', symbol: '€', position: 'after' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Europe/Madrid',
  },
  {
    code: 'NL',
    name: 'Netherlands',
    regions: [
      { code: 'NH', name: 'North Holland' },
      { code: 'ZH', name: 'South Holland' },
      { code: 'NB', name: 'North Brabant' },
      { code: 'UT', name: 'Utrecht' },
    ],
    languages: [
      { code: 'nl', name: 'Dutch', native: 'Nederlands' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'EUR', symbol: '€', position: 'before' },
    dateFormat: 'DD-MM-YYYY',
    defaultTimezone: 'Europe/Amsterdam',
  },
  {
    code: 'PL',
    name: 'Poland',
    regions: [
      { code: 'MZ', name: 'Masovian' },
      { code: 'SL', name: 'Silesian' },
      { code: 'WP', name: 'Greater Poland' },
      { code: 'MP', name: 'Lesser Poland' },
    ],
    languages: [
      { code: 'pl', name: 'Polish', native: 'Polski' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'PLN', symbol: 'zł', position: 'after' },
    dateFormat: 'DD.MM.YYYY',
    defaultTimezone: 'Europe/Warsaw',
  },
  {
    code: 'SE',
    name: 'Sweden',
    regions: [
      { code: 'AB', name: 'Stockholm' },
      { code: 'VG', name: 'Västra Götaland' },
      { code: 'M', name: 'Skåne' },
    ],
    languages: [
      { code: 'sv', name: 'Swedish', native: 'Svenska' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'SEK', symbol: 'kr', position: 'after' },
    dateFormat: 'YYYY-MM-DD',
    defaultTimezone: 'Europe/Stockholm',
  },
  {
    code: 'CH',
    name: 'Switzerland',
    regions: [
      { code: 'ZH', name: 'Zürich' },
      { code: 'BE', name: 'Bern' },
      { code: 'GE', name: 'Geneva' },
      { code: 'VD', name: 'Vaud' },
    ],
    languages: [
      { code: 'de', name: 'German', native: 'Deutsch' },
      { code: 'fr', name: 'French', native: 'Français' },
      { code: 'it', name: 'Italian', native: 'Italiano' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'CHF', symbol: 'CHF', position: 'before' },
    dateFormat: 'DD.MM.YYYY',
    defaultTimezone: 'Europe/Zurich',
  },
  {
    code: 'AT',
    name: 'Austria',
    regions: [
      { code: 'W', name: 'Vienna' },
      { code: 'OO', name: 'Upper Austria' },
      { code: 'ST', name: 'Styria' },
      { code: 'T', name: 'Tyrol' },
    ],
    languages: [
      { code: 'de', name: 'German', native: 'Deutsch' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'EUR', symbol: '€', position: 'before' },
    dateFormat: 'DD.MM.YYYY',
    defaultTimezone: 'Europe/Vienna',
  },
  {
    code: 'BE',
    name: 'Belgium',
    regions: [
      { code: 'VLG', name: 'Flanders' },
      { code: 'WAL', name: 'Wallonia' },
      { code: 'BRU', name: 'Brussels' },
    ],
    languages: [
      { code: 'nl', name: 'Dutch', native: 'Nederlands' },
      { code: 'fr', name: 'French', native: 'Français' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'EUR', symbol: '€', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Europe/Brussels',
  },
  {
    code: 'PT',
    name: 'Portugal',
    regions: [
      { code: 'LIS', name: 'Lisbon' },
      { code: 'POR', name: 'Porto' },
      { code: 'FAR', name: 'Faro' },
    ],
    languages: [
      { code: 'pt', name: 'Portuguese', native: 'Português' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'EUR', symbol: '€', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Europe/Lisbon',
  },
  {
    code: 'IE',
    name: 'Ireland',
    regions: [
      { code: 'D', name: 'Dublin' },
      { code: 'C', name: 'Cork' },
      { code: 'G', name: 'Galway' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
      { code: 'ga', name: 'Irish', native: 'Gaeilge' },
    ],
    currency: { code: 'EUR', symbol: '€', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Europe/Dublin',
  },
  {
    code: 'NO',
    name: 'Norway',
    regions: [
      { code: 'OS', name: 'Oslo' },
      { code: 'VE', name: 'Vestland' },
      { code: 'TR', name: 'Trøndelag' },
    ],
    languages: [
      { code: 'no', name: 'Norwegian', native: 'Norsk' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'NOK', symbol: 'kr', position: 'after' },
    dateFormat: 'DD.MM.YYYY',
    defaultTimezone: 'Europe/Oslo',
  },
  {
    code: 'DK',
    name: 'Denmark',
    regions: [
      { code: 'CPH', name: 'Capital Region' },
      { code: 'SD', name: 'Region of Southern Denmark' },
      { code: 'MJ', name: 'Central Jutland' },
    ],
    languages: [
      { code: 'da', name: 'Danish', native: 'Dansk' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'DKK', symbol: 'kr', position: 'after' },
    dateFormat: 'DD-MM-YYYY',
    defaultTimezone: 'Europe/Copenhagen',
  },
  {
    code: 'FI',
    name: 'Finland',
    regions: [
      { code: 'UU', name: 'Uusimaa' },
      { code: 'VS', name: 'Southwest Finland' },
      { code: 'PI', name: 'Pirkanmaa' },
    ],
    languages: [
      { code: 'fi', name: 'Finnish', native: 'Suomi' },
      { code: 'sv', name: 'Swedish', native: 'Svenska' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'EUR', symbol: '€', position: 'after' },
    dateFormat: 'DD.MM.YYYY',
    defaultTimezone: 'Europe/Helsinki',
  },
  {
    code: 'RU',
    name: 'Russia',
    regions: [
      { code: 'MOW', name: 'Moscow' },
      { code: 'SPE', name: 'Saint Petersburg' },
      { code: 'KDA', name: 'Krasnodar' },
      { code: 'SVE', name: 'Sverdlovsk' },
    ],
    languages: [
      { code: 'ru', name: 'Russian', native: 'Русский' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'RUB', symbol: '₽', position: 'after' },
    dateFormat: 'DD.MM.YYYY',
    defaultTimezone: 'Europe/Moscow',
  },
  {
    code: 'TR',
    name: 'Turkey',
    regions: [
      { code: 'IST', name: 'Istanbul' },
      { code: 'ANK', name: 'Ankara' },
      { code: 'IZM', name: 'Izmir' },
      { code: 'ANT', name: 'Antalya' },
    ],
    languages: [
      { code: 'tr', name: 'Turkish', native: 'Türkçe' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'TRY', symbol: '₺', position: 'before' },
    dateFormat: 'DD.MM.YYYY',
    defaultTimezone: 'Europe/Istanbul',
  },
  {
    code: 'GR',
    name: 'Greece',
    regions: [
      { code: 'ATT', name: 'Attica' },
      { code: 'CM', name: 'Central Macedonia' },
      { code: 'CR', name: 'Crete' },
    ],
    languages: [
      { code: 'el', name: 'Greek', native: 'Ελληνικά' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'EUR', symbol: '€', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Europe/Athens',
  },
  // Oceania
  {
    code: 'AU',
    name: 'Australia',
    regions: [
      { code: 'NSW', name: 'New South Wales' },
      { code: 'VIC', name: 'Victoria' },
      { code: 'QLD', name: 'Queensland' },
      { code: 'WA', name: 'Western Australia' },
      { code: 'SA', name: 'South Australia' },
      { code: 'TAS', name: 'Tasmania' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'AUD', symbol: 'A$', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Australia/Sydney',
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    regions: [
      { code: 'AUK', name: 'Auckland' },
      { code: 'WGN', name: 'Wellington' },
      { code: 'CAN', name: 'Canterbury' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
      { code: 'mi', name: 'Māori', native: 'Te Reo Māori' },
    ],
    currency: { code: 'NZD', symbol: 'NZ$', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Pacific/Auckland',
  },
  // Africa
  {
    code: 'ZA',
    name: 'South Africa',
    regions: [
      { code: 'GP', name: 'Gauteng' },
      { code: 'WC', name: 'Western Cape' },
      { code: 'KZN', name: 'KwaZulu-Natal' },
      { code: 'EC', name: 'Eastern Cape' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
      { code: 'af', name: 'Afrikaans', native: 'Afrikaans' },
      { code: 'zu', name: 'Zulu', native: 'isiZulu' },
    ],
    currency: { code: 'ZAR', symbol: 'R', position: 'before' },
    dateFormat: 'YYYY/MM/DD',
    defaultTimezone: 'Africa/Johannesburg',
  },
  {
    code: 'NG',
    name: 'Nigeria',
    regions: [
      { code: 'LA', name: 'Lagos' },
      { code: 'KN', name: 'Kano' },
      { code: 'RI', name: 'Rivers' },
      { code: 'AB', name: 'Abuja FCT' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'NGN', symbol: '₦', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Africa/Lagos',
  },
  {
    code: 'EG',
    name: 'Egypt',
    regions: [
      { code: 'C', name: 'Cairo' },
      { code: 'ALX', name: 'Alexandria' },
      { code: 'GZ', name: 'Giza' },
    ],
    languages: [
      { code: 'ar', name: 'Arabic', native: 'العربية' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'EGP', symbol: 'E£', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Africa/Cairo',
  },
  {
    code: 'KE',
    name: 'Kenya',
    regions: [
      { code: 'NB', name: 'Nairobi' },
      { code: 'CS', name: 'Coast' },
      { code: 'CE', name: 'Central' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
      { code: 'sw', name: 'Swahili', native: 'Kiswahili' },
    ],
    currency: { code: 'KES', symbol: 'KSh', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Africa/Nairobi',
  },
  {
    code: 'MA',
    name: 'Morocco',
    regions: [
      { code: 'CS', name: 'Casablanca-Settat' },
      { code: 'RB', name: 'Rabat-Salé-Kénitra' },
      { code: 'MA', name: 'Marrakech-Safi' },
    ],
    languages: [
      { code: 'ar', name: 'Arabic', native: 'العربية' },
      { code: 'fr', name: 'French', native: 'Français' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'MAD', symbol: 'د.م.', position: 'after' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Africa/Casablanca',
  },
  {
    code: 'GH',
    name: 'Ghana',
    regions: [
      { code: 'AA', name: 'Greater Accra' },
      { code: 'AH', name: 'Ashanti' },
      { code: 'WP', name: 'Western' },
    ],
    languages: [
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'GHS', symbol: '₵', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Africa/Accra',
  },
  // Middle East
  {
    code: 'IL',
    name: 'Israel',
    regions: [
      { code: 'TA', name: 'Tel Aviv' },
      { code: 'JM', name: 'Jerusalem' },
      { code: 'HA', name: 'Haifa' },
    ],
    languages: [
      { code: 'he', name: 'Hebrew', native: 'עברית' },
      { code: 'ar', name: 'Arabic', native: 'العربية' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'ILS', symbol: '₪', position: 'before' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Jerusalem',
  },
  {
    code: 'QA',
    name: 'Qatar',
    regions: [
      { code: 'DA', name: 'Doha' },
      { code: 'RA', name: 'Al Rayyan' },
    ],
    languages: [
      { code: 'ar', name: 'Arabic', native: 'العربية' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'QAR', symbol: 'ر.ق', position: 'after' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Qatar',
  },
  {
    code: 'KW',
    name: 'Kuwait',
    regions: [
      { code: 'KU', name: 'Kuwait City' },
      { code: 'HA', name: 'Hawalli' },
      { code: 'FA', name: 'Farwaniya' },
    ],
    languages: [
      { code: 'ar', name: 'Arabic', native: 'العربية' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'KWD', symbol: 'د.ك', position: 'after' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Kuwait',
  },
  {
    code: 'BH',
    name: 'Bahrain',
    regions: [
      { code: 'MN', name: 'Manama' },
      { code: 'MU', name: 'Muharraq' },
    ],
    languages: [
      { code: 'ar', name: 'Arabic', native: 'العربية' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'BHD', symbol: '.د.ب', position: 'after' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Bahrain',
  },
  {
    code: 'OM',
    name: 'Oman',
    regions: [
      { code: 'MA', name: 'Muscat' },
      { code: 'BA', name: 'Al Batinah' },
      { code: 'SH', name: 'Ash Sharqiyah' },
    ],
    languages: [
      { code: 'ar', name: 'Arabic', native: 'العربية' },
      { code: 'en', name: 'English', native: 'English' },
    ],
    currency: { code: 'OMR', symbol: 'ر.ع.', position: 'after' },
    dateFormat: 'DD/MM/YYYY',
    defaultTimezone: 'Asia/Muscat',
  },
];



const defaultLocale= {
  country: 'IN',
  region: 'UP',
  language: 'en',
  currency: { code: 'INR', symbol: '₹', position: 'before' },
  dateFormat: 'DD/MM/YYYY',
  timezone: 'Asia/Kolkata',
};

const LocalizationContext = createContext(undefined);

export function LocalizationProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    const saved = localStorage.getItem('store_localization');
    return saved ? JSON.parse(saved) : defaultLocale;
  });

  useEffect(() => {
    localStorage.setItem('store_localization', JSON.stringify(locale));
  }, [locale]);

  const setLocale = (updates) => {
    setLocaleState(prev => ({ ...prev, ...updates }));
  };

  const getCountry = () => countries.find(c => c.code === locale.country);

  const formatCurrency = (amount) => {
    const { symbol, position } = locale.currency;
    const formatted = amount.toLocaleString('en-IN', { 
      minimumFractionDigits: 0,
      maximumFractionDigits: 2 
    });
    return position === 'before' ? `${symbol}${formatted}` : `${formatted} ${symbol}`;
  };

  const formatDate = (date) => {
    const d = typeof date === 'string' ? new Date(date) : date;
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();

    switch (locale.dateFormat) {
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      case 'YYYY-MM-DD':
        return `${year}-${month}-${day}`;
      case 'DD/MM/YYYY':
      default:
        return `${day}/${month}/${year}`;
    }
  };

  return (
    <LocalizationContext.Provider value={{ 
      locale, 
      setLocale, 
      getCountry, 
      formatCurrency, 
      formatDate,
      countries 
    }}>
      {children}
    </LocalizationContext.Provider>
  );
}

export function useLocalization() {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
}
