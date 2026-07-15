# Day 1 Speaker Cue Cards — Props to Closing

These are reminders, not a script to memorise. Use one simple rhythm throughout:

1. Ask the whole room to predict with a hand vote.
2. Call one student for a one-sentence reason.
3. Show the visual result.
4. Explain why it changed.
5. Move to the next checkpoint.

## One-glance stage run sheet

1. **Props PPT:** same component, different information.
2. **Props website:** lid changes all cups; one sugar prop changes one cup.
3. **Tailwind PPT:** each class has one small styling job.
4. **Tailwind website:** four students choose background, corners, padding, and shadow.
5. **Hands-on rule:** copy → paste → save → read terminal → green checkpoint.
6. **#00:** clean page.js and test **/**.
7. **#01:** build ProfileCard; no browser change yet.
8. **#02:** explain img versus Image; add **imageSrc**; no browser change yet.
9. **#03:** create **about/page.js**; card and image finally appear.
10. **#04:** apply final card styles and About-page gradient.
11. **Summary:** recap and GitHub/Vercel accounts only.
12. **Close:** raised-hand Q&A → lucky draw → feedback/certificate → contact → Thank You.

## Private setup before your part

- **Mac Space 1 — PPT:** Open on page 58, the first Props slide.
- **Mac Space 2 — workshop website:** Pre-open Props, Tailwind, Hands-on #00–#04, and Summary as tabs in that exact order.
- **Mac Space 3 — VS Code + localhost:** Keep one clean cumulative demo project that starts without **/about**. Confirm **npm run dev** and **/** work. Keep a separate completed backup project where **/about** already works.
- Put the browser around 110–125% zoom and VS Code around 18–20 px.
- Turn on Focus mode and close personal notifications and tabs.
- Keep one completed project ready for your demonstration.
- Test both profile downloads in website Hands-on #02. Either choice saves as **profile.png**; students place it at **public/profile.png** and use **imageSrc="/profile.png"**. Keep offline copies as backup.
- Assign roughly five students to each helper. At every green “Done when” box, helpers signal readiness. A helper catches up a delayed cluster while you continue; students can follow the website notes.

### PPT fixes before rehearsal

- Page 60: replace the old **course** prop with **title**.
- Page 68: test **/**, not **/about**.
- Pages 66, 72, 76, 79, and 83: remove the student-facing time estimates.
- Pages 73–74: use the progressive **name**, **title**, **desc**, then **imageSrc** flow and remove the editor reminder.
- Page 77: avoid saying every img is automatically slow. Explain that img needs more manual sizing/loading decisions, while Next.js Image provides integrated help.
- Page 87: require only GitHub and Vercel accounts.
- Final slides: raised-hand Q&A first, then lucky draw, feedback/certificate, contact, and Thank You.

## Card 1 — Return from the break

**PPT cue:** Page 58 — Props.

**Screen cue:** Begin on PPT, then move to the website Props topic.

**Say:** “Welcome back. Earlier, we learned that a component is one reusable template. But if every card always says Ahmad, it is not very flexible. Props are how we give the same component different information. Watch first; we will code during the hands-on section. I’ll ask you to predict a few changes—no stress if the guess is wrong, because we will test it together.”

**Ask:** “If one hardcoded ProfileCard says Ahmad and I use it three times, how many Ahmad cards will appear?”  
Expected: three.

## Card 2 — Pass and receive props

**PPT cue:** Pages 59–61 — hardcoded versus reusable, pass/receive, parent/child.

**Screen cue:** On the website, point first to the ProfileCard usage, then to the function parameters.

**Say:** “When the parent uses ProfileCard, it passes the values. The child receives them inside the curly braces and displays them. Think of each prop as a labelled delivery box. The data travels one way: parent to child.”

**Ask:** “Where does Ahmad start: at the ProfileCard usage or inside the function?”  
Expected: at the usage in the parent.

## Card 3 — Bubble Tea visual

**PPT cue:** Hold on page 61.

**Screen cue:** Open the Bubble Tea visual on the Props website page.

