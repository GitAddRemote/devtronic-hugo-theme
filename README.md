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

### Contact Form Setup

The theme includes a secure, spam-free contact form powered by [Basin](https://usebasin.com) that doesn't expose your email address publicly.

**Setup Instructions:**

1. **Sign up for Basin** (free tier includes 100 submissions/month)
   - Go to [https://usebasin.com](https://usebasin.com)
   - Create a free account

2. **Create a new form**
   - Click "Create Form" in your Basin dashboard
   - Give it a name (e.g., "Website Contact Form")
   - Copy your form endpoint URL (looks like `https://usebasin.com/f/XXXXXXXXXX`)

3. **Configure your Hugo site**
   - Open `config.toml`
   - Find the `basinFormEndpoint` parameter under `[params]`
   - Replace `YOUR_FORM_ID` with your actual Basin form endpoint:
   ```toml
   [params]
     basinFormEndpoint = "https://usebasin.com/f/XXXXXXXXXX"
   ```

4. **Customize email notifications** (optional)
   - In Basin dashboard, configure where form submissions should be sent
   - Set up custom email templates
   - Configure spam filtering rules

**Features:**
- ✅ **Spam Protection**: Honeypot field catches bots automatically
- ✅ **Client-side Validation**: Real-time feedback for users
- ✅ **Accessible**: WCAG AA compliant with ARIA labels
- ✅ **Matrix-themed**: Styled to match the Devtronic aesthetic
- ✅ **No Email Exposure**: Your email stays private
- ✅ **Mobile Responsive**: Works perfectly on all devices

**Alternative Services:**

If you prefer not to use Basin, the contact form can be easily adapted to work with:
- Formspree (https://formspree.io)
- Netlify Forms (if hosting on Netlify)
- Getform (https://getform.io)
- Any form backend that accepts standard HTML form submissions

Simply update the `action` attribute in `layouts/_default/contact.html` to point to your preferred service.
