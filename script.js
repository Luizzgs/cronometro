const initialState = {
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    running: false,
    interval: null
  }
  
  const formatTime = (time) => {
    return time < 10 ? '0' + time : time
  }
  
  const tick = (state) => {
    const { hour, minute, second, millisecond } = state
    return {
      ...state,
      millisecond: millisecond + 10 >= 1000 ? 0 : millisecond + 10,
      second: millisecond + 10 >= 1000 ? second + 1 : second,
      minute: second === 60 ? minute + 1 : minute,
      hour: minute === 60 ? hour + 1 : hour
    }
  }
  
  const start = (state) => {
    return {
      ...state,
      running: true,
      interval: setInterval(() => {
        update()
      }, 10)
    }
  }
  
  const pause = (state) => {
    clearInterval(state.interval)
    return {
      ...state,
      running: false,
      interval: null
    }
  }
  
  const reset = () => {
    return initialState
  }
  
  const update = () => {
    state = tick(state)
    render(state)
  }
  
  const render = (state) => {
    const { hour, minute, second, millisecond } = state
    document.getElementById('hour').innerText = formatTime(hour)
    document.getElementById('minute').innerText = formatTime(minute)
    document.getElementById('second').innerText = formatTime(second)
    document.getElementById('millisecond').innerText = formatTime(millisecond)
  }
  
  let state = initialState

  document.getElementById('start').addEventListener('click', () => {
    if (!state.running) {
      state = start(state)
    }
  })
  
  document.getElementById('pause').addEventListener('click', () => {
    if (state.running) {
      state = pause(state)
    }
  })
  
  document.getElementById('reset').addEventListener('click', () => {
    state = reset()
    render(state)
  })