# 🧠 Devtronic Hugo Theme

> *A sleek, modern Hugo theme inspired by the digital glow of the Matrix — elegant, legible, and engineered for developers who appreciate beauty in logic.*

---

## ✨ Overview

**Devtronic** is a responsive, semantic Hugo theme designed for developer blogs, tech journals, and digital portfolios.
It draws visual inspiration from terminal aesthetics — think **emerald phosphor glow**, **matte blacks**, and **precise typography** — but refined with subtle gradients, soft shadows, and accessible contrast.

Clean structure, thoughtful hierarchy, and performance-first CSS make it ideal for developers who want a *modern retro-futurist* feel without the eyestrain of a pure neon palette.

---

## 🎨 Key Features

* 🧩 **Semantic HTML5 structure** with ARIA-friendly markup
* ⚙️ **CSS Grid & Flexbox layout** — fully responsive
* 🌗 **Dark-mode optimized** out of the box
* 💚 **Matrix-inspired accent palette** (`#00FF99`, `#0affc2`, `#1B1B1B`, `#121212`)
* 🪶 **Zero-JS core** for lightning-fast page loads
* 🔤 **Beautiful monospace + geometric sans typography**
* 🖼️ **Customizable header glow** and hero overlay effects
* 🧰 **Shortcodes** for code snippets, callouts, and content grids
* 🧭 **Accessible navigation** and keyboard-friendly focus states
* 🪞 **Built-in syntax highlighting** for all major programming languages

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
  mastodon = "https://mastodon.social/@yourhandle"
  bluesky = "yourhandle.bsky.social"
  instagram = "yourhandle"
  facebook = "yourhandle"
  threads = "yourhandle"
  snapchat = "yourhandle"

  # Communities
  reddit = "yourusername"
  discord = "https://discord.gg/yourinvite"
  telegram = "yourhandle"
  whatsapp = "1234567890"
  matrix = "https://matrix.to/#/@user:server.org"

  # Developer platforms
  gitlab = "yourusername"
  bitbucket = "yourusername"
  stackoverflow = "12345678"
  codepen = "yourhandle"

  # Design portfolios
  dribbble = "yourhandle"
  behance = "yourhandle"

  # Creator support
  patreon = "yourhandle"
  kofi = "yourhandle"
  buymeacoffee = "yourhandle"

  # Music/Audio
  spotify = "https://open.spotify.com/user/yourhandle"
  soundcloud = "yourhandle"
  bandcamp = "yourhandle"

  # Other
  pinterest = "yourhandle"
```

**Supported platforms (30+ total):**

| Category         | Platforms                                                 |
| ---------------- | --------------------------------------------------------- |
| **Core**         | GitHub, Twitter/X, LinkedIn, Email                        |
| **Content**      | YouTube, Medium, Dev.to, TikTok, Twitch                   |
| **Social Media** | Mastodon, Bluesky, Instagram, Facebook, Threads, Snapchat |
| **Communities**  | Reddit, Discord, Telegram, WhatsApp, Matrix               |
| **Developer**    | GitLab, Bitbucket, Stack Overflow, CodePen                |
| **Design**       | Dribbble, Behance                                         |
| **Support**      | Patreon, Ko-fi, Buy Me a Coffee                           |
| **Music/Audio**  | Spotify, SoundCloud, Bandcamp                             |
| **Other**        | Pinterest                                                 |

Icons automatically appear in the sidebar for any configured social links. All icons follow accessible design patterns with proper ARIA labels and semantic markup.

---

## 📬 Contact Page

The theme includes a simple, social-first contact page that automatically pulls your social links from `config.toml`.

This approach:

* Professional
* Zero maintenance
* Zero privacy concerns
* DRY
* Used by most top developer blogs

The contact page (`content/contact.md`) displays links for:

* LinkedIn (`linkedin`)
* GitHub (`github`)
* Bluesky (`bluesky`)

Want a contact form instead?

The theme also includes a ready-to-use contact form layout (`layouts/_default/contact.html`) compatible with:

* Basin (100 free submissions/month)
* Formspree
* Netlify Forms
* Getform

Enable it by adding `layout: "contact"` to your contact page’s frontmatter.

---

## 🛠 Customization

(Your section content can go here.)

---

## 📜 Inspiration & Credits

This theme was designed and developed as an original work, but it draws on several common patterns and publicly available reference materials used widely across the Hugo ecosystem. To acknowledge these sources and maintain transparency:

* **Chroma Syntax Highlighting**
  Portions of the syntax-highlighting stylesheet are adapted from the default CSS structures generated by Hugo’s built-in `hugo gen chromastyles` command and examples from the Chroma project. These provide the baseline class names and structure used by most Hugo themes.

* **Schema.org Markup Patterns**
  Some of the semantic HTML patterns (such as the `BlogPosting` microdata structure) follow examples from Schema.org and Google Search Central documentation, which are public standards intended for reuse.

* **General Hugo Community Conventions**
  Layout patterns such as partials for headers/footers, sidebar organization, and common template blocks (single, list, baseof) echo established practices from the broader Hugo community. These are architectural conventions, not code copies, and are implemented in original form here.

No code from any specific Hugo theme was copied verbatim during the creation of Devtronic. Any similarities are the result of shared ecosystem norms, boilerplate structures from Hugo’s documentation, or widely used SEO best practices.

---

## 📄 License

This theme is released under the **GPL-3.0** license.
You are free to use, modify, and redistribute it under the terms of the GPL.
