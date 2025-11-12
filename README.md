# 🧠 Devtronic Hugo Theme

> _A sleek, modern Hugo theme inspired by the digital glow of the Matrix — elegant, legible, and engineered for developers who appreciate beauty in logic._

---

## ✨ Overview

**Devtronic** is a responsive, semantic Hugo theme designed for developer blogs, tech journals, and digital portfolios.  
It draws visual inspiration from terminal aesthetics — think **emerald phosphor glow**, **matte blacks**, and **precise typography** — but refined with subtle gradients, soft shadows, and accessible contrast.

Clean structure, thoughtful hierarchy, and performance-first CSS make it ideal for developers who want a _modern retro-futurist_ feel without the eyestrain of a pure neon palette.

---

## 🎨 Key Features

- 🧩 **Semantic HTML5 structure** with ARIA-friendly markup
- ⚙️ **CSS Grid & Flexbox layout** — fully responsive
- 🌗 **Dark-mode optimized** out of the box
- 💚 **Matrix-inspired accent palette** (`#00FF99`, `#0affc2`, `#1B1B1B`, `#121212`)
- 🪶 **Zero-JS core** for lightning-fast page loads
- 🔤 **Beautiful monospace + geometric sans typography**
- 🖼️ **Customizable header glow** and hero overlay effects
- 🧰 **Shortcodes** for code snippets, callouts, and content grids
- 🧭 **Accessible navigation** and keyboard-friendly focus states
- 🪞 **Built-in syntax highlighting** for all major programming languages

---

## 📦 Installation

From your Hugo site directory:

```bash
cd themes
git clone https://github.com/yourusername/devtronic-hugo-theme.git devtronic
```

---

## ⚙️ Configuration

### Social Links

The theme supports an extensive range of social media and professional platforms. Add any of the following to your `config.toml` under `[params]`:

```toml
[params]
  # Core platforms
  github = "yourusername"
  twitter = "yourhandle"
  linkedin = "yourprofile"
  email = "you@example.com"

  # Content platforms
  youtube = "yourchannel"
  medium = "yourhandle"
  devto = "yourhandle"
  tiktok = "yourhandle"
  twitch = "yourchannel"

  # Social media
  mastodon = "https://mastodon.social/@yourhandle"  # Full URL
  bluesky = "yourhandle.bsky.social"
  instagram = "yourhandle"
  facebook = "yourhandle"
  threads = "yourhandle"
  snapchat = "yourhandle"

  # Communities
  reddit = "yourusername"
  discord = "https://discord.gg/yourinvite"  # Full invite URL
  telegram = "yourhandle"
  whatsapp = "1234567890"  # Phone number with country code
  matrix = "https://matrix.to/#/@user:server.org"  # Full URL

  # Developer platforms
  gitlab = "yourusername"
  bitbucket = "yourusername"
  stackoverflow = "12345678"  # Your user ID number
  codepen = "yourhandle"

  # Design portfolios
  dribbble = "yourhandle"
  behance = "yourhandle"

  # Creator support
  patreon = "yourhandle"
  kofi = "yourhandle"
  buymeacoffee = "yourhandle"

  # Music/Audio
  spotify = "https://open.spotify.com/user/yourhandle"  # Full URL
  soundcloud = "yourhandle"
  bandcamp = "yourhandle"

  # Other
  pinterest = "yourhandle"
```

**Supported platforms (30+ total):**

| Category | Platforms |
|----------|-----------|
| **Core** | GitHub, Twitter/X, LinkedIn, Email |
| **Content** | YouTube, Medium, Dev.to, TikTok, Twitch |
| **Social Media** | Mastodon, Bluesky, Instagram, Facebook, Threads, Snapchat |
| **Communities** | Reddit, Discord, Telegram, WhatsApp, Matrix |
| **Developer** | GitLab, Bitbucket, Stack Overflow, CodePen |
| **Design** | Dribbble, Behance |
| **Support** | Patreon, Ko-fi, Buy Me a Coffee |
| **Music/Audio** | Spotify, SoundCloud, Bandcamp |
| **Other** | Pinterest |

Icons will automatically appear in the sidebar for any configured social links. All icons follow accessible design patterns with proper ARIA labels and semantic markup.

### Contact Page

The theme includes a simple, social-first contact page that automatically pulls your social links from `config.toml`. This approach:

- ✅ **Zero privacy concerns** - No third-party form services or data collection
- ✅ **No maintenance** - Leverage platforms you already use
- ✅ **Professional** - Direct visitors to the right channel for their needs
- ✅ **Common pattern** - Used by most successful developer bloggers
- ✅ **DRY principle** - Configure once in config.toml, used everywhere

The contact page (`exampleSite/content/contact.md`) automatically displays links based on your social configuration:
- **LinkedIn** (`linkedin` param) - for professional opportunities and networking
- **GitHub** (`github` param) - for code discussions and technical questions
- **Bluesky** (`bluesky` param) - for general conversation and feedback

Simply configure your social handles in `config.toml` under `[params]` and the contact page will display them automatically with beautiful Matrix-themed styling.

**Want a contact form instead?**

The theme also includes a ready-to-use contact form layout (`layouts/_default/contact.html`) that can be integrated with form backend services like:
- Basin (https://usebasin.com) - 100 submissions/month free
- Formspree (https://formspree.io) - 50 submissions/month free
- Netlify Forms (if hosting on Netlify) - 100 submissions/month free
- Getform (https://getform.io) - 50 submissions/month free

To use the contact form, add `layout: "contact"` to your contact page frontmatter and configure your form backend endpoint.
