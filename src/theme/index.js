import cssVars from 'css-vars-ponyfill'

const baseSize = {
  '--font-size-large-x': '22px',
  '--font-size-large': '18px',
  '--font-size-medium': '14px',
  '--font-size-medium-x': '16px',
  '--font-size-small-s': '10px',
  '--font-size-small': '12px',
}
const themeOptions = {
  dark: {
    ...baseSize,
    '--text-color': '#fff',
    '--main-bg-color': '#222',
  },
  ligth: {
    ...baseSize,
    '--color': '#black',
    '--main-bg-color': '#fff',
  },
}

const initTheme = function(theme) {
  cssVars({
    watch: true, // 当添加，删除或修改其或元素的禁用或href属性时，ponyfill将自行调用
    variables: themeOptions[theme], // variables 自定义属性名/值对的集合
    onlyLegacy: false, // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
  })
}

export default initTheme