**Say:** “The cup design is the shared component. If I change the lid in the component, every cup updates. Flavour and sugar are props because each order can receive different values. The ProfileCard works the same way: one card design, different student information. Our four ProfileCard names stay consistent: **name**, **title**, **desc**, and **imageSrc**.”

**Ask:** “Before I click: will changing the lid update one cup or all cups? If I change only Home’s sugar, how many cups change?”  
Expected: all cups; then only Home.

## Card 4 — Tailwind theory

**PPT cue:** Pages 62–65 — Tailwind introduction, class breakdown, cheat sheet.

**Screen cue:** Show the website’s CSS-versus-Tailwind comparison and class breakdown.

**Say:** “Tailwind gives us small styling instructions inside **className**. Read them from left to right: **bg-white** changes the background, **p-4** adds inner space, **rounded-xl** changes the corners, and **shadow-lg** adds depth. Tailwind goes inside **className**; actual React inline CSS uses **style={{ ... }}**. You do not need to memorise everything; you need to recognise the pattern and know where to look.”

**Ask:** “If I want square corners, which class should I change?”  
Expected: the rounded class.

## Card 5 — Tailwind audience playground

**PPT cue:** Hold on page 64, then briefly show the cheat-sheet reference on page 65.

**Screen cue:** Open the Tailwind playground on the website.

**Say:** “I need four designers. One person chooses the background, one chooses the corners, one chooses the padding, and one chooses the shadow. Before I click each choice, everyone predicts which part of the card will change. Notice that the generated **className** changes together with the card.”

**Ask:** Ask each selected student for a choice, then ask the room: “Will this change colour, corners, inside space, or depth?”

## Card 6 — Start the hands-on section

**PPT cue:** Page 66, the Hands-on #00 transition. Slides 69–71 belong to the earlier Build and Fast Refresh topic.

**Screen cue:** Open **/day-1/hands-on-00**, then keep the website beside VS Code.

**Say:** “Now we stop watching and start building. Follow one website section at a time: copy, paste, save, and check the green ‘Done when’ box. If your cluster falls behind, keep the website open and your helper will catch you up while we continue.”

**Ask:** “What do we do after pasting: immediately panic, or save and read the terminal?”  
Expected: save and check the terminal.

## Card 7 — Hands-on #00: clean the page

**PPT cue:** Pages 67–68.

**Screen cue:** Website Hands-on #00 → VS Code **src/app/page.js** → browser **/**.

**Say:** “The default page proved Next.js was installed correctly. Now we remove that boilerplate and make the project ours. Delete everything in page.js, paste the small Home component, save, and check the root page. Helpers signal when ‘My Workspace’ appears without a red terminal error.”

**Ask:** “After saving, should we test **/** or **/about**?”  
Expected: **/**.

## Card 8 — Hands-on #01: ProfileCard

**PPT cue:** Pages 72–75.

**Screen cue:** Website Hands-on #01 → create **src/components/ProfileCard.js**.

**Say:** “Now we build the reusable card template. It receives **name**, **title**, and **desc**. The curly braces display whatever values a parent gives later. Do not worry when the browser does not change yet—we created the component, but no page is using it yet.”

**Ask:** “We saved ProfileCard.js. Do you predict the card will appear in the browser already?”  
Expected: no, because it has not been imported and used.

## Card 9 — Hands-on #02: Image

**PPT cue:** Pages 76–78.

**Screen cue:** Show the website’s img-versus-Image comparison, then **public/** and **ProfileCard.js** in VS Code.

**Say:** “Lowercase **img** is the browser’s basic image tag. Capital **Image** is the Next.js helper component that we import from next/image. It still displays a picture, but it also helps serve a suitable size, load it when needed, and keep space ready so the page does not jump. Think of width and height as reserving the image’s seat before it arrives. For today, remember five things: import, src, alt, width, and height. Choose either profile picture and move the downloaded **profile.png** into **public/**. Its browser path is **/profile.png**—do not include the word public. Add **imageSrc** as our fourth prop. The image will only become visible after the next section renders ProfileCard on a page.”

**Ask:** “For **public/profile.png**, should imageSrc be **public/profile.png** or **/profile.png**?”  
Expected: **/profile.png**.

