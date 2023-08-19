let handler = async(m, { conn, text }) => {
  if (!text) throw `No symbol detected ...`
  global.prefix = new RegExp('^[' + (text || global.opts['!'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  await m.reply(`the prefix has been changed to  *${text}*`)
}
handler.help = ['setprefix'].map(v => v + ' [!]')
handler.tags = ['VIRUS']
handler.command = /^(setprefix)$/i
handler.rowner = true

export default handler
