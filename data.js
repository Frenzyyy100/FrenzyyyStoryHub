'use strict';

/* ═══════════════════════════════════════════
   ✏️  YOUR CONTENT
═══════════════════════════════════════════ */

// Hero slides (max 5)
const heroSlides = [
  { tag:'🔥 Featured', title:'Slide 1 Title', description:'Edit heroSlides[0] in the script section to set your first banner.', bg:'linear-gradient(135deg,#3B1A08 0%,#5A2510 55%,#C44B1A 100%)', readHref:'#' },
  { tag:'✨ New Release', title:'Slide 2 Title', description:'Edit heroSlides[1] in the script section.', bg:'linear-gradient(135deg,#1A0D05 0%,#4A2210 60%,#E8622A 100%)', readHref:'#' },
  { tag:'⭐ Staff Pick', title:'Slide 3 Title', description:'Edit heroSlides[2] in the script section.', bg:'linear-gradient(135deg,#2C1206 0%,#6B3318 55%,#F5B942 100%)', readHref:'#' },
  // { tag:'', title:'', description:'', bg:'', readHref:'#' },
  // { tag:'', title:'', description:'', bg:'', readHref:'#' },
];

// Sub-tab novels — { title, emoji, bg, rating, genre, status }
const trendingData  = []; // 🔥 Trending tab
const hotPicksData  = []; // ⭐ Hot Picks tab
const dojoDuelsData = []; // ⚔️ Dojo Duels tab
const frenzyyyData  = []; // ✍️ Frenzyyy's Work tab

// What's New — { title, emoji, bg, description, genre, status, rating, isNew }
const novelsNew = [];

// Chapter updates — { novelTitle, emoji, chapter, chapterTitle, time }
const updatesData = [];

// Announcements — { title, body, type, date }  type: new | event | system
const announcementsData = [];

// Notifications — { msg, time, read }
const notificationsData = [
  { msg:'📢 Welcome to NovéLore! Start exploring novels.', time:'Just now', read:false },
  { msg:'🔥 New chapters available — check the Updates tab.', time:'5m ago', read:false },
  { msg:"✍️ Frenzyyy just posted a new chapter!", time:'1h ago', read:true },
  { msg:'📚 Three new novels added to Hot Picks.', time:'3h ago', read:true },
  { msg:'🎉 Dojo Duels section is now live!', time:'Yesterday', read:true },
];

// Bookmarks — { title, emoji, bg, genre, href }
// href is where "Read" button will take the user (set to your novel URL or '#')
const bookmarksData = [
  { title:'Placeholder Novel 1', emoji:'📖', bg:'linear-gradient(160deg,#E8622A,#3B1A08)', genre:'Fantasy', href:'#' },
  { title:'Placeholder Novel 2', emoji:'📚', bg:'linear-gradient(160deg,#C44B1A,#6B3318)', genre:'Action',  href:'#' },
  { title:'Placeholder Novel 3', emoji:'🌸', bg:'linear-gradient(160deg,#F5B942,#6B3318)', genre:'Romance', href:'#' },
];
// ← Replace placeholder bookmarks with real data, or clear the array for an empty state