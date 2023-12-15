import { atom } from 'recoil'

const gemState = atom({
  key: 'gemState',
  default: 'White'
})

const activeBorder = atom({
  key: 'colorState',
  default: 'Ruby'
})

export {
  gemState,
  activeBorder
}