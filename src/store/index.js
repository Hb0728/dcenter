import { createStore } from 'vuex'

export default createStore({
  state: {
    failchangeTotal:'',
    failPendingTotal:'',
    recycleStationTotal:'',
    sendSuccessTotal:'',
    waitPendingTotal:'',
    waitSendTotal:'',
  },
  mutations: {
    setfailchangeTotal(state,data){
      state.failchangeTotal=data
    },
    setfailPendingTotal(state,data){
      state.failPendingTotal=data
    },
    setrecycleStationTotal(state,data){
      state.recycleStationTotal=data
    },
    setsendSuccessTotal(state,data){
      state.sendSuccessTotal=data
    },
    setwaitPendingTotal(state,data){
      state.waitPendingTotal=data
    },
    setwaitSendTotal(state,data){
      state.waitSendTotal=data
    },
  },
  actions: {
    
  },
  modules: {
  }
})
