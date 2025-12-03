# maib Achievements Prototype

Mobile-focused React + Vite concept that mirrors the maib green visual language. It now showcases a hero intro, circular achievement grid, and an animated detail sheet so your Android teammate can swipe through flows quickly during the hackathon.

## Quick start

| Action | Command |
| --- | --- |
| Install deps | `npm install` |
| Start dev server | `npm run dev` |
| Type-check + build | `npm run build` |
| Lint | `npm run lint` |

Dev server defaults to [http://localhost:5173](http://localhost:5173). Resize the browser to ~390px width to simulate the mobile viewport.

## File map

- `src/App.tsx` – hero banner, circular grid, modal-style detail sheet, and mocked achievement data.
- `src/App.css` – design tokens, grid layout, progress ring styling, and modal animation.
- `src/assets/mascot.png` – placeholder mascot used for every logo until you drop in the official export.

## Customising the content

- Edit the `achievements` array in `src/App.tsx` to update title, copy, progress, or to point to different logos.
- Replace `src/assets/mascot.png` with any transparent PNG (keep the same filename for an instant swap).
- The conic-gradient progress ring automatically reflects the `progress` value (0–100). No extra props required.

### Lottie pulse effect

`lottie-react` powers the subtle pulse displayed behind the enlarged logo in the detail sheet. If you have a branded JSON file from motion designers, replace `pulseAnimation` with your asset and the animation updates instantly.

### Brand tweaks

Key colors live in the `:root` block of `src/App.css` (`--maib-green`, `--maib-navy`, `--maib-ink`, etc.). Updating these instantly re-themes the prototype. Manrope is loaded via Google Fonts inside `src/index.css`.

## Next ideas

- Wire the grid to a lightweight API or local JSON file to mimic real achievements.
- Add swipe gestures (e.g., `react-spring` or `framer-motion`) if you want to demo transitions similar to the native app.
- Slot different mascot illustrations per achievement to communicate categories at a glance.