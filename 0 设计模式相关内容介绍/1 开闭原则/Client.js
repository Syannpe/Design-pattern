import { SougouInput } from "./SougouInput";
import { HeimaSkin } from "./HeimaSkin";
// 1 创建搜狗输入法对象
const input = new SougouInput();
// 创建皮肤对象
const skin = new HeimaSkin();
// 将皮肤设置到输入法中
input.setSkin(skin);
//显示皮肤
input.display();
