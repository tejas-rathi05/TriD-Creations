import { atom } from 'recoil'

const metalState = atom({
  key: 'metalState',
  default: 'Gold'
})

const activeMetalState = atom({
  key: 'activeMetalState',
  default: 'Gold'
})

export {
  metalState,
  activeMetalState
}