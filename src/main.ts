import {
  getSelectedNodesOrAllNodes,
  loadFontsAsync
} from '@create-figma-plugin/utilities'

import { showUI, on } from '@create-figma-plugin/utilities';

export default async function () {

  async function scaleText() {
    let allNodes = getSelectedNodesOrAllNodes()
  // loadFontsAsync(allNodes)

  for (const node of allNodes) {
    if (node.type === 'FRAME' && node.name === 'scale-text') {
      let textNode = node.children[0];
      let scaleFrameWidth = node.width;
      
      if(textNode.type === 'TEXT') {
        let textFontSize = Number(textNode.fontSize)
        let textWidth = textNode.width

        let widthDelta = Math.abs(scaleFrameWidth - textWidth)
        
        if(textFontSize > 1) {
          let newFontSize = (textFontSize * scaleFrameWidth)/textWidth
          console.log(newFontSize)

          await figma.loadFontAsync({ family: "Roboto", style: "Regular" })
          textNode.textAutoResize = 'WIDTH_AND_HEIGHT'
          textNode.fontSize = newFontSize

          console.log(widthDelta)
        }
      }
    }
  }
  }

  async function changeLanguage() {
    let allTextNodes = figma.currentPage.findAll(node => node.type === "TEXT")

  // loadFontsAsync(allNodes)

  for (const node of allTextNodes) {
      if(node.type === 'TEXT') {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" })
        console.log('found text')
      }
    }
  }

  // Show the UI
  const options = { width: 240, height: 200 }
  const data = { text: null }
  showUI(options, data)

  on('SCALE_TEXT', scaleText)
  on('CHANGE_LANGUAGE', changeLanguage)

}
