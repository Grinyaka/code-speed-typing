const fs = require('fs')
const path = require('path')

const availableExtensions = ['ts', 'tsx', 'js', 'jsx']

function collectFilesContent(dir, collectedContent = '') {
  const items = fs.readdirSync(dir, {recursive: true})
  items.forEach((item) => {
    const fileExtension = path.extname(item).slice(1)
    if (!availableExtensions.includes(fileExtension)) return
    const fullPath = path.join(dir, item)
    if (fullPath.split('.').length > 2) return
    if (fs.lstatSync(fullPath).isDirectory()) {
      collectedContent = collectFilesContent(fullPath, collectedContent)
    } else {
      const fileContent = fs.readFileSync(fullPath, 'utf8')
      collectedContent += `<{${item}}>\n${fileContent}\n\n`
    }
  })

  return collectedContent
}

const directoryPath = path.join(__dirname, '../')
const allCode = collectFilesContent(directoryPath)
const outputFilePath = path.join(__dirname, '../assets/code.txt')

fs.writeFileSync(outputFilePath, allCode)
