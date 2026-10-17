export default async function run(page) {
  return await page.evaluate(() => {
    const h = document.querySelector("h1");
    const cs = getComputedStyle(h);
    const dm = [...document.fonts].filter((f) => f.family.includes("DM Mono"));
    return {
      h1Text: h.innerText,
      computedFamily: cs.fontFamily,
      computedWeight: cs.fontWeight,
      check16: document.fonts.check('16px "DM Mono"'),
      check300: document.fonts.check('300 16px "DM Mono"'),
      faces: dm.map((f) => `${f.family} ${f.weight} ${f.style} -> ${f.status}`),
    };
  });
}