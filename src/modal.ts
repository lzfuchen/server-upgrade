import template from './template'
import { getStyle } from './utils'

let instance: HTMLDivElement | null = null
let originalOverflow: string | null = null

export function show() {
  originalOverflow = getStyle(document.body, 'overflow')
  if (!instance) {
    instance = document.createElement('div')
    instance.innerHTML = template
    document.body.appendChild(instance)
  }
  document.body.style.overflow = 'hidden'
}

export function close() {
  if (instance) {
    document.body.removeChild(instance)
    instance = null
  }
  if (originalOverflow) {
    document.body.style.overflow = originalOverflow
  }
}

export default { show, close }
