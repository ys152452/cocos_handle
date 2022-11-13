import { _decorator, Component, Node, screen, UITransform, WebView, director } from "cc";
const { ccclass, property, type } = _decorator;

@ccclass("webviewEvents")
export class home extends Component {
  @type(WebView)
  webview = null;
  @property(Node)
  private Main: Node = null;
  @property(WebView)
  private Content: WebView = null;
  @property(Node)
  private TitleBox: Node = null;
  @property(Node)
  private BtnNext: Node = null;
  start() {
    this.initPostion();
    this.setWebviewHandler();
    this.addEventHandler();
  }
  initPostion() {
    const { x = 720, y = 1280 } = screen.windowSize;
    const paddingTop: number = y / 2 - Math.ceil(y * 0.16);
    const paddingBottom: number = Math.ceil(y * 0.12) - y / 2;
    const titleBoxHeight: number =
      this.TitleBox.getComponent(UITransform).height;
    const contentHeight: number =
      y - Math.ceil(y * 0.28) - titleBoxHeight - 200;
    const contentY = paddingTop - titleBoxHeight - contentHeight / 2;
    console.log(contentY);
    this.TitleBox.setPosition(0, paddingTop);
    this.Main.setPosition(0, contentY);
    // this.BtnBox.setPosition(0, paddingBottom);
    this.Main!.getComponent(UITransform)!.height = contentHeight;
  }
  addEventHandler() {
    this.BtnNext.on(Node.EventType.TOUCH_END, (event) => {
      console.log('next', this.webview)
      // this.webview._sgNode._renderCmd._iframe.contentWindow.postMessage(data, "*");

    })
  }
  setWebviewHandler() {
    window.addEventListener('message', (d) => {
      console.log(d)
      const { data = {} } = d;
      const { evt } = data;
      if (evt) {
        switch (evt) {
          case 'pass':
            console.log('passsss')
            this.BtnNext.active = true;
            break;
          case 'fail':
            console.log('fail', data)
            this.BtnNext.active = false;
            break;
        }
      }
    })
  }
  update(deltaTime: number) { }
}
// todo
// 答错增加main的高度
// 速查表摘出
// 确定按钮事件
// 重置事件
// 提示事件 穿插广告占位
// 下一题
// 录制
