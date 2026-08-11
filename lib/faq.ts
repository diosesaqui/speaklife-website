/**
 * FAQ content lives outside the client component: values exported across a
 * "use client" boundary become client references, not plain data, so the
 * server can't map over them to build FAQPage structured data.
 *
 * These are the questions that actually cost installs.
 */
export const FAQ_ITEMS = [
  {
    q: "Does SpeakLife cost anything?",
    a: "The app is free to download and you can start using it right away. Premium unlocks the full library — every devotional, the full declaration set, and Bible Chat. You can try all of it free for 7 days and cancel any time from your App Store settings.",
  },
  {
    q: "Will I get charged the moment my free trial ends?",
    a: "Only if you keep it. You get the full 7 days, and the trial runs through Apple — so you cancel in two taps from Settings → your name → Subscriptions, any time before day 7. Nothing is charged until then.",
  },
  {
    q: "How much time does this actually take?",
    a: "Two minutes is a real day. Read the declaration, speak it out loud, go live your life. If you want more, the audio devotionals run three to five minutes — about the length of one song in the car.",
  },
  {
    q: "Do I have to say things out loud? That feels strange.",
    a: "It feels strange for about a week, and then it doesn’t. Speaking is the whole point — Scripture ties believing in your heart to confessing with your mouth (Romans 10:9–10), and Jesus spoke to the storm rather than about it. You can read silently and still get a lot from it. But the people who see their lives change are the ones who say it.",
  },
  {
    q: "Is this for my denomination?",
    a: "SpeakLife is rooted in Scripture, not in a denomination. Every declaration is tied to a specific verse, and the verse is always shown so you can check it yourself. Readers from every tradition use it.",
  },
  {
    q: "How is this different from other Bible apps?",
    a: "Most apps give you something to read. SpeakLife gives you something to say. It runs on one mechanic — Reject the Lie, Declare the Truth (2 Corinthians 10:5) — so instead of just learning more about God’s Word, you use it against the specific thing you’re facing today.",
  },
  {
    q: "What devices does it work on?",
    a: "SpeakLife is on iPhone and iPad, and it needs iOS 17 or later. On a computer, scan the QR code on this page with your phone camera to install it in a few seconds.",
  },
];
