export type RelatedLink = {
  slug: string;
  label: string;
  description: string;
};

export type InfoSection = {
  title: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageContent = {
  slug: string;
  pathname: string;
  category: "home" | "text" | "font" | "name" | "signature" | "copy" | "alphabet";
  eyebrow: string;
  title: string;
  description: string;
  h1: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  samplePrompt: string;
  examples: string[];
  useCases: string[];
  infoSections: InfoSection[];
  faqs: FaqItem[];
  related: RelatedLink[];
};

export const pages: Record<string, PageContent> = {
  // ═══════════════════════════════════════════
  // HOME — 总入口，大词分发中枢
  // ═══════════════════════════════════════════
  home: {
    slug: "home",
    pathname: "/",
    category: "home",
    eyebrow: "Free Online Tool",
    title: "Cursive Generator - Convert Text to Cursive",
    description: "Free cursive generator to turn plain text into beautiful cursive writing. Copy and paste cursive text for names, signatures, bios, and social media.",
    h1: "Cursive Generator",
    heroTitle: "Cursive Generator",
    heroDescription: "Turn plain text into stylish cursive instantly — free, no downloads, works everywhere. Try names, signatures, bios, and more.",
    intro: "Welcome to CursiveGenerator.live, your free online cursive generator. Type any text and watch it transform into elegant cursive writing across multiple styles in real time. Whether you need a flowing signature for your email footer, a stylish name for your Instagram bio, or beautiful lettering for a creative project, this tool delivers instant results you can copy and paste anywhere. No font downloads, no sign-ups, no watermarks — just type, preview, and copy.",
    samplePrompt: "Write Beautifully",
    examples: [
      "Olivia", "James", "Dream big", "Stay golden",
      "Handmade Studio", "Emily Rose", "Forever yours", "Creative soul",
      "Best wishes", "With love", "Moonlight", "Serendipity",
      "Elegant", "The Adventure Begins", "Soft Launch", "Wildflower",
      "Golden Hour", "Whispered Words", "Timeless", "Cherish every moment"
    ],
    useCases: [
      "Instagram bios", "TikTok profile names", "digital signatures",
      "email sign-offs", "creative captions", "wedding moodboards",
      "branding mockups", "stylish headings", "Discord usernames", "Pinterest pins"
    ],
    infoSections: [
      {
        title: "How to use this cursive generator",
        body: "Type or paste your text into the input box above, then browse the cursive styles that appear instantly. Each style transforms your text using special Unicode characters that look like flowing cursive handwriting. You get four distinct styles: Classic Script for a traditional handwritten feel, Formal Hand for a bolder presentation, Airy Cursive for something light and modern, and Studio Line for a clean serif italic. When you find a style you love, click the Copy button and paste it anywhere — Instagram, TikTok, WhatsApp, email, or any app that supports text."
      },
      {
        title: "Where people use cursive text online",
        body: "Cursive text adds personality and elegance to almost any digital space. Instagram creators use it for profile bios and story captions that feel curated and intentional. TikTok users style their display names to stand out in scroll. Professionals add cursive email sign-offs for a warm personal touch. Designers use it for moodboard text and branding mockups. Couples use it for digital wedding invitations and save-the-date cards. Because the output is plain Unicode text, it works everywhere regular text works — no images, no font files, no hassle."
      },
      {
        title: "Which cursive tool should you use?",
        body: "Looking for a specific type of cursive text? Use our Cursive Text Generator for general text and phrases. The Cursive Font Generator compares multiple style directions side by side — great for branding and visual projects. Need a signature? The Cursive Signature Generator creates formal handwritten name styles. Want to style just your name? The Cursive Name Generator is built for identity and profile use. Each tool shares the same powerful Unicode engine but is tailored to a different search intent."
      }
    ],
    faqs: [
      {
        question: "What is a cursive generator?",
        answer: "A cursive generator is a free online tool that converts plain text into cursive-style Unicode characters. Unlike font files that need to be downloaded and installed, the output is plain text you can copy and paste directly into social media, messaging apps, email, and documents. It works on iPhones, Android phones, Windows PCs, and Macs without anyone needing to install anything."
      },
      {
        question: "Is the cursive text compatible with all apps?",
        answer: "Most modern platforms support these Unicode characters, including Instagram, TikTok, Facebook, Twitter/X, Discord, WhatsApp, Telegram, iMessage, and most email clients. Visual rendering may vary slightly between devices and operating systems, but the cursive effect remains intact everywhere."
      },
      {
        question: "Do I need to create an account or pay?",
        answer: "No. CursiveGenerator.live is completely free and does not require any account, sign-up, or payment. You can generate and copy cursive text as many times as you want with no limits."
      },
      {
        question: "How is this different from downloading a cursive font?",
        answer: "Font files (.ttf, .otf) must be downloaded and installed on each device, and they only work within specific apps that support custom fonts. Our generator uses Unicode math script characters that render natively on all devices — no installation needed. The trade-off is that you are limited to the characters available in the Unicode standard rather than having a complete custom typeface."
      }
    ],
    related: [
      {
        slug: "cursive-text-generator",
        label: "Cursive Text Generator",
        description: "Generate beautiful cursive for any text — bios, captions, messages, and creative writing."
      },
      {
        slug: "cursive-font-generator",
        label: "Cursive Font Generator",
        description: "Compare multiple cursive styles side by side and find the perfect look for branding and design."
      },
      {
        slug: "cursive-signature-generator",
        label: "Cursive Signature Generator",
        description: "Create elegant handwritten signature styles for email footers, cards, and professional use."
      },
      {
        slug: "cursive-name-generator",
        label: "Cursive Name Generator",
        description: "Style your name in flowing cursive for social profiles, usernames, and personal branding."
      },
      {
        slug: "cursive-text-generator-copy-and-paste",
        label: "Copy and Paste Cursive Text",
        description: "Instant copy-and-paste workflow optimized for speed — generate, copy, paste, done."
      },
      {
        slug: "cursive-alphabet-generator",
        label: "Cursive Alphabet",
        description: "Browse every cursive letter from A to Z with uppercase and lowercase in all four styles."
      }
    ]
  },

  // ═══════════════════════════════════════════
  // CURSIVE TEXT GENERATOR — 普通文本转草书
  // ═══════════════════════════════════════════
  "cursive-text-generator": {
    slug: "cursive-text-generator",
    pathname: "/cursive-text-generator",
    category: "text",
    eyebrow: "Text Tool",
    title: "Cursive Text Generator - Copy and Paste Cursive Text",
    description: "Free cursive text generator for turning plain text into flowing cursive. Copy and paste cursive text for bios, captions, messages, and posts.",
    h1: "Cursive Text Generator",
    heroTitle: "Cursive Text Generator",
    heroDescription: "Transform ordinary text into flowing cursive instantly. Perfect for bios, captions, messages, and any text that needs an elegant touch.",
    intro: "Need to make your words look beautiful? This cursive text generator takes any sentence, phrase, or message and instantly converts it into flowing cursive writing. Whether you are polishing an Instagram caption, adding warmth to a WhatsApp message, or styling a blog header, you will find four distinct cursive styles ready to copy. No font downloads, no design skills — just type your text and choose the style that fits.",
    samplePrompt: "Hello world",
    examples: [
      "Hello world", "Thank you so much", "Made with love",
      "Follow your dreams", "Happy birthday", "Best wishes",
      "Good vibes only", "You are amazing", "Thinking of you",
      "Have a wonderful day", "Just a little note", "Sending hugs"
    ],
    useCases: [
      "Instagram captions", "TikTok text overlays", "WhatsApp messages",
      "blog headers", "Pinterest pin titles", "creative journaling",
      "Discord status", "Telegram bio", "story captions", "personal notes"
    ],
    infoSections: [
      {
        title: "Convert any text into cursive in seconds",
        body: "Type your text into the input box and watch it transform into elegant cursive across four styles: Classic Script for that traditional handwritten feel, Formal Hand for a bolder more confident look, Airy Cursive for something light and modern, and Studio Line for a clean refined finish. Each style uses Unicode characters that display on phones, tablets, and computers without any font installation. Click the Copy button on your favorite result and paste it wherever you need it."
      },
      {
        title: "What makes this different from other cursive tools on our site",
        body: "This page is built for sentences, phrases, and messages — the kind of text you would actually type into a chat, caption, or blog post. If you are focused on single names, try our Cursive Name Generator. If you are comparing font styles for a branding project, the Cursive Font Generator is more visual. And if speed is your priority, our Copy and Paste page is streamlined for the fastest possible workflow."
      },
      {
        title: "Daily scenarios where cursive text shines",
        body: "Instagram captions feel more curated and personal with a cursive finish. WhatsApp and iMessage conversations gain warmth when you send a cursive greeting or thank-you note. Blog post headers and subheadings stand out with an elegant text treatment. Pinterest pin titles draw more clicks with decorative lettering. Digital journal entries feel more intimate when written in flowing script. The possibilities are endless — anywhere plain text feels too flat, cursive adds that extra touch."
      }
    ],
    faqs: [
      {
        question: "What types of text work best with this tool?",
        answer: "Short to medium-length text works best — greetings, captions, quotes, messages, and short notes. The cursive effect is most visually striking on 3 to 12 words. Very long paragraphs still work but can feel visually dense in decorative styles."
      },
      {
        question: "Can I use the generated text commercially?",
        answer: "Yes. The output is plain Unicode text, and you can use it for any personal or commercial purpose. There are no usage restrictions on the text you generate here."
      },
      {
        question: "Why does the cursive text look slightly different on my phone vs my computer?",
        answer: "Different operating systems (iOS, Android, Windows, macOS) use different fallback fonts to render Unicode characters. The letters and their structure stay the same, but subtle differences in line weight, slant, and spacing are normal across devices."
      }
    ],
    related: [
      {
        slug: "text-to-cursive-generator",
        label: "Text to Cursive Converter",
        description: "A conversion-focused tool — think 'before and after' for transforming plain text into cursive."
      },
      {
        slug: "cursive-text-generator-copy-and-paste",
        label: "Copy and Paste Cursive Text",
        description: "Streamlined for speed — generate cursive text and copy it to your clipboard in one click."
      },
      {
        slug: "cursive-font-generator",
        label: "Cursive Font Styles",
        description: "Compare all cursive styles side by side to find the best visual direction for your project."
      }
    ]
  },

  // ═══════════════════════════════════════════
  // CURSIVE FONT GENERATOR — 字体风格和视觉
  // ═══════════════════════════════════════════
  "cursive-font-generator": {
    slug: "cursive-font-generator",
    pathname: "/cursive-font-generator",
    category: "font",
    eyebrow: "Font & Style Tool",
    title: "Cursive Font Generator - Cursive Font Styles",
    description: "Browse and compare cursive font styles online. Generate text in multiple cursive directions for logos, branding, wedding designs, and creative projects.",
    h1: "Cursive Font Generator",
    heroTitle: "Cursive Font Generator",
    heroDescription: "Preview your text across multiple cursive font styles side by side. Compare Classic Script, Formal Hand, Airy Cursive, and Studio Line instantly.",
    intro: "Choosing the right cursive style can make or break a design. This cursive font generator lets you type any word, name, or phrase and instantly see it rendered in four distinct cursive directions. Compare them side by side — Classic Script for timeless elegance, Formal Hand for confident branding, Airy Cursive for modern minimalism, and Studio Line for polished professionalism. Find the style that matches your aesthetic, then copy and use it immediately.",
    samplePrompt: "Elegant Studio",
    examples: [
      "Elegant Studio", "Soft Lettering", "Wedding Invite",
      "Vintage Brand", "Luxury Logo", "The Aisle", "Velvet Bloom",
      "Golden Label", "Noir Atelier", "Ivory & Sage",
      "Modern Muse", "Classic Charm", "Petite Maison", "Grand Opening",
      "Signature Scent", "Couture"
    ],
    useCases: [
      "logo design concepts", "brand identity moodboards", "wedding stationery",
      "event invitations", "packaging mockups", "boutique product names",
      "cover artwork", "social media branding", "watermark text", "hero headlines"
    ],
    infoSections: [
      {
        title: "Compare four cursive font styles instantly",
        body: "Type your brand name, event title, or design concept into the input box. The generator renders it simultaneously in four distinct cursive directions. Classic Script is your go-to for traditional elegance — flowing letters with decorative flourishes. Formal Hand gives you a bolder, more structured presentation that holds up well at larger sizes. Airy Cursive is light, modern, and understated — perfect for minimalist brands. Studio Line delivers a refined serif italic that suits professional and corporate contexts. Scroll through them and pick the one that feels right."
      },
      {
        title: "How this is different from our text-focused cursive tools",
        body: "This page is built for visual comparison and style selection, not just quick text conversion. It is the right choice when you are designing something — a logo, an invitation, a brand name — and need to see multiple creative directions before committing. If you just need to quickly style a message or caption, the Cursive Text Generator or our Copy and Paste page will be faster. If you want to inspect individual letters, head to the Cursive Alphabet page."
      },
      {
        title: "Practical design uses for cursive fonts",
        body: "Logo designers use this tool to quickly mock up cursive logotype options before committing to custom lettering. Wedding planners and stationery designers preview invitation wording across styles to match different event aesthetics. Small business owners styling their Instagram and Etsy branding test how their shop name reads in different scripts. Content creators use it to find a signature cursive style for their channel art and video thumbnails."
      }
    ],
    faqs: [
      {
        question: "Are these actual downloadable font files?",
        answer: "No — this tool generates stylized Unicode text, not downloadable font files. The advantage is instant use: copy and paste directly into any app. If you need actual .ttf or .otf font files for professional design software, Google Fonts, DaFont, or Creative Market are better resources for downloadable typefaces."
      },
      {
        question: "Which cursive style works best for a logo?",
        answer: "Studio Line and Formal Hand tend to work best for logos because they remain legible at smaller sizes. Highly ornate styles like Classic Script look beautiful as hero text or large headlines but can become hard to read when scaled down to a favicon or app icon size."
      },
      {
        question: "Can I use the generated text in Canva or Photoshop?",
        answer: "Yes. Copy the styled text and paste it into any text layer in Canva, Photoshop, Figma, or any design tool. You can change the color, size, and position just like regular text. Keep in mind that you cannot change the font weight or add italic/bold variants since the styling is baked into the Unicode characters."
      }
    ],
    related: [
      {
        slug: "cursive-alphabet-generator",
        label: "Cursive Alphabet A-Z",
        description: "Inspect individual cursive letters one by one — uppercase and lowercase in all four styles."
      },
      {
        slug: "cursive-text-generator",
        label: "Cursive Text Generator",
        description: "Quickly generate cursive for sentences, phrases, and messages rather than brand names."
      },
      {
        slug: "home",
        label: "Main Generator",
        description: "The homepage entry point — covers all cursive tool categories in one place."
      }
    ]
  },

  // ═══════════════════════════════════════════
  // CURSIVE SIGNATURE GENERATOR — 签名
  // ═══════════════════════════════════════════
  "cursive-signature-generator": {
    slug: "cursive-signature-generator",
    pathname: "/cursive-signature-generator",
    category: "signature",
    eyebrow: "Signature Tool",
    title: "Cursive Signature Generator - Handwritten Styles",
    description: "Create elegant cursive signature styles online. Enter any name and get beautiful handwritten signature ideas for email, documents, branding, and personal use.",
    h1: "Cursive Signature Generator",
    heroTitle: "Cursive Signature Generator",
    heroDescription: "Create elegant handwritten signature styles from any name. Perfect for email sign-offs, digital documents, branded signatures, and personal stationery.",
    intro: "A beautiful signature makes a lasting impression. This cursive signature generator takes any name and renders it in flowing, handwritten-style cursive that looks like it was penned by hand. Type a full name — yours, a client's, or a character's — and browse four signature-ready styles. Use them for email footers, digital documents, business branding, author pages, or wherever a polished personal mark matters.",
    samplePrompt: "Emily Johnson",
    examples: [
      "Emily Johnson", "Michael Smith", "Sophia Williams",
      "James Anderson", "Olivia Brown", "Daniel Miller",
      "Emma Davis", "William Thomas", "Ava Martinez",
      "Benjamin Wilson", "Charlotte Taylor", "Henry Moore",
      "Amelia Jackson", "Alexander White", "Isabella Harris",
      "Ethan Clark"
    ],
    useCases: [
      "email signatures", "digital document sign-offs", "business branding",
      "author pages", "LinkedIn profile accents", "virtual business cards",
      "PDF letterheads", "creative portfolios", "client proposals", "personal stationery"
    ],
    infoSections: [
      {
        title: "Generate signature-style cursive from any name",
        body: "Enter a full name into the tool and it instantly renders four signature-ready cursive styles. Classic Script delivers the most traditional handwritten signature look — flowing, personal, and elegant. Formal Hand is bolder and projects confidence — great for business and professional contexts. Airy Cursive is lighter and more creative — ideal for artists, freelancers, and lifestyle brands. Studio Line brings a polished refinement that works well for legal, finance, and corporate environments."
      },
      {
        title: "How this differs from our name tools",
        body: "This page is built specifically for signature use cases — formal, professional, and personal mark-making. It focuses on full names rendered as cohesive signature units. If you are styling a first name for a social media profile or gaming handle, the Cursive Name Generator is a better fit. If you want a softer, more casual handwritten feel for invitations and cards, try the Handwriting Name Generator."
      },
      {
        title: "Where digital cursive signatures are used today",
        body: "Email footers are the most common — a cursive name beneath your message adds warmth and personality to every email. Freelancers and consultants add cursive signatures to proposals and invoices for a personal touch. Authors use them on book websites and newsletter sign-offs. Real estate agents, photographers, and creatives add them to their website contact pages. LinkedIn profiles and digital business cards feel more distinctive with a cursive name treatment."
      }
    ],
    faqs: [
      {
        question: "Is this a legally binding electronic signature?",
        answer: "No. This tool creates decorative text that looks like a cursive signature — it is not a verified electronic signature for contracts or legal documents. For legally binding e-signatures, use services like DocuSign, Adobe Sign, or HelloSign that comply with ESIGN and eIDAS regulations."
      },
      {
        question: "Should I enter my full legal name or just first and last?",
        answer: "A standard first-and-last name (like 'Emily Johnson') produces the cleanest and most versatile result. Middle names and initials can work too, but longer full legal names may feel visually dense in decorative cursive styles. Try a few variations to see what looks best."
      },
      {
        question: "Can I use this for business email signatures?",
        answer: "Yes. Many professionals use styled Unicode text in their email signature blocks. Copy the cursive name and paste it into your email client's signature settings (Gmail, Outlook, Apple Mail all support this). Pair it with your title and contact details for a complete professional signature."
      }
    ],
    related: [
      {
        slug: "cursive-name-generator",
        label: "Cursive Name Generator",
        description: "Style first names and nicknames for social profiles, usernames, and personal branding."
      },
      {
        slug: "cursive-handwriting-name-generator",
        label: "Handwriting Name Generator",
        description: "A softer, more casual handwritten style — ideal for invitations, cards, and craft projects."
      },
      {
        slug: "name-in-cursive-generator",
        label: "Name in Cursive",
        description: "A focused page for people searching the exact phrase 'name in cursive' and quick name previews."
      }
    ]
  },

  // ═══════════════════════════════════════════
  // CURSIVE NAME GENERATOR — 名字和profile
  // ═══════════════════════════════════════════
  "cursive-name-generator": {
    slug: "cursive-name-generator",
    pathname: "/cursive-name-generator",
    category: "name",
    eyebrow: "Name Tool",
    title: "Cursive Name Generator - Style Your Name",
    description: "Write any name in beautiful cursive online. Generate stylish cursive names for Instagram, TikTok, gaming profiles, usernames, and personal branding.",
    h1: "Cursive Name Generator",
    heroTitle: "Cursive Name Generator",
    heroDescription: "Style any name in elegant cursive — yours, a friend's, a character's. Perfect for social profiles, gaming handles, and personal brand identity.",
    intro: "Your name is how the internet knows you. Make it memorable. This cursive name generator transforms first names, last names, nicknames, and usernames into flowing cursive text across four distinct styles. Whether you are updating your Instagram display name, creating a new gaming handle, or styling your creator profile, you will find a cursive treatment that fits your personality. Generate, copy, and paste — your new name is ready in seconds.",
    samplePrompt: "Emma",
    examples: [
      "Emma", "Liam", "Sophia", "Noah", "Isabella",
      "Lucas", "Mia", "Ethan", "Ava", "Mason",
      "Charlotte", "Logan", "Amelia", "Oliver", "Harper",
      "Elijah", "Evelyn", "Aiden", "Abigail", "Sebastian"
    ],
    useCases: [
      "Instagram display names", "TikTok profile names", "gaming handles",
      "Discord nicknames", "creator profiles", "Pinterest usernames",
      "Twitch streaming names", "Twitter/X display names", "YouTube channel names"
    ],
    infoSections: [
      {
        title: "Style your name in cursive for any platform",
        body: "Enter your name (or any name) into the tool and instantly preview it in four cursive styles. Classic Script gives you that timeless romantic cursive — great for lifestyle and fashion profiles. Formal Hand is bolder and more assertive — perfect for gaming and competitive spaces. Airy Cursive keeps it light and modern — ideal for minimalist aesthetic accounts. Studio Line is clean and polished — best for professional and business profiles. Copy the one that matches your vibe and paste it directly into your profile settings."
      },
      {
        title: "Not just for social media — where else cursive names work",
        body: "Beyond Instagram and TikTok, cursive names are used for wedding place cards and seating charts, personalized gift tags, custom notebook covers, baby announcement designs, YouTube channel art, streaming overlays, Discord server nicknames, and in-game character names. Anywhere a name appears, a cursive treatment adds personality."
      },
      {
        title: "How this differs from our other name tools",
        body: "This is our broadest name tool, built for all types of names across all platforms. If you are looking for a formal signature-style treatment, the Cursive Signature Generator focuses on full-name professional sign-offs. If you want something softer and more handwritten for invitations and cards, the Handwriting Name Generator leans into that personal, pen-like feel. And the Name in Cursive page is tuned for the specific 'name in cursive' search phrase with its own unique examples."
      }
    ],
    faqs: [
      {
        question: "Which style is best for Instagram display names?",
        answer: "Airy Cursive and Classic Script tend to perform best on Instagram — they are elegant without being overly ornate, so your name stays readable at the small profile display size. Studio Line is also a strong choice if you prefer a cleaner, more professional look."
      },
      {
        question: "Can I use this for gaming usernames and handles?",
        answer: "Absolutely. Many gamers use cursive styling for in-game names, clan tags, and streaming overlays. Formal Hand works especially well for gaming since it is bold and maintains readability at smaller sizes in-game."
      },
      {
        question: "Do short or long names work better in cursive?",
        answer: "Short to medium names (3-8 characters) tend to look the cleanest in cursive because the letter connections have room to breathe. Longer names still work, but decorative styles like Classic Script can make very long names feel visually busy."
      }
    ],
    related: [
      {
        slug: "name-in-cursive-generator",
        label: "Name in Cursive",
        description: "A quick lookup page for seeing exactly how a first name, last name, or full name looks in cursive."
      },
      {
        slug: "cursive-signature-generator",
        label: "Cursive Signature Generator",
        description: "Formal, full-name signature styles for email footers, documents, and professional branding."
      },
      {
        slug: "cursive-handwriting-name-generator",
        label: "Handwriting Name Generator",
        description: "Soft, pen-like handwritten name styles — perfect for invitations, cards, and craft projects."
      }
    ]
  },

  // ═══════════════════════════════════════════
  // TEXT TO CURSIVE — before/after 转换
  // ═══════════════════════════════════════════
  "text-to-cursive-generator": {
    slug: "text-to-cursive-generator",
    pathname: "/text-to-cursive-generator",
    category: "text",
    eyebrow: "Conversion Tool",
    title: "Text to Cursive Generator - Convert Plain Text",
    description: "Convert plain text to cursive online in seconds. Transform ordinary writing into flowing cursive text — copy and paste anywhere from Instagram to email.",
    h1: "Text to Cursive Generator",
    heroTitle: "Text to Cursive Generator",
    heroDescription: "Convert any plain text into elegant cursive writing. The before-and-after transformation is instant — type, preview, and copy your favorite style.",
    intro: "Got plain text that needs a glow-up? This text-to-cursive converter is built for the 'I know what I have, and I want it to look better' mindset. Type in any text — a caption draft, a greeting, a note, a quote — and watch it instantly transform into flowing cursive across four styles. Compare the plain input with the cursive output, pick the style that elevates your words, and copy it. It is the fastest way to turn ordinary writing into something worth sharing.",
    samplePrompt: "Beautiful handwritten text",
    examples: [
      "Write this in cursive", "Turn my text into cursive",
      "Beautiful handwritten text", "This is my cursive phrase",
      "From plain to elegant", "Make these words flow", "Transform this text",
      "Stylize my writing", "Plain text no more", "Before and after magic"
    ],
    useCases: [
      "caption polishing", "bio enhancement", "message styling",
      "quote graphics", "note decoration", "social post drafts",
      "brand copy elevation", "invitation wording", "creative writing", "visual comparisons"
    ],
    infoSections: [
      {
        title: "The simplest way to convert text to cursive",
        body: "Type or paste your plain text into the input box. The generator instantly converts it into four cursive styles — no waiting, no processing delay. Classic Script wraps your words in traditional flowing letterforms that feel hand-penned and personal. Formal Hand gives you a bolder, more structured cursive with confident strokes. Airy Cursive is light, breezy, and contemporary — perfect for modern brands and minimalist aesthetics. Studio Line offers a refined serif italic that elevates business and professional text. Compare the plain-vs-cursive difference and copy your favorite."
      },
      {
        title: "How this page is different from our general text generator",
        body: "This page is optimized for the 'convert' search intent — you are thinking in before-and-after terms. It is structured around that transformation mindset with examples that mirror the way people actually search for this. Our main Cursive Text Generator is broader and covers everyday messages, captions, and creative phrases. Our Copy and Paste page prioritizes speed above all else. This page stays focused on the transformation workflow: plain text in, cursive text out, compare, copy, and move on."
      },
      {
        title: "When to choose a text-to-cursive tool",
        body: "Choose this tool when you have existing text that you want to transform. Maybe you drafted a social caption and want to see it in a more elegant form. Perhaps you are preparing invitation copy and want to compare a plain version with a cursive version. Or you might be creating quote graphics for your brand and need to quickly test how a sentence reads in cursive before committing. The before-and-after workflow makes these use cases fast and intuitive."
      }
    ],
    faqs: [
      {
        question: "What is the difference between this and a font converter?",
        answer: "A font converter usually changes a document's font from one installed typeface to another. This tool converts plain text into Unicode cursive characters — no font files are involved. The output is plain text you can copy and paste, not a formatted document."
      },
      {
        question: "Can I convert long paragraphs?",
        answer: "Yes, the tool works with text of any length. However, cursive styles look best on short to medium text. For long paragraphs, consider converting shorter segments individually so each line maintains its visual impact."
      },
      {
        question: "How is this different from the main cursive text generator?",
        answer: "Use this page when your goal is specifically to convert existing plain text into cursive and compare the before-and-after result. Use the main Cursive Text Generator when you want broader examples for captions, greetings, bios, and creative writing. The output style family is intentionally consistent across the site so copied text behaves predictably, but each page is organized around a different search intent."
      }
    ],
    related: [
      {
        slug: "cursive-text-generator",
        label: "Cursive Text Generator",
        description: "The broader text styling tool — more examples and use cases for general cursive generation."
      },
      {
        slug: "cursive-text-generator-copy-and-paste",
        label: "Copy and Paste Cursive",
        description: "Speed-optimized version — generate and copy cursive text in the fastest possible workflow."
      },
      {
        slug: "home",
        label: "Cursive Generator Home",
        description: "The main entry point for all cursive tools, covering the full range of use cases."
      }
    ]
  },

  // ═══════════════════════════════════════════
  // COPY AND PASTE — 强调即时使用
  // ═══════════════════════════════════════════
  "cursive-text-generator-copy-and-paste": {
    slug: "cursive-text-generator-copy-and-paste",
    pathname: "/cursive-text-generator-copy-and-paste",
    category: "copy",
    eyebrow: "Quick Copy Tool",
    title: "Cursive Text Copy and Paste Generator",
    description: "Generate and copy cursive text instantly. Paste stylish cursive writing into Instagram, TikTok, Discord, WhatsApp, and other platforms.",
    h1: "Cursive Text Generator Copy and Paste",
    heroTitle: "Cursive Text Generator Copy and Paste",
    heroDescription: "Generate cursive text and copy it in one click. Built for speed — paste directly into Instagram, TikTok, Discord, WhatsApp, and anywhere else.",
    intro: "You are here because you need cursive text right now, not a tutorial. This page is streamlined for pure speed: type your text, see it in four cursive styles, click Copy on the one you want, and paste it into Instagram, TikTok, Discord, WhatsApp, or wherever you are posting. The entire flow takes under ten seconds. No scrolling past long explanations, no hunting for the copy button — just generate, copy, paste, done.",
    samplePrompt: "Aesthetic caption",
    examples: [
      "Instagram bio", "TikTok name", "Cute username",
      "Aesthetic caption", "Profile signature", "Status message",
      "Channel description", "My vibe", "Soft life", "Dreamer era",
      "Main character", "Golden hour vibes", "Quiet luxury"
    ],
    useCases: [
      "Instagram bio updates", "TikTok profile names", "Discord status",
      "WhatsApp about text", "Pinterest board names", "Telegram display names",
      "Twitter/X bio", "Snapchat display names", "Twitch panels"
    ],
    infoSections: [
      {
        title: "Copy and paste cursive text in under 10 seconds",
        body: "The workflow is deliberately simple. Type or paste your desired text into the input box. Four cursive styles appear instantly — Classic Script, Formal Hand, Airy Cursive, and Studio Line — each with its own prominent Copy button. Click the button for the style you want. The text is on your clipboard. Switch to your target app and paste. That is it. On mobile, the experience is even faster: tap to copy, switch apps, paste."
      },
      {
        title: "Every major platform supports our cursive text",
        body: "Instagram supports cursive Unicode in bios, captions, story text, and highlights. TikTok displays cursive names and bio text correctly on both iOS and Android. Discord renders cursive in usernames, server nicknames, channel topics, and messages. WhatsApp accepts cursive in your about section, status, and chat messages. Pinterest, Telegram, Twitter/X, Snapchat, and most other social and messaging apps all support these characters without issues."
      },
      {
        title: "Why we built a dedicated copy-and-paste page",
        body: "Search data shows that people who type 'copy and paste' into their search are in action mode — they want to generate and use cursive text immediately, with as little friction as possible. This page strips away in-depth guides and style comparisons to focus purely on the copy workflow. If you want more detailed guidance or broader examples, our Cursive Text Generator page is a better starting point."
      }
    ],
    faqs: [
      {
        question: "How fast can I copy cursive text?",
        answer: "The complete workflow — type, preview, copy, and paste — takes about 5 to 10 seconds once you are familiar with the tool. The copy buttons are prominently placed on each style card, and on mobile the tap-to-copy experience is near-instant."
      },
      {
        question: "Will the copied text work in my Instagram bio?",
        answer: "Yes. Instagram fully supports Unicode cursive characters in bios. Simply copy the styled text and paste it into your bio field. Instagram renders it correctly on both iOS and Android devices. Some other users may see a slightly different visual rendering depending on their device, but the cursive effect remains."
      },
      {
        question: "Does copied cursive text work everywhere?",
        answer: "It works in the vast majority of modern apps, social platforms, and messaging services. The only exceptions are some older applications, terminal/command-line interfaces, and systems with limited Unicode support — but these are rare in everyday consumer use."
      }
    ],
    related: [
      {
        slug: "cursive-text-generator",
        label: "Cursive Text Generator",
        description: "More detailed guidance, broader examples, and in-depth use case coverage for general cursive text."
      },
      {
        slug: "text-to-cursive-generator",
        label: "Text to Cursive Converter",
        description: "Before-and-after focused — ideal for comparing plain text with its cursive transformation."
      },
      {
        slug: "home",
        label: "Cursive Generator Home",
        description: "The main hub for all cursive tools — explore every category from names to signatures to fonts."
      }
    ]
  },

  // ═══════════════════════════════════════════
  // HANDWRITING NAME — 手写感名字
  // ═══════════════════════════════════════════
  "cursive-handwriting-name-generator": {
    slug: "cursive-handwriting-name-generator",
    pathname: "/cursive-handwriting-name-generator",
    category: "name",
    eyebrow: "Handwriting Tool",
    title: "Cursive Handwriting Name Generator",
    description: "Turn names into beautiful handwritten cursive text. Create soft, personal handwriting styles for invitations, greeting cards, gift tags, and creative projects.",
    h1: "Cursive Handwriting Name Generator",
    heroTitle: "Cursive Handwriting Name Generator",
    heroDescription: "Create soft, personal handwritten-style names in cursive. Ideal for invitations, greeting cards, gift tags, and any project that needs a human touch.",
    intro: "There is warmth in a name written by hand — it feels intentional, personal, and real. This handwriting name generator recreates that feeling digitally, turning every name into soft, flowing cursive that looks like ink on paper. Whether you are designing wedding invitations, crafting personalized greeting cards, making gift tags, or adding a human touch to your creative project, you will find a style that captures the right emotion.",
    samplePrompt: "Charlotte",
    examples: [
      "Charlotte", "Amelia", "Benjamin", "Alexander", "Grace",
      "Victoria", "Eleanor", "Theodore", "Penelope", "Samuel",
      "Audrey", "Gabriel", "Clara", "Nathaniel", "Lillian",
      "Julian", "Rosalie", "Dominic", "Beatrice", "Felix"
    ],
    useCases: [
      "wedding invitations", "save-the-date cards", "greeting cards",
      "gift tags", "thank-you notes", "baby announcements",
      "craft labels", "party decorations", "scrapbook titles", "envelope addressing"
    ],
    infoSections: [
      {
        title: "Create warm, handwritten-style cursive names",
        body: "Type any name into the generator and see it rendered in four handwriting-inspired cursive styles. Classic Script is the closest match to traditional pen handwriting — flowing loops, graceful connections, and that familiar 'written by hand' feel. Formal Hand is slightly more structured while keeping the warmth. Airy Cursive is light as a feather — think quick elegant notes on nice stationery. Studio Line bridges handwriting and polished design, perfect for formal invitations where you want warmth without sacrificing refinement."
      },
      {
        title: "How this is different from our other name tools",
        body: "This page is built for physical-world and event-oriented use cases — invitations, cards, gifts, and crafts. The handwriting aesthetic is softer and more personal than the signature-focused Signature Generator or the platform-focused Name Generator. If you are creating a wedding invitation suite, this is your tool. If you are updating your Instagram display name, the Cursive Name Generator is a better fit."
      },
      {
        title: "Real-world uses for handwritten cursive names",
        body: "Wedding stationery designers use this tool to quickly test how couple and guest names look in different handwriting styles before committing to printed designs. Etsy sellers of personalized gifts generate preview text for custom name jewelry, embroidered items, and engraved products. Party planners style place cards and favor tags with matching cursive names. Crafters and scrapbookers add handwritten-style titles and names to their layouts."
      }
    ],
    faqs: [
      {
        question: "Does this tool simulate actual handwriting?",
        answer: "It creates stylized Unicode text that looks like cursive handwriting — similar to what you might produce with a pen. It is not a handwriting font that varies letter shapes based on position. For true handwriting simulation with natural variation, you would need a dedicated calligraphy or handwriting font with OpenType contextual alternates."
      },
      {
        question: "Can I use these handwritten names in printed materials?",
        answer: "Yes. Copy the styled text and paste it into any design software (Canva, Photoshop, Illustrator, InDesign) that you are using to create print-ready files. The Unicode characters will render at any print resolution since they are text, not images."
      },
      {
        question: "Which style is best for wedding invitations?",
        answer: "Classic Script and Studio Line are the most popular for wedding stationery. Classic Script delivers that romantic, flowing handwriting feel that matches traditional wedding aesthetics. Studio Line offers a more polished and refined look that pairs beautifully with minimalist and modern invitation designs."
      }
    ],
    related: [
      {
        slug: "cursive-name-generator",
        label: "Cursive Name Generator",
        description: "The broadest name styling tool — covers all platforms and identity use cases beyond just handwriting."
      },
      {
        slug: "cursive-signature-generator",
        label: "Cursive Signature Generator",
        description: "Formal, professional signature styles — better for email footers and business branding."
      },
      {
        slug: "name-in-cursive-generator",
        label: "Name in Cursive",
        description: "A quick name lookup page for people who want to see a name written in cursive."
      }
    ]
  },

  // ═══════════════════════════════════════════
  // CURSIVE ALPHABET — A-Z 字母表
  // ═══════════════════════════════════════════
  "cursive-alphabet-generator": {
    slug: "cursive-alphabet-generator",
    pathname: "/cursive-alphabet-generator",
    category: "alphabet",
    eyebrow: "Reference Tool",
    title: "Cursive Alphabet Generator - Letters A to Z",
    description: "Browse the cursive alphabet from A to Z. Copy uppercase and lowercase cursive letters for learning, design, monograms, and creative projects.",
    h1: "Cursive Alphabet Generator",
    heroTitle: "Cursive Alphabet Generator",
    heroDescription: "Browse every cursive letter from A to Z in uppercase and lowercase. Compare four styles, copy individual letters, and explore example words.",
    intro: "Need to see how a specific letter looks in cursive? This page is your visual reference for the entire cursive alphabet. Every letter from A to Z is displayed in uppercase and lowercase across four distinct cursive styles. Click any letter to copy it, browse example words to see letters in context, and use this as your go-to resource for monograms, initial designs, learning reference, or creative lettering inspiration.",
    samplePrompt: "Alphabet",
    examples: ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"],
    useCases: [
      "monogram designs", "initial logos", "letter references",
      "learning cursive forms", "branding initials", "single-letter styling",
      "name planning", "decorative drop caps"
    ],
    infoSections: [
      {
        title: "Uppercase cursive alphabet (A-Z)",
        body: "Uppercase cursive letters are the showpieces — used for initials, monograms, branding marks, and decorative first letters. Each letter from A to Z is available in four styles: Classic Script for traditional flowing capitals with elegant flourishes, Formal Hand for bold structured capitals that hold their shape at any size, Airy Cursive for light modern capitals that feel fresh and contemporary, and Studio Line for refined serif-italic capitals suited to professional contexts. Click any letter to copy it and use it in your project."
      },
      {
        title: "Lowercase cursive alphabet (a-z)",
        body: "Lowercase letters show you how words will actually flow and connect. Browse all 26 lowercase letters across the same four styles to compare readability and aesthetic. Classic Script lowercase letters have that familiar cursive schoolbook feel. Formal Hand lowercase is bolder and more defined. Airy Cursive lowercase is delicate and modern. Studio Line lowercase is clean and legible. Understanding how individual lowercase letters look helps you predict how full words and names will read in each style."
      },
      {
        title: "How this page complements our other tools",
        body: "This alphabet reference is the inspection tool in our cursive toolkit. Use it alongside the Cursive Font Generator when you want to zoom in on specific letters before committing to a full-word style. Pair it with the Cursive Name Generator to see how individual letters in a name will render before styling the full name. It is also the best page for learning and teaching cursive letterforms — a visual dictionary of how each character transforms across different cursive directions."
      }
    ],
    faqs: [
      {
        question: "Can I copy individual cursive letters?",
        answer: "Yes. Every letter on this page — all 26 uppercase and 26 lowercase across four styles, totaling 208 individual characters — has its own copy button. Click any letter to copy that single cursive character to your clipboard. This is especially useful for building custom monograms or assembling letter-based designs one character at a time."
      },
      {
        question: "Are these cursive letters the same as a handwriting worksheet?",
        answer: "No. This page shows you what cursive letters look like as finished Unicode characters. It is a visual reference and copy tool, not a handwriting practice resource. For learning to write cursive by hand, printable worksheets with stroke guides and tracing lines will be more helpful."
      },
      {
        question: "What is the difference between cursive text and cursive Unicode characters?",
        answer: "The cursive letters on this page are Unicode math script characters (from the Mathematical Alphanumeric Symbols block). They look like cursive because they were designed as script variants for mathematical notation, but they work anywhere that supports Unicode. This is different from actual cursive fonts which contain specially designed letterforms with connecting strokes. The Unicode approach gives you instant copy-paste functionality; the font approach gives you typographic precision."
      }
    ],
    related: [
      {
        slug: "cursive-font-generator",
        label: "Cursive Font Styles",
        description: "Move from single letters to full words — compare styles side by side for branding and design."
      },
      {
        slug: "cursive-text-generator",
        label: "Cursive Text Generator",
        description: "Generate complete sentences and phrases in cursive rather than browsing individual letters."
      },
      {
        slug: "cursive-name-generator",
        label: "Cursive Name Generator",
        description: "See how full names look in cursive after you have previewed individual letters here."
      }
    ]
  },

  // ═══════════════════════════════════════════
  // NAME IN CURSIVE — 查询名字草书写法
  // ═══════════════════════════════════════════
  "name-in-cursive-generator": {
    slug: "name-in-cursive-generator",
    pathname: "/name-in-cursive-generator",
    category: "name",
    eyebrow: "Name Lookup Tool",
    title: "Name in Cursive Generator - Write Any Name",
    description: "Write any name in cursive instantly. See how first names, last names, and full names look in flowing cursive text. Copy and use anywhere.",
    h1: "Name in Cursive Generator",
    heroTitle: "Name in Cursive Generator",
    heroDescription: "Write any name in flowing cursive — see how it looks across four elegant styles, then copy and use it anywhere names appear online.",
    intro: "Curious how a particular name looks in cursive? Type any name — your own, a loved one's, a character's — and instantly see it written in four beautiful cursive styles. This page is built for the popular 'name in cursive' search: quick, straightforward, and focused purely on names. No complex settings, no long guides. Just enter a name, browse the styles, and copy the one that captures the right feeling.",
    samplePrompt: "Sarah in cursive",
    examples: [
      "My name in cursive", "Sarah in cursive", "David in cursive",
      "Anna in cursive", "Robert in cursive", "Jessica in cursive",
      "Matthew in cursive", "Rachel in cursive", "Andrew in cursive",
      "Lauren in cursive", "Kevin in cursive", "Megan in cursive"
    ],
    useCases: [
      "name lookups", "social media display names", "event name cards",
      "personalized designs", "signature ideas", "profile styling",
      "username creation", "gift personalization"
    ],
    infoSections: [
      {
        title: "See any name written in cursive instantly",
        body: "Type the name you want to see — first name, last name, full name, or even 'My name in cursive' — and the generator instantly renders it in four distinct styles. Classic Script gives it that timeless flowing cursive look most people imagine when searching this phrase. Formal Hand is bolder and more dramatic. Airy Cursive is soft and contemporary. Studio Line is clean and polished. Each style brings out a different personality in the same name."
      },
      {
        title: "How this page fits into our name tool collection",
        body: "This page is tuned for the exact phrase people search: 'name in cursive.' The examples and guidance are optimized for quick name lookups: type a name, compare the result, copy the version that feels right. If you want broader identity ideas for usernames and profile names, start with the Cursive Name Generator. If you are working on wedding or event materials, the Handwriting Name Generator is more targeted."
      },
      {
        title: "Popular uses for cursive name output",
        body: "People use this page to see how their name will look before adding it to an Instagram bio or TikTok profile. Parents preview baby names in cursive for nursery art and birth announcements. Couples test how their names look together for wedding materials. Gift shoppers check name styling before ordering personalized items. Teachers and students use it as a quick reference for cursive name writing."
      }
    ],
    faqs: [
      {
        question: "Is this different from the Cursive Name Generator?",
        answer: "This page is best for quick searches like 'my name in cursive' or 'write this name in cursive.' The Cursive Name Generator is broader and better for usernames, profile names, nicknames, and personal branding ideas. Choose this page for a direct name lookup; choose the broader page when you want more identity-focused guidance."
      },
      {
        question: "Can I write 'My name in cursive' and get a result?",
        answer: "Yes. Many people use that exact phrase as a starting point. The generator treats it as text and will render it in cursive, which you can then copy. You can also type your actual name — either approach works."
      },
      {
        question: "Which cursive style is best for names?",
        answer: "For most names, Classic Script is the most universally appealing — it captures the flowing cursive look people typically expect. Airy Cursive works best for shorter, modern-feeling names. Formal Hand is great for names that need to make a statement. Test all four and see which one feels right for your specific name."
      }
    ],
    related: [
      {
        slug: "cursive-name-generator",
        label: "Cursive Name Generator",
        description: "The primary name styling page — browse popular names, more examples, and broader identity guidance."
      },
      {
        slug: "cursive-handwriting-name-generator",
        label: "Handwriting Name Generator",
        description: "Soft, pen-like handwritten styles — ideal for cards, invitations, and personal craft projects."
      },
      {
        slug: "cursive-signature-generator",
        label: "Cursive Signature Generator",
        description: "Formal full-name signature styles for email, documents, and professional branding."
      }
    ]
  }
};

export function getPageContent(slug: string) {
  return pages[slug];
}
