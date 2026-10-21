# Sakthi Ganapathi Raja — Portfolio Website

A responsive, single-page portfolio built with HTML5, CSS3, vanilla JavaScript, Bootstrap 5.3, and Bootstrap Icons. The profile and project content is based on the uploaded resume.

## Folder structure

```text
sakthi_portfolio/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Run locally (Windows)

1. Download and extract `sakthi_portfolio.zip`.
2. Open the extracted `sakthi_portfolio` folder in VS Code.
3. Open `index.html` in a browser. For a smoother development workflow, install the **Live Server** extension in VS Code, right-click `index.html`, and choose **Open with Live Server**.
4. Edit content in `index.html`; customize colors, spacing, and layout in `css/style.css`; add interactions in `js/script.js`.
5. Refresh the browser to see changes.

No Node.js install or build step is required. Bootstrap and Google Fonts load from CDNs, so an internet connection is needed for those assets.

## Sections included

- Hero / introduction
- About and contact details
- Skills
- Professional experience timeline
- Banking Cashback Rewards and Supply Chain Management projects
- Education
- Contact actions (email, phone, copy email)

## Before publishing

- Confirm that your phone number, email, location, and employment dates are current.
- Add a real professional headshot if desired (the initials avatar is a placeholder).
- Add LinkedIn and GitHub URLs only after verifying the exact profile links.
- Consider whether you want your phone number displayed publicly.
- Deploy the folder to GitHub Pages, Netlify, or another static-hosting provider.

## Customization tips

- To change the hero headline, search for `Hi, I'm` in `index.html`.
- To add a project, copy one `.project-card` block and update its title, description, bullets, and technology tags.
- To change the accent color, edit `--primary` and `--cyan` in `css/style.css`.
