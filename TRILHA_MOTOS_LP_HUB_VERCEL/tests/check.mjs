import fs from 'node:fs'
const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const css = fs.readFileSync(new URL('../style.css', import.meta.url), 'utf8')
const js = fs.readFileSync(new URL('../script.js', import.meta.url), 'utf8')
const required = ['5531988386326','lojatrilha.motos','rieju.com.br','Rua Ester, 725','bike-form']
for (const item of required) if (!html.includes(item) && !js.includes(item)) throw new Error(`Ausente: ${item}`)
if (/kingger/i.test(html + css + js)) throw new Error('Referência antiga à Kingger encontrada')
for (const asset of ['favicon.png','hero-poster.jpg','logo-compacta.webp','logo-principal.webp','trilha-loop.mp4']) {
  if (!fs.existsSync(new URL(`../assets/${asset}`, import.meta.url))) throw new Error(`Asset ausente: ${asset}`)
}
console.log('LP validada')
