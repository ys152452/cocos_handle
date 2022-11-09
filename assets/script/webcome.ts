import { _decorator, Component, Node, screen, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('webcome')
export class webcome extends Component {
    @property(Node)
    private Bg: Node = null;
    @property(Node)
    private TitleBox: Node = null;
    @property(Node)
    private ContentBox: Node = null;
    @property(Node)
    private Rules: Node = null;
    @property(Node)
    private StartBtn: Node = null;

    start() {
        console.log(this.Bg)
        this.initPostion();
    }
    initPostion() {
        const { x = 720, y = 1280 } = screen.windowSize;
        const paddingTop: number = y / 2 - Math.ceil(y * 0.16);
        const paddingBottom: number = Math.ceil(y * 0.12) - (y / 2);
        const titleBoxHeight: number = this.TitleBox.getComponent(UITransform).height;
        const contentY = paddingTop - titleBoxHeight;
        this.TitleBox.setPosition(0, paddingTop);
        this.ContentBox.setPosition(0, contentY);
        this.StartBtn.setPosition(0, paddingBottom);
        this.Rules!.getComponent(UITransform)!.height = y - Math.ceil(y * 0.28) - titleBoxHeight - 200;
    }

    update(deltaTime: number) {

    }
}

