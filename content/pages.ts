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
  home: {
    slug: "home",
    pathname: "/",
    category: "home",
    eyebrow: "Main Entry",
    title: "Cursive Generator - Convert Text to Cursive Instantly | Inkspell",
    description: "Use our cursive generator to turn plain text into stylish cursive writing instantly. Copy and paste cursive text for names, signatures, bios, and social posts.",
    h1: "Cursive Generator",
    heroTitle: "Cursive Generator",
    heroDescription: "Turn plain text into stylish cursive instantly for signatures, usernames, bios, and elegant everyday copy.",
    intro: "Turn any plain text into elegant cursive writing in seconds. Whether you need a stylish Instagram bio, a handwritten-style signature, or flowing text for a creative project, this free online cursive generator has you covered. Just type your text, preview multiple cursive styles, and copy the one you love — no font downloads, no sign-ups, no hassle.",
    samplePrompt: "Write Beautifully",
    examples: ["Emily Carter", "Best wishes from Olivia", "soft launch season", "Ink and velvet"],
    useCases: ["Instagram bios", "digital signatures", "profile names", "creative captions", "wedding moodboards", "stylish headings"],
    infoSections: [
      {
        title: "How to use this cursive generator",
        body: "Type or paste your text into the input box above, then browse the cursive styles that appear instantly. Each style transforms your text using special Unicode characters that look like cursive handwriting. When you find a style you like, click the Copy button and paste it anywhere — Instagram, TikTok, WhatsApp, email signatures, or any app that supports text."
      },
      {
        title: "Where people use cursive text online",
        body: "Cursive text adds a personal, elegant touch to almost any digital space. Use it for social media bios and captions, email sign-offs, digital invitation cards, profile display names, creative branding mockups, and personalized messages. Because the output is plain Unicode text (not an image or font file), it works wherever regular text works."
      },
      {
        title: "Why use a cursive text generator instead of installing fonts",
        body: "Font files need to be downloaded and installed, and they only work on your own device. Cursive text generated here uses Unicode math script characters that display natively across iPhones, Android phones, Windows, and Macs. Your copied cursive text will look the same to anyone who sees it, without them needing to install anything."
      }
    ],
    faqs: [
      {
        question: "Can I copy the generated cursive text anywhere?",
        answer: "Usually yes. Most modern social and messaging platforms support these Unicode-based text styles, though visual rendering can vary slightly by device."
      },
      {
        question: "Is this the same as installing a font?",
        answer: "No. This tool converts your text into stylized Unicode characters, so you can copy and paste them without downloading a font file."
      }
    ],
    related: [
      {
        slug: "cursive-text-generator",
        label: "Cursive Text Generator",
        description: "Generate stylish cursive text for bios, captions, messages, and social posts."
      },
      {
        slug: "cursive-font-generator",
        label: "Cursive Font Generator",
        description: "Compare multiple cursive font styles and find the right look for your project."
      },
      {
        slug: "cursive-signature-generator",
        label: "Cursive Signature Generator",
        description: "Create elegant handwritten signature styles for email and branding."
      }
    ]
  },

  "cursive-text-generator": {
    slug: "cursive-text-generator",
    pathname: "/cursive-text-generator",
    category: "text",
    eyebrow: "Core Page",
    title: "Cursive Text Generator - Copy and Paste Stylish Text | Inkspell",
    description: "Generate cursive text online and copy it anywhere. Turn plain words into elegant cursive writing for social media, profiles, messages, and more.",
    h1: "Cursive Text Generator",
    heroTitle: "Cursive Text Generator",
    heroDescription: "Generate cursive text you can copy anywhere, with multiple elegant styles ready for bios, captions, messages, and creative writing.",
    intro: "Need to turn ordinary text into graceful cursive writing? This cursive text generator lets you type any word or phrase and instantly see it transformed across multiple elegant styles. Whether you are polishing an Instagram caption, styling a Discord profile, or adding a personal touch to a message, you will find a look that fits — and copy it with one click.",
    samplePrompt: "Make this look softer",
    examples: ["gentle reminder", "letter from Sophie", "slow mornings only", "craft your signature line"],
    useCases: ["captions", "social posts", "message styling", "Discord profile text", "Pinterest pin copy", "journal headers"],
    infoSections: [
      {
        title: "Convert plain text into cursive instantly",
        body: "Type your text into the input box and watch it transform into flowing cursive lettering in real time. You can choose from Classic Script for a traditional handwritten feel, Formal Hand for a bolder presentation, Airy Cursive for something light and modern, or Studio Line for a clean serif-italic look. Each style uses Unicode characters that display natively on phones, tablets, and computers without any font installation."
      },
      {
        title: "Best ways to use cursive text online",
        body: "Cursive text works beautifully in Instagram bios and story captions, giving your profile a soft, curated feel. On TikTok and Discord, it helps your display name stand out in a sea of plain text. For messaging apps like WhatsApp and iMessage, a cursive sign-off adds warmth to everyday conversations. You can also use it for Pinterest pin titles, digital journal headings, and creative email subject lines."
      }
    ],
    faqs: [
      {
        question: "Why does cursive text look different on different devices?",
        answer: "Each device and platform renders Unicode characters with its own set of fallback fonts. The letters and their structure stay the same, but subtle differences in line weight, slant, and spacing can appear between iOS, Android, Windows, and macOS."
      },
      {
        question: "Can I use this for long sentences too?",
        answer: "Yes, the generator works for names, short phrases, and full sentences. That said, shorter snippets tend to look cleaner and are easier to fit into profile fields and captions without getting cut off."
      }
    ],
    related: [
      {
        slug: "text-to-cursive-generator",
        label: "Text to Cursive Generator",
        description: "A conversion-focused tool for turning plain text into cursive output step by step."
      },
      {
        slug: "cursive-text-generator-copy-and-paste",
        label: "Cursive Copy and Paste",
        description: "Optimized for quick copy-and-paste workflow across social platforms."
      },
      {
        slug: "cursive-font-generator",
        label: "Cursive Font Generator",
        description: "Compare multiple cursive style directions for branding and visual projects."
      }
    ]
  },

  "cursive-font-generator": {
    slug: "cursive-font-generator",
    pathname: "/cursive-font-generator",
    category: "font",
    eyebrow: "Core Page",
    title: "Cursive Font Generator - Create Stylish Cursive Fonts | Inkspell",
    description: "Explore elegant cursive font styles instantly. Use this cursive font generator to create stylish text for names, logos, bios, and creative projects.",
    h1: "Cursive Font Generator",
    heroTitle: "Cursive Font Generator",
    heroDescription: "Create stylish cursive font text in seconds and compare several graceful directions before copying your favorite result.",
    intro: "Looking for the perfect cursive look but not sure which style fits? This cursive font generator lets you preview your text across four distinct cursive directions side by side — from flowing Classic Script to clean Studio Line. Type any word, name, or phrase and instantly compare styles to find the one that matches your aesthetic, whether it is for a logo draft, a brand moodboard, or a styled social bio.",
    samplePrompt: "Studio Signature",
    examples: ["Atelier Notes", "hazel & ivory", "Luna Bloom", "signature weekend"],
    useCases: ["logo ideas", "packaging mockups", "bio styling", "cover artwork", "event cards", "brand accents"],
    infoSections: [
      {
        title: "Preview multiple cursive font styles at once",
        body: "Instead of guessing which cursive direction looks best, you can see all four styles applied to your exact text at the same time. Classic Script gives you a traditional decorative cursive with elegant flourishes. Formal Hand is bolder and more structured — great for names and headings. Airy Cursive is light and modern, ideal for minimalist bios. Studio Line uses a refined serif italic that works well for branding and professional contexts."
      },
      {
        title: "When to use cursive fonts in your projects",
        body: "Cursive fonts shine in contexts where you want to add warmth, elegance, or personality. They work exceptionally well for soft branding and logo concepts, wedding and event stationery, social media profile styling, boutique product names, and decorative accent text. A clean cursive style can make a brand feel more personal without sacrificing readability, while more ornate styles are perfect for short display text and hero headlines."
      }
    ],
    faqs: [
      {
        question: "Is this a real downloadable font generator?",
        answer: "No — this tool generates stylized Unicode text that you can copy and paste instantly. It is not a font file downloader. The advantage is that your cursive text works everywhere without anyone needing to install a font. If you need actual .ttf or .otf font files for design software, sites like Google Fonts or DaFont are better starting points."
      },
      {
        question: "Which style is best for logos?",
        answer: "For logos, Studio Line and Formal Hand tend to work best because they are cleaner and more structured at small sizes. Highly ornate cursive styles can become hard to read when scaled down. Try typing your brand name into all four styles and comparing them at different sizes to see which holds up."
      }
    ],
    related: [
      {
        slug: "cursive-alphabet-generator",
        label: "Cursive Alphabet Generator",
        description: "Browse cursive letters A through Z one at a time for detailed style comparison."
      },
      {
        slug: "cursive-text-generator",
        label: "Cursive Text Generator",
        description: "Generate ready-to-copy cursive text for social media posts and messages."
      },
      {
        slug: "home",
        label: "Main Generator",
        description: "The homepage tool for quick general-purpose cursive text generation."
      }
    ]
  },

  "cursive-signature-generator": {
    slug: "cursive-signature-generator",
    pathname: "/cursive-signature-generator",
    category: "signature",
    eyebrow: "Core Page",
    title: "Cursive Signature Generator - Create Handwritten Signature Styles | Inkspell",
    description: "Create elegant cursive signature styles online. Enter your name, preview handwritten signature ideas, and copy the style that fits your personal or professional use.",
    h1: "Cursive Signature Generator",
    heroTitle: "Cursive Signature Generator",
    heroDescription: "Create signature-style cursive text from your name for email sign-offs, creative branding, cards, and polished profile details.",
    intro: "A well-styled signature adds a sense of personality and finish to your digital presence. This cursive signature generator takes your name and renders it in elegant, handwritten-style cursive that feels personal and polished. Use it to design email sign-offs, author credits, digital card signatures, or small-business branding touches — all without touching a pen or scanning anything.",
    samplePrompt: "Olivia Hart",
    examples: ["Noah Avery", "Chloe Bennett", "Isla Winters", "Warm regards, Emma"],
    useCases: ["email signatures", "digital cards", "small-business branding", "author sign-offs", "invitation details", "profile banners"],
    infoSections: [
      {
        title: "Generate cursive signature ideas instantly",
        body: "Type your name into the tool and you will see it rendered across four signature-ready cursive styles. Classic Script gives a traditional flowing signature feel with decorative letterforms. Formal Hand produces a bolder, more confident signature look. Airy Cursive is lighter and more casual — good for creative and lifestyle contexts. Studio Line delivers a refined serif italic that works well for professional email footers and business use."
      },
      {
        title: "Where to use a digital cursive signature",
        body: "Email footers are the most common use case — a cursive sign-off under your name adds warmth to client and team communications. Content creators and authors often use cursive signatures in video end cards, newsletter footers, and digital products. Small business owners add them to PDF invoices, digital thank-you notes, and social media announcement graphics. They also work well on personal websites, online portfolios, and virtual invitation designs."
      }
    ],
    faqs: [
      {
        question: "Will this create a legally valid handwritten signature?",
        answer: "No. This tool generates stylized text that looks like a signature — it does not produce a legally binding electronic signature. Legal and contractual signature requirements vary by country and document type. For official documents that require verified e-signatures, use dedicated services like DocuSign or Adobe Sign."
      },
      {
        question: "Should I use my full name or just a first name?",
        answer: "Both work well, but they create different impressions. A full name like 'Elizabeth Chen' feels more formal and complete — ideal for professional email footers and business use. A first name like 'Elizabeth' feels more personal and approachable, which works better for creative profiles, personal blogs, and casual sign-offs."
      }
    ],
    related: [
      {
        slug: "cursive-name-generator",
        label: "Cursive Name Generator",
        description: "Style your name in elegant cursive for profiles, usernames, and personal branding."
      },
      {
        slug: "cursive-handwriting-name-generator",
        label: "Handwriting Name Generator",
        description: "Create softer, more personal handwritten-style name treatments."
      },
      {
        slug: "home",
        label: "Main Generator",
        description: "The general-purpose cursive text tool for all use cases."
      },
      {
        slug: "name-in-cursive-generator",
        label: "Name in Cursive Generator",
        description: "Another popular phrasing for writing any name in flowing cursive styles."
      }
    ]
  },

  "cursive-name-generator": {
    slug: "cursive-name-generator",
    pathname: "/cursive-name-generator",
    category: "name",
    eyebrow: "Core Page",
    title: "Cursive Name Generator - Turn Your Name into Cursive | Inkspell",
    description: "Use this cursive name generator to write your name in stylish cursive text. Great for nicknames, profile names, signatures, and social media identity ideas.",
    h1: "Cursive Name Generator",
    heroTitle: "Cursive Name Generator",
    heroDescription: "Write your name in cursive instantly for usernames, profile names, signature ideas, and stylish personal branding moments.",
    intro: "Your name is your identity online, and how you present it matters. This cursive name generator lets you type any name — yours, a friend's, a character name, a brand name — and instantly see it styled in beautiful flowing cursive. Browse all four styles, pick the one that captures the personality you want to project, and copy it straight into your social profile, creator page, or personal project.",
    samplePrompt: "Mia Florence",
    examples: ["Harper Quinn", "Luca Rhodes", "Amelia Grace", "Aria Sol"],
    useCases: ["username ideas", "display names", "creator profiles", "wedding place cards", "signature prep", "nickname styling"],
    infoSections: [
      {
        title: "Generate cursive name styles online",
        body: "Enter the name you want to style and the generator instantly applies four distinct cursive treatments. Classic Script wraps each letter in traditional decorative cursive swirls — great for a romantic or vintage feel. Formal Hand is bolder and more defined, ideal for usernames that need to stand out. Airy Cursive keeps things light and contemporary, perfect for minimalist profiles. Studio Line brings a polished serif-italic look that suits professional landing pages and portfolio sites."
      },
      {
        title: "Use your cursive name across social media and creative projects",
        body: "A cursive name works across many contexts. On Instagram and TikTok, it makes your display name feel curated and intentional. For YouTube and Twitch, it adds personality to your channel branding. Creators on platforms like Patreon and Ko-fi use cursive names in their page headers and thank-you messages. Off social media, cursive names work beautifully on wedding place cards, event seating charts, digital invitation designs, and personalized gift tags."
      }
    ],
    faqs: [
      {
        question: "Can I use this for nicknames and usernames too?",
        answer: "Absolutely. Many people use cursive name generators for gaming handles, creator aliases, nickname styling, and display-only identity text. Short nicknames often look especially clean and balanced in cursive styles."
      },
      {
        question: "Do longer names still look good in cursive?",
        answer: "Yes, though shorter names and first-name-only versions tend to feel cleaner and more balanced in decorative cursive styles. If you have a longer name like 'Alexandria Josephine,' try styling just 'Alexandria' or 'Alex' for a tighter visual result."
      }
    ],
    related: [
      {
        slug: "name-in-cursive-generator",
        label: "Name in Cursive Generator",
        description: "Another way to write any name in cursive with the same style options."
      },
      {
        slug: "cursive-signature-generator",
        label: "Cursive Signature Generator",
        description: "Focused on formal handwritten signature styles for email and branding."
      },
      {
        slug: "cursive-handwriting-name-generator",
        label: "Handwriting Name Generator",
        description: "Softer, more casual handwritten-style name output for cards and invites."
      }
    ]
  },

  "text-to-cursive-generator": {
    slug: "text-to-cursive-generator",
    pathname: "/text-to-cursive-generator",
    category: "text",
    eyebrow: "Core Page",
    title: "Text to Cursive Generator - Convert Plain Text Online | Inkspell",
    description: "Convert plain text to cursive online in one click. Create elegant cursive writing for notes, bios, captions, names, and stylish copy-and-paste text.",
    h1: "Text to Cursive Generator",
    heroTitle: "Text to Cursive Generator",
    heroDescription: "Convert plain text to cursive in one step, then copy your favorite result for social media, signatures, captions, and elegant notes.",
    intro: "Got some plain text that needs a stylish upgrade? This text-to-cursive converter takes whatever you type — a name, a phrase, a caption, a note — and instantly transforms it into elegant cursive lettering across four distinct styles. The before-and-after is immediate, and you can copy the result in one click. No font downloads, no design skills, no waiting.",
    samplePrompt: "convert this into grace",
    examples: ["from plain to polished", "weekend in motion", "letters with atmosphere", "turn this into a signature feel"],
    useCases: ["before-and-after demos", "copy styling", "caption polishing", "bio formatting", "invitation language", "name conversion"],
    infoSections: [
      {
        title: "How to convert text to cursive online",
        body: "The process is simple. Type or paste your plain text into the input box at the top of the page. The tool instantly converts it into four cursive styles: Classic Script for a traditional handwritten look, Formal Hand for bold and defined lettering, Airy Cursive for a light modern feel, and Studio Line for a clean serif italic. Browse the results, pick the style that fits your context, and click Copy. Then paste it wherever you need it — a bio, a caption, a message, a document."
      },
      {
        title: "When a text-to-cursive tool is the right choice",
        body: "This tool is perfect for those moments when plain text feels too flat and you want to add a touch of elegance without overcomplicating things. Use it to polish social media captions before posting, to create matching aesthetic bios across multiple platforms, to style invitation wording for digital events, to add cursive headers to your online shop or portfolio, and to give personal messages a warmer, more thoughtful feel before hitting send."
      }
    ],
    faqs: [
      {
        question: "How is this different from the main cursive text generator page?",
        answer: "Both pages generate beautiful cursive text. This page is specifically optimized for people who search with a 'convert' mindset — you have plain text and know you want it transformed. The tool and styles are the same, but the guidance and examples here are tuned to that before-and-after way of thinking."
      },
      {
        question: "Can I paste paragraphs here?",
        answer: "Yes, the tool handles longer input. However, cursive styles tend to look best on short to medium-length text. For paragraphs, consider generating shorter segments separately so each line stays clean and readable."
      }
    ],
    related: [
      {
        slug: "cursive-text-generator",
        label: "Cursive Text Generator",
        description: "The broader text styling page with more general-purpose examples and guidance."
      },
      {
        slug: "cursive-text-generator-copy-and-paste",
        label: "Cursive Copy and Paste",
        description: "Built for quick copy-and-paste workflow — ideal when speed is your priority."
      },
      {
        slug: "home",
        label: "Main Generator",
        description: "The homepage tool covering all cursive use cases in one place."
      }
    ]
  },

  "cursive-text-generator-copy-and-paste": {
    slug: "cursive-text-generator-copy-and-paste",
    pathname: "/cursive-text-generator-copy-and-paste",
    category: "copy",
    eyebrow: "Scenario Page",
    title: "Cursive Text Generator Copy and Paste - Ready to Use Text | Inkspell",
    description: "Generate cursive text you can copy and paste anywhere. Create stylish cursive writing for Instagram bios, TikTok names, messages, captions, and profiles.",
    h1: "Cursive Text Generator Copy and Paste",
    heroTitle: "Cursive Text Generator Copy and Paste",
    heroDescription: "Generate cursive text and copy it instantly for Instagram, TikTok, Discord, WhatsApp, profile names, and quick decorative posting.",
    intro: "You are here for one reason: you need cursive text, and you need it fast. This page is built for speed — generate elegant cursive writing in four styles, copy the one you want with a single click, and paste it directly into Instagram, TikTok, Discord, WhatsApp, or wherever you need it. No fluff, no long explainers, just instant copy-and-paste cursive text that works.",
    samplePrompt: "copy this to my bio",
    examples: ["soft launch diary", "midnight moodboard", "Avery on air", "see you in italics"],
    useCases: ["Instagram bios", "TikTok names", "Discord profiles", "WhatsApp statuses", "caption styling", "Pinterest board names"],
    infoSections: [
      {
        title: "Copy and paste cursive text in seconds",
        body: "Type your text at the top of the page and you will immediately see it rendered in four cursive styles. Each style card has its own Copy button. Click it, and the styled text is on your clipboard — ready to paste into any app. On mobile, simply tap and the copy happens instantly. Switch between apps, paste, and you are done. The entire workflow takes under ten seconds once you know which style you want."
      },
      {
        title: "Platforms where cursive text works best",
        body: "Instagram bios and captions are the most popular destination — cursive text adds instant personality to your profile grid. TikTok display names benefit from cursive styling that catches the eye as people scroll. Discord usernames and server nicknames support these Unicode characters, making your name stand out in chat. WhatsApp about sections and status messages also accept cursive text. Pinterest board names, Telegram profiles, and Twitter/X display names are all compatible too."
      }
    ],
    faqs: [
      {
        question: "Will copied cursive text work on Instagram and TikTok?",
        answer: "Yes. Instagram bios, captions, and TikTok display names all accept Unicode cursive characters. The text will display in its styled form on both iOS and Android. Keep in mind that some older Android devices may render certain characters slightly differently, but the overall cursive effect remains intact."
      },
      {
        question: "Why is there a separate copy-and-paste page?",
        answer: "Because the search intent is different. When people add 'copy and paste' to their search, they usually want to act immediately — generate, copy, paste, done. This page is streamlined for that fast workflow with minimal reading and maximum emphasis on the copy buttons."
      }
    ],
    related: [
      {
        slug: "cursive-text-generator",
        label: "Cursive Text Generator",
        description: "More detailed guidance and examples for general cursive text generation."
      },
      {
        slug: "text-to-cursive-generator",
        label: "Text to Cursive Generator",
        description: "A conversion-first angle for users who think in before-and-after terms."
      },
      {
        slug: "home",
        label: "Main Generator",
        description: "The homepage tool for all-purpose cursive text generation."
      }
    ]
  },

  "cursive-handwriting-name-generator": {
    slug: "cursive-handwriting-name-generator",
    pathname: "/cursive-handwriting-name-generator",
    category: "name",
    eyebrow: "Scenario Page",
    title: "Cursive Handwriting Name Generator - Handwritten Name Styles | Inkspell",
    description: "Turn your name into handwritten cursive text online. Explore soft, elegant handwriting-style names for cards, signatures, creative projects, and social profiles.",
    h1: "Cursive Handwriting Name Generator",
    heroTitle: "Cursive Handwriting Name Generator",
    heroDescription: "Create handwritten cursive name styles online for cards, signatures, invitations, profile details, and gentle personal branding ideas.",
    intro: "There is something special about a name written by hand — it feels personal, warm, and intentional. This handwriting name generator captures that feeling digitally, turning any name into soft, flowing cursive that looks like it came from a pen. Perfect for invitation cards, greeting messages, personal branding, or whenever you want a name to feel more human and less typed.",
    samplePrompt: "Lily Monroe",
    examples: ["Daisy Rowan", "Mila Hayes", "Evelyn Shore", "Clara Bloom"],
    useCases: ["invitation names", "greeting cards", "signature moodboards", "display names", "craft labels", "creator intros"],
    infoSections: [
      {
        title: "Create soft, handwriting-style cursive names",
        body: "Type any name into the tool to see it rendered across four handwriting-inspired cursive directions. Classic Script gives you flowing pen-like strokes with graceful loops — the closest match to traditional cursive handwriting. Formal Hand is slightly more structured while keeping that handwritten warmth. Airy Cursive is light, airy, and modern — like a quick elegant note. Studio Line adds a refined touch that bridges handwriting and professional styling, ideal for cards and invitations."
      },
      {
        title: "Best uses for handwritten cursive names",
        body: "Handwritten name styles are perfect for digital wedding invitations, save-the-date cards, and event stationery where a personal touch matters. Greeting card designers and crafters use them for custom birthday, thank-you, and holiday messages. Content creators add handwritten name intros to video thumbnails and channel art. Small business owners in the wedding, gifting, and stationery space use them for product mockups and branding visuals that need to feel warm and personal rather than corporate."
      }
    ],
    faqs: [
      {
        question: "What makes handwriting style different from regular cursive text?",
        answer: "Handwriting-style cursive tends to feel softer, more organic, and less formal than standard decorative cursive. Think of the difference between a quick personal note and a formal engraved invitation — both are cursive, but the handwriting style feels warmer and more spontaneous. Our Classic Script and Airy Cursive styles lean most into this handwritten feel."
      },
      {
        question: "Can I use this for invitation mockups?",
        answer: "Yes, this is one of the most popular uses. Type the names of the couple, the hosts, or the guests and copy the styled text directly into Canva, Photoshop, or any design tool you are using to build your invitation layout. Since the output is plain text, you can paste it into any text layer and adjust the size and color to match your design."
      }
    ],
    related: [
      {
        slug: "cursive-name-generator",
        label: "Cursive Name Generator",
        description: "Broader name styling page covering all identity and profile use cases."
      },
      {
        slug: "cursive-signature-generator",
        label: "Cursive Signature Generator",
        description: "More formal signature-style output for professional and business contexts."
      },
      {
        slug: "name-in-cursive-generator",
        label: "Name in Cursive Generator",
        description: "Another way to write any name in cursive with the same four style options."
      }
    ]
  },

  "cursive-alphabet-generator": {
    slug: "cursive-alphabet-generator",
    pathname: "/cursive-alphabet-generator",
    category: "alphabet",
    eyebrow: "Scenario Page",
    title: "Cursive Alphabet Generator - Cursive Letters A to Z | Inkspell",
    description: "Explore cursive alphabet letters from A to Z. Copy uppercase and lowercase cursive letters, preview styles, and use them for learning, design, and creative text.",
    h1: "Cursive Alphabet Generator",
    heroTitle: "Cursive Alphabet Generator",
    heroDescription: "Browse cursive alphabet letters from A to Z, compare uppercase and lowercase styles, and copy individual letters for names, branding, and design work.",
    intro: "Sometimes you do not need a whole word — you just need to see how a single letter looks in cursive. This cursive alphabet page lets you browse every letter from A to Z in multiple cursive styles, compare uppercase and lowercase forms side by side, and copy individual letters for initials, monograms, learning, or design reference. Think of it as your visual cursive letter catalog.",
    samplePrompt: "Alphabet Study",
    examples: ["Aa", "Mm", "Rr", "Zz"],
    useCases: ["letter references", "name planning", "branding initials", "monogram ideas", "learning cursive shapes", "single-letter styling"],
    infoSections: [
      {
        title: "Uppercase cursive alphabet",
        body: "Uppercase cursive letters are the showpieces of the alphabet — used for initials, monograms, branding marks, and decorative first letters. Each uppercase letter from A to Z is available in multiple cursive styles, from flowing Classic Script capitals to structured Studio Line capitals. Browse the full uppercase set to find the right look for your initial-based logo, monogram design, or decorative drop cap."
      },
      {
        title: "Lowercase cursive alphabet",
        body: "Lowercase cursive letters show you how words will actually flow and connect. Comparing lowercase letters across styles helps you judge readability — some cursive directions are airier and more legible, while others are more decorative and ornate. Use the lowercase alphabet to preview how your name or word will look letter by letter before committing to a full text style."
      }
    ],
    faqs: [
      {
        question: "Can I copy just one cursive letter at a time?",
        answer: "Yes. The alphabet grid is designed for letter-by-letter browsing and copying. Click any letter card to copy that single cursive character — perfect for building custom monograms, testing initial designs, or assembling letter-based artwork one character at a time."
      },
      {
        question: "Is this page useful for learning cursive handwriting?",
        answer: "It works well as a visual reference for comparing cursive letter shapes and understanding how different styles treat the same character. However, it is primarily a styling and browsing tool rather than a step-by-step handwriting curriculum. For formal handwriting practice, printable worksheets and guided tracing resources will be more effective."
      }
    ],
    related: [
      {
        slug: "cursive-font-generator",
        label: "Cursive Font Generator",
        description: "Move from single letters to full words and phrases with style comparison."
      },
      {
        slug: "cursive-text-generator",
        label: "Cursive Text Generator",
        description: "Generate complete words and sentences in cursive for social media and messages."
      },
      {
        slug: "home",
        label: "Main Generator",
        description: "The homepage cursive tool for quick general-purpose text generation."
      }
    ]
  },

  "name-in-cursive-generator": {
    slug: "name-in-cursive-generator",
    pathname: "/name-in-cursive-generator",
    category: "name",
    eyebrow: "Support Page",
    title: "Name in Cursive Generator - Write Any Name in Cursive | Inkspell",
    description: "Write any name in cursive instantly. Explore elegant name styles for profiles, invitations, signatures, and social media handles.",
    h1: "Name in Cursive Generator",
    heroTitle: "Name in Cursive Generator",
    heroDescription: "Write any name in cursive and compare elegant styles built for profile names, invitations, signatures, and decorative display.",
    intro: "Type any name and see it instantly written in beautiful cursive lettering — it is that simple. Whether you are styling your own name for a profile page, helping a friend find the perfect cursive treatment for their wedding invitation, or just curious how a particular name looks in flowing script, this tool gives you four elegant options and one-click copy.",
    samplePrompt: "Charlotte May",
    examples: ["Ella Brooks", "Liam Carter", "Sofia Lane", "Mason Vale"],
    useCases: ["name styling", "event cards", "usernames", "display names", "signature prep", "visual identity"],
    infoSections: [
      {
        title: "Write any name in cursive instantly",
        body: "Enter the name — any name — and the generator instantly renders it in four distinct cursive styles. Classic Script delivers traditional flowing cursive with decorative letterforms that feel timeless. Formal Hand is bolder and more structured, great for names that need to make an impression. Airy Cursive is light and contemporary, ideal for minimalist profiles. Studio Line offers a polished serif italic that works across casual and professional contexts. Pick the style that fits, click Copy, and paste it wherever you need it."
      },
      {
        title: "Where cursive names make the biggest impact",
        body: "Social media display names on Instagram, TikTok, and Twitter/X look instantly more curated with a cursive treatment. Digital invitation designs and event seating charts benefit from the personal, handcrafted feel of cursive names. Content creators use cursive name styling in video intros, thumbnail text, and channel headers. Small businesses add cursive names to product mockups, packaging concepts, and client-facing documents for an elevated touch."
      }
    ],
    faqs: [
      {
        question: "Is this different from the main cursive name generator page?",
        answer: "Both pages let you write names in cursive with the same four styles. This page is optimized for a slightly different search phrase — 'name in cursive' — and the examples and guidance here are tuned to that specific wording. Functionally, both give you beautiful cursive name output you can copy and use anywhere."
      },
      {
        question: "Can I use this for first names only?",
        answer: "Yes. In fact, first names often work especially well in cursive because they are shorter and feel more personal. A single first name like 'Eleanor' or 'James' tends to look cleaner and more balanced in decorative cursive styles than a longer full name."
      }
    ],
    related: [
      {
        slug: "cursive-name-generator",
        label: "Cursive Name Generator",
        description: "The primary name styling page with broader examples and identity-focused guidance."
      },
      {
        slug: "cursive-handwriting-name-generator",
        label: "Handwriting Name Generator",
        description: "Softer, more personal handwriting-style name output for cards and invites."
      },
      {
        slug: "cursive-signature-generator",
        label: "Cursive Signature Generator",
        description: "Formal signature-style output for professional email and business branding."
      }
    ]
  }
};

export function getPageContent(slug: string) {
  return pages[slug];
}
