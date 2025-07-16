export default class Home {
    //     声明一个集合对象用于存储元素对象
    nodeList = [];
    // 添加元素功能
    add(node) {
        this.nodeList.push(node);
    }
    action(person) {
        // 遍历集合获取每一个对象，让访问者访问每一个元素
        for (let node of this.nodeList) {
            node.accept(person);
        }
    }
}
