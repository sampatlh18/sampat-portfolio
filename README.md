# Sampat Laxman Holabasappagol — Portfolio

A responsive React + Vite portfolio website with a dark navy/purple visual theme, Framer Motion reveal animations, floating ambient particles, a spring-based scroll progress bar, animated hero artwork, interactive card hover effects, responsive navigation, project showcases, and a contact form that opens the visitor's email application.

## 1. Requirements

- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm
- VS Code (recommended editor)

## 2. Run locally

1. Extract `sampat-portfolio.zip`.
2. Open the extracted `sampat-portfolio` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL printed by Vite (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## 3. Personalize your portfolio

### Profile details and social links

Edit `src/data/portfolio.js`.

- Update `profile.name`, `profile.email`, `profile.phone`, `profile.location`, `profile.summary`, `profile.about`, and `profile.goal` if needed.
- Replace the example `profile.social.github` and `profile.social.linkedin` URLs with your real public profile URLs.

### Resume PDF

The current resume is stored at:

```text
public/sampat-resume.pdf
```

Replace that file with your latest resume, keeping the same filename. The hero's **Download Resume** button already points to it.

### Profile photo

The hero currently uses a custom initials-based developer visual (`SH`) because the supplied resume did not include a profile photograph. If you want to use your own photograph:
1. Add a square portrait to `public/profile.jpg`.
2. In `src/components/Hero.jsx`, replace the `avatar-initials` element with:

   ```jsx
   <img className="avatar-photo" src="/profile.jpg" alt="Sampat Laxman Holabasappagol" />
   ```

3. Add this CSS to `src/styles.css`:

   ```css
   .avatar-photo {
     position: relative;
     z-index: 1;
     width: 92px;
     height: 92px;
     border-radius: 50%;
     object-fit: cover;
     border: 1px solid rgba(255,255,255,.12);
   }
   ```

### Project links and PetHub technologies

In `src/data/portfolio.js`, replace each project's `demoUrl` and `githubUrl` example URLs with the real links. The PetHub technology stack was not specified in the supplied resume, so it is intentionally left unfilled. Add only the technologies actually used.

### Contact form

The contact form uses a `mailto:` link. When a visitor submits it, their default email application opens with the message prefilled and addressed to `sampatlh21@gmail.com`. It does not store messages on a server.

For a server-backed form, connect the `submit` handler in `src/components/Contact.jsx` to an API endpoint or a form service such as Formspree. Add server-side validation and spam protection before using it publicly.

## 4. Deploy

### Vercel

1. Push the extracted project to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. Keep the framework preset as **Vite**.
5. Set Build Command to `npm run build`.
6. Set Output Directory to `dist`.
7. Select **Deploy**.

### Netlify

1. Push the project to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the repository.
4. Set Build Command to `npm run build`.
5. Set Publish Directory to `dist`.
6. Deploy the site.

No environment variables are required for this frontend-only version.

## 5. Project structure

```text
sampat-portfolio/
├── public/
│   ├── favicon.svg
│   └── sampat-resume.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectVisual.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```


## 6. Visual preview

Open `preview/portfolio-preview.html` in a browser for a quick static look at the layout. The `preview/` folder also contains desktop and mobile screenshots. The static preview is for appearance only; use `npm run dev` to run the interactive React application.

## Notes

- The project uses React, Vite, Framer Motion and Lucide React.
- Skill cards deliberately avoid percentage scores because the resume does not provide verified proficiency ratings.
- The project artwork is an in-page illustrative UI concept, not a screenshot of a deployed product.
- The LinkedIn, GitHub, Live Demo and repository URLs are example placeholders and should be replaced before publishing.