## Card 10 — Hands-on #03: About route

**PPT cue:** Pages 79–82.

**Screen cue:** Website Hands-on #03 → Home page.js → about/page.js → localhost.

**Say:** “This is where everything connects. The **about** folder creates the **/about** part of the URL, and its special **page.js** file supplies the page. Home uses Link to navigate there. The About page imports ProfileCard and passes all four props. When we save, the card and image should finally appear.”

**Ask:** “What creates **/about**: naming the function About, or the **about/page.js** file path?”  
Expected: the folder and page.js path.

## Card 11 — Hands-on #04: style the card

**PPT cue:** Pages 83–84.

**Screen cue:** Briefly revisit the Tailwind playground, then open Hands-on #04 and VS Code.

**Say:** “Now we apply the same four ideas we tested: background, spacing, corners, and shadow. Copy the final combined ProfileCard example and the About-page gradient, then save both files. The photo uses **rounded-full** for a circle and **object-cover** so a differently shaped photo crops neatly. Helpers check that the card is readable, the image is circular and unsquashed, and the background gradient appears. After the baseline works, each cluster can change one class and tell its helper what changed.”

**Ask:** “If I replace **rounded-full** with **rounded-none**, what do you predict will happen to the photo?”  
Expected: it becomes square.

## Card 12 — Summary and Day 2 preparation

**PPT cue:** Pages 85–87.

**Screen cue:** Open **/day-1/day-1-summary** and scroll through the recap.

**Say:** “Today you built a real Next.js project with a reusable component, props, an image, a second route, and Tailwind styling. For Day 2, we will make it interactive and deploy it. Before then, only prepare free GitHub and Vercel accounts—you do not need to connect or push anything tonight.”

**Ask:** “If I change only the **name** prop, what do you predict will change on the card?”  
Expected: the displayed name, not the shared card design.

## Card 13 — Final Q&A

**PPT cue:** Use the corrected Q&A slide. Put it before the lucky draw and remove the old QR-question instruction.

**Screen cue:** PPT only; keep the website Summary ready in the next Space.

**Say:** “Before the lucky draw, any questions? Raise your hand. It can be about why the code works, not only an error. For a laptop-specific problem, a helper will come to you while I take the next question.”

**Ask:** If nobody starts: “Which part was most confusing: props, Image, routing, or Tailwind?” Take a hand vote. Then use one concrete prompt: “If I change only the name prop, what do you predict will change?”

## Card 14 — Lucky draw

**PPT cue:** Corrected lucky-draw slides, currently around pages 88–89.

**Screen cue:** Switch to the approved draw tool with personal tabs hidden.

**Say:** “Alright, time for the lucky draw. When your name appears, raise your hand so we can confirm you are here. Let’s count down together: three, two, one.”

**Ask:** Use the whole-room countdown, then clearly confirm each winner according to the organiser’s final redraw rule.

## Card 15 — Feedback, certificate, and closing

**PPT cue:** Corrected feedback, certificate, contact, and Thank You slides, currently around pages 90–94.

**Screen cue:** Show only the official feedback QR/link, then finish on the contact and Thank You slides.

**Say:** “Before you leave, please complete the feedback form. Tell us what was clear and what we should explain better on Day 2. For the certificate, follow the organiser-confirmed instruction on this slide; I will not promise a date unless it is confirmed. I’ll leave the corrected contact slide up so you can take a photo. If you get stuck later, the workshop website has all the notes and code. Today you started as a beginner and finished with your own page. Thank you for joining, and thank you to all our helpers. I’ll see you on Day 2.”

**Ask:** “Hands up if the feedback page is open. And who is coming back for Day 2?”

## Final reminders

- Ask for a prediction before showing a result.
- Keep Props and Tailwind watch-only; coding begins at Hands-on #00.
- Do not debug one laptop on the projector. Let that cluster’s helper handle it.
- Say clearly when no browser change is expected in Hands-on #01 and #02.
- Every student completes the baseline for #00–#04. Personal styling experiments come after the baseline works.
- The website is the catch-up path, so you do not need to repeat every instruction.
