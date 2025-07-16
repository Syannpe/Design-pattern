/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";
import Owner from "./Owner";
import Someone from "./Someone";

export default class Client {
    static main(args: string[]): void {
        const home: Home = new Home();
        home.add(new Cat());
        home.add(new Dog());

        home.action(new Owner());
        home.action(new Someone())


    }
}

Client.main([])