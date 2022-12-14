
/**
 * 获取指定元素的clientWidth/clientHeight
 * @param type
 * @param dom 指定元素，default = body
 * @param percent 指定百分比值：0-100
 * @returns
 */
 export const client = (
  type: 'width' | 'height',
  dom?: HTMLElement | string,
  percent?: number
) => {
  let value = 0
  if (dom) {
    dom = typeof dom === 'string'
      ? (document.querySelector(dom) as HTMLElement)
      : dom
  } else {
    dom = document.body
  }

  switch (type) {
    case 'width':
      value = dom ? dom.clientWidth : 0
      break
    case 'height':
      value = dom ? dom.clientHeight : 0
      break
    default:
      break
  }
  return percent ? (value * percent) / 100 : value
}
