const { desktopCapturer } = require("electron")
const {Menu} = remove;

//BUTTONS
const videoElement = document.querySelector('video')
const startBtn = document.getElementById('start-btn')
const stopBtn = document.getElementById('stop-btn')
const videoSelectionBtn = document.getElementById('videoSelectBtn')


//GET THE AVAILABLE VIDEO SOURCE

async function getVideoSource () {
    const inputSources = await desktopCapturer.getSources({
      types: ['window', 'screen']
    })


  const videoOptionsMenu = Menu.builFromTemplate(
    inputSources.map(source => {
      return {
        label:source.name,
        click: ()=> selectSource(source)
      }

    })
  )

  videoOptionsMenu.popup()

}

