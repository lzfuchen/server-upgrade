import modal from './modal'

class ServerUpgrade {
  init() {}

  show() {
    modal.show()
  }

  close() {
    modal.close()
  }
}

export const StbSU = new ServerUpgrade()

export default StbSU
