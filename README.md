# Asega Mudenyo — Portfolio Landing Page

A responsive, accessible one-page portfolio designed to serve as the destination for a business-card QR code.

## Add your contact details

Open `profile.js` and add the public values you want displayed:

```js
window.PROFILE = {
  email: "haggai.asega@gmail.com",
  phone: "+1 (626) 879-3719",
  linkedin: "https://linkedin.com/in/haggai-mudenyo-442189188",
  github: "https://github.com/mudenho",
  resume: ""
};
```

Blank values stay hidden automatically. The résumé is intentionally disabled.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a public GitHub repository.
2. Upload these files to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose `main` and `/ (root)`, then save.

GitHub will provide the public URL. Use that URL—or a custom domain connected to it—for the business-card QR code.
